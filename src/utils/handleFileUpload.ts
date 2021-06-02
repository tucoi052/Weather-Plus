import { client } from "api/client";
import { Endpoint } from "api/endpoint";
import { AxiosResponse } from "axios";
import { UploadResponse } from "models/upload";
import { Platform } from "react-native";
import { ImagePickerResponse } from "react-native-image-picker";

class HandleFileUpload {
    upload = async (f: string, fileType?: string): Promise<UploadResponse | undefined> => {
        const specFilename = f.lastIndexOf("/");
        let fileName = f.substr(specFilename + 1, f.length);
        let currentTime = new Date().getMilliseconds();

        if (!fileName.includes('.')) {

            fileName = `${currentTime}.png`;
        }
        else {
            fileName = `${currentTime}_${fileName}`;
        }
        if (!!!fileType) {
            fileType = fileName.includes('mp3') ? 'audio/mp3' : (fileName.includes('mp4') ? 'video/mp4' : 'image/jpeg');
        }
        let realPath = f;
        if (Platform.OS != 'android') {
            realPath = f.replace('file://', '');
        }
        else realPath = 'file://' + f;

        const formData = new FormData();
        let fileBlob: any = {
            name: fileName,
            type: fileType ? fileType : 'image/jpeg',
            uri: realPath
        }
        formData.append('file', fileBlob);
        let clientRequest = await client.upload(Endpoint.UPLOAD, formData);
        if (clientRequest?.status == 200)
            return clientRequest.data;
        else
            return undefined;

    }
    download = () => {

    }
}
const handleFileUpload = new HandleFileUpload();
export default handleFileUpload;