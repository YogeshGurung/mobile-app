import * as React from 'react';
import { View } from 'react-native';
import {
    Card,
    Title,
    Paragraph,
    Text,
    IconButton,
    Colors,
    Chip,
} from 'react-native-paper';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const Listing = ({ item }) => {

    const { title, body, owner, date, type } = item;

    return (
        <Card style={{ marginBottom: 8 }}>
            <Card.Content>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <View>
                        <Title style={{ textTransform: "capitalize", fontSize: 16, fontWeight: "bold", letterSpacing: 0.3 }}>{title}</Title>
                        <Text style={{ color: Colors.grey700 }}>{owner}</Text>
                        <Text style={{ color: Colors.grey500 }}>{dayjs(date).from()}</Text>
                    </View>
                    <View>
                        <Chip textStyle={{ textTransform: "uppercase", fontSize: 12, color: Colors.white }} mode="flat" style={{ backgroundColor: Colors.blueA400 }}>{type}</Chip>
                    </View>
                </View>

                <Paragraph style={{ marginTop: 12 }}>{body}</Paragraph>
            </Card.Content>
            <Card.Actions>
                <IconButton icon="square-edit-outline" color={Colors.red500} size={20} animated={true} onPress={() => console.log('Pressed')} />
                <IconButton icon="trash-can-outline" color={Colors.red500} size={20} animated={true} onPress={() => console.log('Pressed')} />
                <IconButton icon="share-variant" color={Colors.red500} size={20} animated={true} onPress={() => console.log('Pressed')} />
            </Card.Actions>
        </Card>
    )
}

export default Listing;