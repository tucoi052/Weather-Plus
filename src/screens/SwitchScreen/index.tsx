import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { ApplicationState } from 'store/configureAction';
import { AuthStack } from 'navigation/stackAuthNavigation';
import { TabContainer } from 'navigation/tabNavigation';

interface State {

}
type UIProps = State;
const SwitchScreen = (props: UIProps) => {
    const ScreenRender = () => {

        if (true) {
            return <TabContainer />;
        }
    };
    return (
        <>
            <StatusBar backgroundColor={'#0028a8'} barStyle={'dark-content'} />
            <SafeAreaView style={{ flex: 1, }}>
                <View style={{ flex: 1 }}>
                    {ScreenRender()}
                </View>
            </SafeAreaView>
        </>
    );
};
const mapStateToProps = (state: ApplicationState) => ({
});
const mapDispatchToProps = {
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(SwitchScreen as any);
