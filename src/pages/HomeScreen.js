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
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setMeta({
                title: "Bed & Bread",
                subtitle: "Home"
            })
        });

        return unsubscribe;
    }, [navigation]);

    const [searchQuery, setSearchQuery] = React.useState('');
    const [currentListings, setListings] = React.useState(listings);

    const onChangeSearch = query => setSearchQuery(query);

    React.useEffect(() => {
        console.log(searchQuery);

        setListings(listings.filter(({owner, title, body}) => 
            [owner, title, body].map(e => e.toLowerCase()).some(e => e.includes(searchQuery.trim().toLowerCase()))
        ));
    }, [searchQuery]);

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
                {currentListings.map((item) => <Listing item={item} key={item.id} />)}
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