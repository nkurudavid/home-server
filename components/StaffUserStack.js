import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

// importing screens
import Dashboard from "../screens/staff/Dashboard";
import Settings from "../screens/staff/Settings";
import Profile from '../screens/staff/Profile';
import Clients from "../screens/staff/Clients";
import ClientRequests from "../screens/staff/ClientRequests";
import RequestDetails from "../screens/staff/RequestDetails";
import Services from "../screens/staff/Services";
import ServiceDetails from "../screens/staff/ServiceDetails";


const Stack = createStackNavigator();


function StaffUserStack() {
    return (
      <Stack.Navigator defaultScreenOptions={Dashboard}>
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Clients" component={Clients} />
        <Stack.Screen name="ClientRequests" component={ClientRequests} />
        <Stack.Screen name="RequestDetails" component={RequestDetails} />
        <Stack.Screen name="Services" component={Services} />
        <Stack.Screen name="ServiceDetails" component={ServiceDetails} />
      </Stack.Navigator>
    );
}

export default StaffUserStack;