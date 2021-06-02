import Label from 'components/Label';
import Layout from 'components/Layout';
import { Icon } from 'native-base';
import React, { useState, useEffect } from 'react';
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Image, View, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { ApplicationState } from 'store/configureAction';
import styled from 'styled-components/native';
import dateClient from 'utils/dateClient';

interface State {
}
type UIProps = State;

const ContentOrder = (props: UIProps) => {

    return (
        <Layout>
        </Layout>
    )


};
const mapStateToProps = (state: ApplicationState) => ({
});
const mapDispatchToProps = {
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(ContentOrder as any);