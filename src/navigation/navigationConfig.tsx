import { HeaderStyleInterpolators } from "@react-navigation/stack"
import React, { Component } from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Layout from "components/Layout";
import { Icon } from "native-base";
export const OPTS_COMMON = {
    headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
    headerBackTitleVisible: false,
    headerStyle: {
        backgroundColor: '#0028a8',
    },
    headerTintColor: 'white',
    headerBackImage: () => (
        <Layout paddingLeft={10} paddingRight={5} paddingVertical={5} >
            <Layout
                style={{ borderRadius: 30 }}
                centered
                middle
                height={33}
                width={33}
                color={'#0028a8'} >
                <Icon name='arrow-back' style={{ color: 'white' }} />
            </Layout>
        </Layout>
    ),
};