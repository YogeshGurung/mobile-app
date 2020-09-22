import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { Platform } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { connect } from 'react-redux';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const MenuDrawer = ({ navigation, view }) => {
    React.useEffect(() => {
        const unsubscribe = navigation.current.addListener('focus', (state) => {
            console.log(state);
        });

        return unsubscribe;
    }, [navigation]);

    const toggleDrawer = () => navigation?.current?.dispatch(DrawerActions.toggleDrawer());

    return (<Appbar.Header>
        <Appbar.Action icon="menu" onPress={toggleDrawer} />
        <Appbar.Content title={view.title} subtitle={view.subtitle} />
        <Appbar.Action icon="magnify" onPress={() => { }} />
        <Appbar.Action icon={MORE_ICON} onPress={() => { }} />
    </Appbar.Header>);
};


const stateMapper = (state) => {
    const { view } = state
    return { view }
};

export default connect(stateMapper)(MenuDrawer);