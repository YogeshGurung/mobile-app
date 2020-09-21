import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as viewActions } from '../store/view';

class CreateListingScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            setMeta: props.setMeta
        }
    }

    componentDidMount(props) {
        this.state.setMeta({
            title: "Bed & Bread",
            subtitle: "Create Listing"
        })
    }

    render() {
        return (
            <View>
                <Text>Create an Ad</Text>
                <Button
                    title="Home"
                />
            </View>
        );
    }
}

const actionsMapper = dispatch => (
    bindActionCreators({
        ...viewActions
    }, dispatch)
);

export default connect((state) => state, actionsMapper)(CreateListingScreen);