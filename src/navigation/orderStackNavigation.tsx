import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RouteName } from "../constant";
import { OPTS_COMMON } from './navigationConfig';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'native-base';
import { View } from 'react-native';
import { OrderLayout } from 'screens/OrderScreen';
import { Label } from 'components';
import NewOrder from 'screens/OrderScreen/layouts/NewOrder';


const Stack = createStackNavigator();
type Props = {
    navigation: any
};

export const OrderStack = (props: Props) => {
    return (
        <Stack.Navigator
            screenOptions={{
                ...OPTS_COMMON
            }}>
            <Stack.Screen
                name={RouteName.ORDER}
                component={OrderLayout}
                options={{
                    headerShown: true,
                    headerTitle: 'Đơn hàng',
                    headerRight: () => {
                        return (
                            <TouchableOpacity
                                style={{ marginRight: 10, justifyContent: 'center', alignItems: 'center' }}
                                onPress={() => {
                                    props.navigation.navigate(RouteName.ORDER_NEWORDER)
                                }}
                            >
                                <Icon name='add-circle' type='MaterialIcons' style={{ fontSize: 22, color: 'white' }} />
                                <Label color='white'>Tạo đơn</Label>
                            </TouchableOpacity>
                        )
                    },
                }}
            />
            <Stack.Screen
                name={RouteName.ORDER_NEWORDER}
                component={NewOrder}
                options={{
                    headerShown: true,
                    headerTitle: 'Tạo đơn hàng',
                }}
            />
        </Stack.Navigator>
    );

}
