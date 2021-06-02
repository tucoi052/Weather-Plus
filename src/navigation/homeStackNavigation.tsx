import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeLayout from 'screens/DashboardScreen';
import { RouteName } from "../constant";
import { OPTS_COMMON } from './navigationConfig';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'native-base';
import { View } from 'react-native';


const Stack = createStackNavigator();
type Props = {};

export const HomeStack = (props: Props) => {
    return (
        <Stack.Navigator
            screenOptions={{
                ...OPTS_COMMON
            }}>
            <Stack.Screen
                name={RouteName.HOME}
                component={HomeLayout}
                options={{
                    headerShown: true,
                    headerTitle: 'Dashboard',
                    headerRight: () => {
                        return (
                            <View style={{ marginRight: 10 }}>
                                <TouchableOpacity
                                    onPress={() => {
                                    }}
                                >
                                    <Icon name='notifications' style={{ fontSize: 22, color: 'white' }} />
                                </TouchableOpacity>
                            </View>
                        )
                    },
                    // headerTitleAlign: 'left'
                }}
            />
        </Stack.Navigator>
    );
}
