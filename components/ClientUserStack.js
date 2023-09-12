import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

// importing screens
import Home from "../screens/customer/Home";
import Profile from '../screens/customer/Profile';
import Settings from "../screens/customer/Settings";
import Services from "../screens/customer/Services";
import ServiceDetails from "../screens/customer/ServiceDetails";
import Bookings from "../screens/customer/Bookings";


const Stack = createStackNavigator();


function ClientUserStack() {
    return (
      <Stack.Navigator defaultScreenOptions={Home}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Services" component={Services} />
        <Stack.Screen name="ServiceDetails" component={ServiceDetails} />
        <Stack.Screen name="Bookings" component={Bookings} />
      </Stack.Navigator>
    )
}

export default ClientUserStack;
  