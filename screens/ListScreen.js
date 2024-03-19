import React, { useState, useEffect }  from 'react';
import { Text, ScrollView, View, Button } from 'react-native';
import Storage from '../database/Storage';

const storage = new Storage();

export default function ListScreen({ navigation }) {
  const [ contents, setContents ] = useState([]); 

  useEffect(()=>{
    navigation.addListener('focus', () => onUpdate())
  },[]);

  const onUpdate =(() => {
       storage.listContents().then((stores) => {
        let contents = [];
        if (stores) {
          //alert(JSON.parse(JSON.stringify(stores))); 
          for(let i=0; i<stores.length;i++){
            //console.log(i);
            let row = stores[i];
            //console.log(row);
            let id = row[0];
            //console.log(id);
            if (id != "SnackDeviceId" && id != "EXPO_CONSTANTS_INSTALLATION_ID") {
                let data = JSON.parse(row[1]);
                if (data !== null) {
                    //console.log(data);
                    let {latitude, longitude } = data;
                    contents.push({id, latitude, longitude});
                }    
            }    
          }
          setContents(contents); 
        }
      });
  })  

  const renderContent=(()=>{
    return(
      contents.map((content, index) =>{
        return ( 
            <Text>{content.latitude} - {content.longitude}</Text>
        )
      })
    );
  })
  

  return (
    <View style={{flex: 1}}>
    <ScrollView style={{marginBottom: 20}}>
      { renderContent() }
     </ScrollView>
     <Button
        onPress={()=>{storage.clearContent();navigation.navigate('MapScreen')}}
        title="Apagar"
        color="red"
      />
    </View>
  );
}    