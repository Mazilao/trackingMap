import AsyncStorage from '@react-native-async-storage/async-storage';


export default class Storage {

    async listContents() {
        const keys = await AsyncStorage.getAllKeys();
        const result = await AsyncStorage.multiGet(keys);

        return result;
    } 
    
    async getKeys() {
        const keys = await AsyncStorage.getAllKeys();
        return keys;               
    }

    async save(index, content) {
        await AsyncStorage.setItem(index.toString(), JSON.stringify(content));
    }

    async deleteContent(index) {
        const value = await AsyncStorage.getItem(index.toString());
        if(value !== null) {
            await AsyncStorage.removeItem(index.toString());
        }
    }

    async clearContent() {
        const keys = await AsyncStorage.getAllKeys();
        await AsyncStorage.multiRemove(keys);
    }

}