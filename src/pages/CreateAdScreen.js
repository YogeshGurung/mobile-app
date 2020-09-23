import * as React from 'react';
import { View } from 'react-native';
import { TextInput, Switch, Text, Button } from 'react-native-paper';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as listingActions } from '../store/listings';
import { actions as viewActions } from '../store/view';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import DropDown from 'react-native-paper-dropdown';

dayjs.extend(relativeTime);

const CreateAdScreen = (props) => {
    const { navigation, setMeta, addListing } = props;
    const [title, setTitle] = React.useState('');
    const [body, setBody] = React.useState('');
    const [state, setState] = React.useState('NSW');
    const [category, setCategory] = React.useState('Room');
    const [receiveCalls, setReceiveCalls] = React.useState(true);
    const [isWanted, setIsWanted] = React.useState(false);
    const [showDropDown, setShowDropDown] = React.useState(false);
    const [showDropDownCategory, setShowDropDownCategory] = React.useState(false);

    const stateList = [
        { label: 'NSW', value: 'NSW' },
        { label: 'VIC', value: 'VIC' },
        { label: 'QLD', value: 'QLD' },
        { label: 'SA', value: 'SA' },
        { label: 'WA', value: 'WA' },
        { label: 'TAS', value: 'TAS' },
    ];

    const categoryList = [
        { label: 'Room', value: 'Room' },
        { label: 'Job', value: 'Job' },
    ];

    const onToggleSwitch = () => setReceiveCalls(!receiveCalls);
    const onIsWantedSwitch = () => setIsWanted(!isWanted);

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setMeta({
                title: "Create an Ad"
            });
        });

        return unsubscribe;
    }, [navigation]);

    const reset = () => {
        setTitle("");
        setBody("");
        setState("NSW");
        setCategory("Room");
        setReceiveCalls(true);
        setIsWanted(false);
    }

    const onSave = () => {
        const post = {
            title,
            body,
            state,
            type: category,
            receiveCalls,
            isWanted,
            owner: "Yogesh Gurung",
            date: new Date(),
            isFav: false,
        }

        if(!title.trim().length || !body.trim().length) return;

        addListing(post);

        reset();
    }


    return (
        <View style={{ padding: 12 }} {...props}>
            <View style={{ marginBottom: 8 }}>
                <DropDown
                    label="Select State"
                    mode={'outlined'}
                    value={state}
                    setValue={setState}
                    list={stateList}
                    visible={showDropDown}
                    showDropDown={() => setShowDropDown(true)}
                    onDismiss={() => setShowDropDown(false)}
                    inputProps={{
                        right: <TextInput.Icon name={'menu-down'} />,
                    }}
                />
            </View>

            <View>
                <DropDown
                    label="Select Category"
                    mode={'outlined'}
                    value={category}
                    setValue={setCategory}
                    list={categoryList}
                    visible={showDropDownCategory}
                    showDropDown={() => setShowDropDownCategory(true)}
                    onDismiss={() => setShowDropDownCategory(false)}
                    inputProps={{
                        right: <TextInput.Icon name={'menu-down'} />,
                    }}
                />
            </View>

            <View style={{ marginTop: 8, marginBottom: 4, display: "flex", flexDirection: "row", alignItems: "center" }}>
                <Text style={{ marginRight: 8 }}>Offer</Text>
                <Switch value={isWanted} onValueChange={onIsWantedSwitch} />
                <Text style={{ marginLeft: 8 }}>Wanted</Text>
            </View>

            <TextInput label="Title" value={title} onChangeText={text => setTitle(text)} mode="outlined" />

            <View>
                <TextInput label="Body" value={body} onChangeText={text => setBody(text)} mode="outlined" multiline={true} />
                <Text style={{ padding: 4, color: "#999" }}>150 words left.</Text>
            </View>

            <View style={{ marginVertical: 12, display: "flex", flexDirection: "row", alignItems: "center" }}>
                <Switch value={receiveCalls} onValueChange={onToggleSwitch} />
                <Text style={{ marginLeft: 8 }}>I want to receive phone calls.</Text>
            </View>

            <Button mode="contained" onPress={onSave}>
                Post
            </Button>

        </View>
    )
};

const actionsMapper = dispatch => (
    bindActionCreators({
        ...listingActions,
        ...viewActions
    }, dispatch)
);

export default connect(null, actionsMapper)(CreateAdScreen);