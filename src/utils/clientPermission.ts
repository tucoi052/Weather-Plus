import DeviceInfo from "react-native-device-info";
import alertDefaultTitle from './AlertDefaultTitle';
import { MessageDefine } from 'locales';
import { Platform, PermissionsAndroid } from 'react-native';
const ClientPermission = class {
    /**
     * Truy cập vị trí
     */
    GeoLocation = async () => {
        try {
            let hasPermission = true
            if (Platform.OS === 'android' && Platform.Version >= 23) {
                hasPermission = await PermissionsAndroid.check(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
                )
                if (!hasPermission) {
                    const status = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
                    )
                    hasPermission = status === PermissionsAndroid.RESULTS.GRANTED

                    if (!hasPermission) {
                        alertDefaultTitle.show(MessageDefine.REQUIRE_OPEN_GPS, "Đồng ý");
                        return false;
                    }
                    return true;
                }
                return true;
            }
        } catch (error) {
            alertDefaultTitle.show(MessageDefine.REQUIRE_OPEN_GPS, "Đồng ý");
            return false;
        }
    }

    /**
     * Truy cập bộ nhớ
     */
    AccessStorage = async () => {
        try {
            if (Platform.OS === 'android') {
                const grantedWrite = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        title: 'Quyền truy cập bộ nhớ',
                        message: 'Cấp quyền truy cập bộ nhớ để chọn ảnh và file ghi âm!',
                        buttonPositive: 'ok',
                    },
                );
                if (grantedWrite !== PermissionsAndroid.RESULTS.GRANTED) {
                    alertDefaultTitle.show('Cấp quyền truy cập bộ nhớ để chọn ảnh và file ghi âm!', 'Đồng ý');
                    return false;
                }
                return true;
            }
        } catch (err) {
            alertDefaultTitle.show('Cấp quyền truy cập bộ nhớ để chọn ảnh và file ghi âm!', 'Đồng ý');
            return false;
        }
    }

    /**
     * Truy cập camera
     */
    Camera = async () => {
        try {
            if (Platform.OS === 'android') {
                const grantedCamera = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                    {
                        title: 'Quyền sử dụng máy ảnh',
                        message: 'Cấp quyền sử dụng máy ảnh để chụp ảnh!',
                        buttonPositive: 'ok',
                    },
                );
                if (grantedCamera !== PermissionsAndroid.RESULTS.GRANTED) {
                    alertDefaultTitle.show('Cấp quyền sử dụng máy ảnh để chụp ảnh!', 'Đồng ý');
                    return false;
                }
                return true;
            }

        } catch (err) {
            alertDefaultTitle.show('Cấp quyền truy cập máy ảnh!', 'Đồng ý');
            return false;
        }
    }

    /**
     * Ghi âm
     */
    Record = async () => {
        try {
            if (Platform.OS === 'android') {
                const grantedCamera = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
                    {
                        title: 'Quyền truy cập ghi âm',
                        message: 'Cấp quyền sử dụng máy ghi âm để ghi âm!',
                        buttonPositive: 'ok',
                    },
                );
                if (grantedCamera !== PermissionsAndroid.RESULTS.GRANTED) {
                    alertDefaultTitle.show('Cấp quyền sử dụng máy ghi âm để ghi âm!', 'Đồng ý');
                    return false;
                }
                return true;
            }

        } catch (err) {
            alertDefaultTitle.show('Cấp quyền sử dụng máy ghi âm để ghi âm!', 'Đồng ý');
            return false;
        }
    }
}
const clientPermision = new ClientPermission();
export default clientPermision;