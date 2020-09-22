import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as viewActions } from '../store/view';

const CreateListingScreen = ({ navigation, setMeta }) => {

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setMeta({
                title: "Create Listing"
            })
        });

        return unsubscribe;
    }, [navigation]);

    return (
        <View>
            <Text>Create an Ad</Text>
            <Button
                title="Home"
            />
        </View>
    );
}

const actionsMapper = dispatch => (
    bindActionCreators({
        ...viewActions
    }, dispatch)
);

export default connect((state) => state, actionsMapper)(CreateListingScreen);