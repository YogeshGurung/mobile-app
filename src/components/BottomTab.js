import { Col } from 'native-base';
import * as React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import { IconButton, Colors } from 'react-native-paper';

import Tabs from 'react-native-tabs';

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        height: 20
    },
});

export default () => {
    const [tabName, setTabName] = React.useState("Home");

    return (
        <Tabs selected={tabName}
            style={{ backgroundColor: Colors.white, height: 64 }}
            selectedStyle={{ color: 'red' }}
            onSelect={({ props: { name } }) => setTabName(name)}>

            <View name="Home">
                <IconButton icon="home" color={tabName == "Home" ? Colors.green500 : Colors.grey500} size={38} />
            </View>
            <View name="Dash">
                <IconButton icon="apps-box" color={tabName == "Dash" ? Colors.green500 : Colors.grey500} size={38} />
            </View>
            <View name="Add">
                <IconButton icon="plus-circle" color={tabName == "Add" ? Colors.green500 : Colors.grey500} size={38} />
            </View>
        </Tabs>
    );
}

