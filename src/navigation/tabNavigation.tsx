import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import React, { Component } from 'react';
import { Dimensions, Platform, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import store from 'store/configureStore';
import { Icon, Label } from 'native-base';
import { HomeStack } from './homeStackNavigation';
import { OrderStack } from './orderStackNavigation';
import { TabBarAdvancedButton } from './button';


const Tab = createBottomTabNavigator();
type Props = {};

export const TabContainer = (props: Props) => {
    return (
        <Tab.Navigator
            tabBar={(props) => (
                    <View style={{
                        position: 'absolute',
                        bottom:  5,
                        left: 0,
                        right: 0,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        borderRadius: 30,
                        marginHorizontal: 10,
                        // backgroundColor:'#F6F7EB',
                        shadowOpacity: 0.22,
                        shadowRadius: 2.22,
                    }}>
                        <BottomTabBar
                            {...props}
                        />
                        {/* <View style={[{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 34
                    }, {
                        backgroundColor: '#F6F7EB'
                    }]} /> */}
                    </View >
            )}
            tabBarOptions={{
                activeTintColor: 'red',
                inactiveTintColor: 'black',
                showLabel: true,
                style: {
                    backgroundColor: 'transparent',
                    elevation: 10,
                    borderRadius: 100,
                    borderTopWidth: 0
                },
                tabStyle: {
                    backgroundColor: '#F6F7EB',
                }
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
                // options={({ route, navigation }) => ({
                //     tabBarIcon: ({ color, size }) => {
                //         return (
                //             <Icon name='ticket' type='FontAwesome' style={{ fontSize: size, color: color }} />
                //         );
                //     },
                // })}
                options={{
                    tabBarButton: (props) => (
                        <TabBarAdvancedButton
                            bgColor={'#F6F7EB'}
                            {...props}
                        />
                    )
                }}
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
        </Tab.Navigator >
    );
}

const ImageStyled = styled.Image``;
