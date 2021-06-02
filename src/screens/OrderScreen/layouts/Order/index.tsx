import Label from 'components/Label';
import Layout from 'components/Layout';
import { Icon } from 'native-base';
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Image, View, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { ApplicationState } from 'store/configureAction';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import styled from 'styled-components/native';
import dateClient from 'utils/dateClient';
import ContentOrder from './shared/ContentOrder';
import { useIsFocused, useRoute } from '@react-navigation/native';
import { TextInputUI } from 'components';

interface State {
    route: any,
    navigation: any
}
type UIProps = State;

const OrderLayout = (props: UIProps) => {
    const Tab = createMaterialTopTabNavigator();
    const tabOrder = useRef<string>('');
    tabOrder.current = props.route?.params?.tabOrder ?? ''

    useEffect(() => {
        if (tabOrder.current !== '') {
            props.navigation.navigate(tabOrder.current);
        }
    }, [tabOrder.current])

    return (
        <Layout flex>
            <TextInputUI
                uistyle={{ marginHorizontal: 10, marginVertical: 10 }}
                contentStyle={{ height: 40 }}
                placeholder='Tìm kiếm'
                icon={<Icon name='search' type='Feather' style={{color: 'grey', fontSize: 19}} />}
            />
            <Tab.Navigator
                tabBarOptions={{
                    scrollEnabled: true,
                    labelStyle: { fontSize: 14, textTransform: 'none', lineHeight: 20 },
                    tabStyle: { paddingHorizontal: 0 }
                }}
                initialRouteName={props.route?.params?.tabOrder ?? 'Đơn nháp'}
            >
                <Tab.Screen name={`Đơn nháp`} component={ContentOrder} initialParams={{ statusNumber: 1, refund: false }} />
                <Tab.Screen name={`Chờ bàn giao`} component={ContentOrder} initialParams={{ statusNumber: 1, refund: false }} />
                <Tab.Screen name={`Giao hàng`} component={ContentOrder} initialParams={{ statusNumber: 1, refund: false }} />
            </Tab.Navigator>
        </Layout>
    )


};
const mapStateToProps = (state: ApplicationState) => ({
});
const mapDispatchToProps = {
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(OrderLayout as any);