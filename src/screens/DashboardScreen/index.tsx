import Label from 'components/Label';
import Layout from 'components/Layout';
import { Icon } from 'native-base';
import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Keyboard, KeyboardAvoidingView, Image, View, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { ApplicationState } from 'store/configureAction';
import styled from 'styled-components/native';
import dateClient from 'utils/dateClient';

interface State {
    navigation: any
}
type UIProps = State;

const HomeLayout = (props: UIProps) => {


    const ItemOrder = (title: string, values: number, index?: number) => (
        <Layout key={index?.toString()} middle horizontal style={{ borderColor: 'grey', borderTopWidth: index == 0 ? 1 : 0, borderBottomWidth: 1, paddingVertical: 10 }}>
            <Label style={{ flex: 5 }}>{title}</Label>
            <Label style={{ flex: 2 }}>{values}</Label>
            <TouchableOpacity onPress={()=>{
                props.navigation.navigate('Đơn hàng', { screen: 'ORDER', initial: false, params: { tabOrder: title } });

            }}>
                <Layout style={{ borderBottomColor: 'red', borderBottomWidth: 1 }}>
                    <Label style={{ color: 'red' }}>Chi tiết</Label>
                </Layout>

            </TouchableOpacity>
        </Layout>
    )

    return (
        <Layout flex marginHorizontal={15} paddingVertical={10}>
            <Label>Báo cáo vận đơn ngày {dateClient.getDateString(new Date().getTime())}</Label>
            <Layout horizontal middle marginTop={5}>
                <Icon name='dot-circle-o' type='FontAwesome' style={{ fontSize: 18, marginRight: 5 }} />
                <Label>Live cập nhật lúc {dateClient.getTimeString(new Date().getTime())}</Label>
            </Layout>
            <Layout horizontal style={{ justifyContent: 'space-around', marginTop: 10 }}>
                <Layout middle borderRadius={10} color={'#00B4FF'} paddingVertical={20} style={{ width: Dimensions.get('window').width * 0.4 }}>
                    <Label bold color='white'>Giao hàng thành công</Label>
                    <Label h2 bold color='white' style={{ marginTop: 10 }}>100</Label>
                </Layout>
                <Layout middle borderRadius={10} color={'#00B4FF'} paddingVertical={20} style={{ width: Dimensions.get('window').width * 0.4 }}>
                    <Label bold color='white'>Chờ giao</Label>
                    <Label h2 bold color='white' style={{ marginTop: 10 }}>100</Label>
                </Layout>
            </Layout>
            <Layout marginVertical={20}>
                {
                    [1].map((e, index) => (
                        <Layout key={index.toString() + 'key'}>
                            {ItemOrder('Đơn nháp', 100, index)}
                            {ItemOrder('Chờ bàn giao', 100)}
                            {ItemOrder('Giao hàng', 100)}
                        </Layout>
                    ))
                }
            </Layout>
        </Layout>
    )

};
const mapStateToProps = (state: ApplicationState) => ({
});
const mapDispatchToProps = {
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(HomeLayout as any);