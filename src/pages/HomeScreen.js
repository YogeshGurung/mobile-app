import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { Searchbar, Text } from 'react-native-paper';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as listingActions } from '../store/listings';
import { actions as viewActions } from '../store/view';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Listing from "../components/Listing"

dayjs.extend(relativeTime);

const HomeScreen = ({ navigation, route: { params }, listings, setMeta }) => {
    const { title, content } = params || {};

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    setMeta({
        title: "Bed & Bread",
        subtitle: "Home"
    })

    return (
        <View style={{ padding: 12 }}>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
                style={{ marginBottom: 12 }}
            />

            <Text style={{ fontWeight: "bold", color: "#999", textTransform: "uppercase", letterSpacing: 0.3, marginBottom: 12 }}>Listings</Text>

            <ScrollView style={{ marginBottom: 100 }}>
                {listings.map((item) => <Listing item={item} key={item.id} />)}
            </ScrollView>
        </View>
    )
};

const stateMapper = (state) => {
    const { listings } = state
    return { listings }
};

const actionsMapper = dispatch => (
    bindActionCreators({
        ...listingActions,
        ...viewActions
    }, dispatch)
);

export default connect(stateMapper, actionsMapper)(HomeScreen);