import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import React, { Component } from 'react';
import { Dimensions, Platform, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import store from 'store/configureStore';
import { Icon, Label } from 'native-base';
import { HomeStack } from './homeStackNavigation';
import { OrderStack } from './orderStackNavigation';


const Tab = createBottomTabNavigator();
type Props = {};

export const TabContainer = (props: Props) => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#00eeff',
                inactiveTintColor: 'white',
                showLabel: true,
                style: { backgroundColor: '#0028a8', paddingBottom: Platform.OS == 'android' ? 15 : 0, height: '8%' }
            }}>
            <Tab.Screen
                name='Trang chủ'
                options={({ route, navigation }) => ({
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Icon name='home' style={{ fontSize: size, color: color }} />
                        );
                    },
                })}
                component={HomeStack}
            />
            <Tab.Screen
                name='Đơn hàng'
                options={({ route, navigation }) => ({
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Icon name='cart' style={{ fontSize: size, color: color }} />
                        );
                    },
                })}
                component={OrderStack}
            />
            <Tab.Screen
                name='COD & Đối soát'
                options={({ route, navigation }) => ({
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Icon name='ticket' type='FontAwesome' style={{ fontSize: size, color: color }} />
                        );
                    },
                })}
                component={HomeStack}
            />
            <Tab.Screen
                name='Trợ giúp'
                options={({ route, navigation }) => ({
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Icon name='chatbubbles-sharp' type='Ionicons' style={{ fontSize: size, color: color }} />
                        );
                    },
                })}
                component={HomeStack}
            />
            <Tab.Screen
                name='Tài khoản'
                options={({ route, navigation }) => ({
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Icon name='user' type='FontAwesome' style={{ fontSize: size, color: color }} />
                        );
                    },
                })}
                component={HomeStack}
            />
        </Tab.Navigator>
    );
}

const ImageStyled = styled.Image``;
