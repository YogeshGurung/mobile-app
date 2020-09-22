import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { Searchbar, Text, Colors } from 'react-native-paper';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as listingActions } from '../store/listings';
import { actions as viewActions } from '../store/view';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Listing from "../components/Listing";
import BottomTab from "../components/BottomTab";
import { Dimensions } from 'react-native';

dayjs.extend(relativeTime);

const ListingsScrollView = ({ listings }) => (<ScrollView style={{ marginBottom: 50 }}>
    {listings.map((item) => <Listing item={item} key={item.id} />)}
</ScrollView>);

const ListingsOrMessage = (props) => {

    const { listings, query } = props;

    if (!listings.length && !query.length) {
        return (
            <View style={{ display: "flex", flexDirection: "row", backgroundColor: Colors.blue200, paddingVertical: 12, justifyContent: "center", alignItems: "center" }} {...props} >
                <Text style={{ color: Colors.black, marginRight: 4 }}>No listings available.</Text>
            </View>
        );
    }

    if (query.length && !listings.length) {
        return (
            <View style={{ display: "flex", flexDirection: "row", backgroundColor: Colors.red200, paddingVertical: 12, justifyContent: "center", alignItems: "center" }}{...props}>
                <Text style={{ color: Colors.black, marginRight: 4 }}>No listings were found under the query</Text>
                <Text style={{ color: Colors.black, fontWeight: "bold" }}>{query}</Text>
            </View>
        );
    }

    return <ListingsScrollView {...props} />
}

const HomeScreen = (props) => {
    const { navigation, listings, setMeta } = props;

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setMeta({
                title: "Home"
            })
        });

        return unsubscribe;
    }, [navigation]);

    const [searchQuery, setSearchQuery] = React.useState('');
    const [filteredListings, setListings] = React.useState(listings);

    const onChangeSearch = query => setSearchQuery(query);

    React.useEffect(() => {
        setListings(listings.filter(({ owner, title, body }) =>
            [owner, title, body]
                .map(e => e.toLowerCase())
                .some(
                    e => e.includes(
                        searchQuery
                            .trim()
                            .toLowerCase()
                    )
                )
        ));
    }, [searchQuery]);

    const windowHeight = Dimensions.get('window').height;

    return (
        <View style={{ display: "flex", alignItems: "center", flex: 1 }} {...props}>
            <View style={{ paddingTop: 12, paddingHorizontal: 12, width: "100%" }}>
                <Searchbar
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    style={{ marginBottom: 12 }}
                />

                <Text style={{ fontWeight: "bold", color: "#999", textTransform: "uppercase", letterSpacing: 0.3, marginBottom: 0 }}>Listings</Text>
            </View>

            <View style={{ padding: 12, width: "100%", flex: 1, flexGrow: 1, alignSelf: "stretch", marginBottom: 0 }}>
                <ListingsOrMessage listings={filteredListings} query={searchQuery} />
            </View>

            <View style={{ width: "100%", marginTop: 6 }}>
                <BottomTab />
            </View>
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