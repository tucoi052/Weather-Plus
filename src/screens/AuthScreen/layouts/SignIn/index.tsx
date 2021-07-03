import { TextInputUI } from 'components';
import ButtonUI from 'components/ButtonUI';
import Label from 'components/Label';
import Layout from 'components/Layout';
import React, { useState, useEffect } from 'react';
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Image, View, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { ApplicationState } from 'store/configureAction';
import styled from 'styled-components/native';

interface State {
}
type UIProps = State;

const SignInScreen = (props: UIProps) => {
    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
            }}
            accessible={false}>
            <Layout flex>
                <Layout flex color={'#efefef'}>
                    <KeyboardAvoidingView behavior="position">
                        <Layout middle centered marginTop={Dimensions.get('window').height * 0.09}>
                            <ImageStyled
                                resizeMode='cover'
                                source={require('assets/images/logo_bigfast.png')}
                            />
                        </Layout>
                        <Layout color={'white'} paddingHorizontal={20} paddingVertical={20} marginHorizontal={20} borderRadius={10}>
                            <Label marginVertical={10}>Tài khoản<Label color='red'>*</Label></Label>
                            <TextInputUI
                                placeholder={'Nhập số điện thoại/email'}
                                contentstyle={{ paddingLeft: 10,  }}
                            // uistyle={{ marginHorizontal: 30 }}
                            //   errorMessage={errorMessage(c.fieldName)}
                            //   textValue={formik.values[c.fieldName]}
                            //   onChangeText={(text: string) => {
                            //     formik.setFieldValue(c.fieldName, text);
                            //   }}
                            />
                            <Label marginVertical={10} >Mật khẩu<Label color='red'>*</Label></Label>
                            <TextInputUI
                                placeholder={'Nhập mật khẩu'}
                                contentstyle={{ paddingLeft: 10 }}
                                // uistyle={{ marginHorizontal: 30 }}
                                type={'password'}
                            //   errorMessage={errorMessage(c.fieldName)}
                            //   textValue={formik.values[c.fieldName]}
                            //   onChangeText={(text: string) => {
                            //     formik.setFieldValue(c.fieldName, text);
                            //   }}
                            />
                            <Layout middle>
                                <ButtonUI style={{  }}>
                                    <Label marginVertical={20} >Chưa có tài khoản <Label color='blue'>Đăng ký ngay</Label></Label>
                                </ButtonUI>
                            </Layout>
                            <Layout middle>
                            <ButtonUI style={{ }}>
                                <Label color='red'>Quên mật khẩu</Label>
                            </ButtonUI>
                            </Layout>

                            <Layout middle marginTop={15}>
                                <ButtonUI color='blue' borderRadius={10} padding={10}>
                                    <Label size={18} paddingHorizontal={10} color='white' bold>Đăng nhập</Label>
                                </ButtonUI>
                            </ Layout>
                        </Layout>
                    </KeyboardAvoidingView>
                </Layout>
            </Layout>
        </TouchableWithoutFeedback>
    )

};
const mapStateToProps = (state: ApplicationState) => ({
});
const mapDispatchToProps = {
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(SignInScreen as any);

const ImageStyled = styled.Image`
    width: ${Dimensions.get('window').width * 0.65};
    height: ${Dimensions.get('window').height * 0.2};
`