import AsyncStorage from '@react-native-community/async-storage';

class ClientStorage {
    set(key: string, item: any) {
        (async () => {

            try {
                await AsyncStorage.setItem(key, item);

            } catch (error) {

            }
        })();

    }
    async get(key: string) {
        try {
            return await AsyncStorage.getItem(key);

        } catch (error) {
            return null;
        }
    }


}
const clientStorage = new ClientStorage();
export default clientStorage;