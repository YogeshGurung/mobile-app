import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppHeader from "./components/AppHeader";
import HomeScreen from "./pages/HomeScreen";
import DemoScreen from "./pages/DemoScreen";
import MyAdsScreen from "./pages/MyAdsScreen";
import BookmarkScreen from "./pages/BookmarkScreen";

const Drawer = createDrawerNavigator();



export default () => {
    const navigationRef = React.createRef();

    return (
        <>
            <AppHeader navigation={navigationRef} />
            <NavigationContainer ref={navigationRef} >
                <Drawer.Navigator initialRouteName="Home">
                    <Drawer.Screen name="Home" component={HomeScreen} />
                    <Drawer.Screen name="My Ads" component={MyAdsScreen} />
                    <Drawer.Screen name="Favorite Ads" component={BookmarkScreen} />
                    <Drawer.Screen name="Advanced Job Search" component={DemoScreen} />
                    <Drawer.Screen name="Settings" component={DemoScreen} />
                    <Drawer.Screen name="Terms &amp; Conditions" component={DemoScreen} />
                    <Drawer.Screen name="Privacy Policy" component={DemoScreen} />
                    <Drawer.Screen name="Logout" component={DemoScreen} />
                </Drawer.Navigator>
            </NavigationContainer>
        </>
    );
}