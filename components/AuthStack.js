import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

// importing screens
import AccountMenu from '../screens/auth/AccountMenu';
import CustomLogin from '../screens/auth/CustomLogin';
import CustomSignup from '../screens/auth/CustomSignup';
import StaffLogin from '../screens/auth/StaffLogin';


const Stack = createStackNavigator();


function AuthStack() {
  return (
    <Stack.Navigator defaultScreenOptions={AccountMenu} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AccountMenu" component={AccountMenu} />
      <Stack.Screen name="CustomLogin" component={CustomLogin} />
      <Stack.Screen name="CustomSignup" component={CustomSignup} />
      <Stack.Screen name="StaffLogin" component={StaffLogin} />
    </Stack.Navigator>
  );
}
export default AuthStack;