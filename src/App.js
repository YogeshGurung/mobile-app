import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppHeader from "./components/AppHeader";
import HomeScreen from "./pages/HomeScreen";
import CreateListingScreen from "./pages/CreateListingScreen";

const Drawer = createDrawerNavigator();

export default () => {
    const navigationRef = React.createRef();

    return (
        <>
            <AppHeader navigation={navigationRef} />
            <NavigationContainer ref={navigationRef} >
                <Drawer.Navigator initialRouteName="Home">
                    <Drawer.Screen name="Home" component={HomeScreen} />
                    <Drawer.Screen name="Create Listing" component={CreateListingScreen} />
                </Drawer.Navigator>
            </NavigationContainer>
        </>
    );
}