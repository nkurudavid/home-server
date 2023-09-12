import React from 'react';

import AuthStack from './AuthStack';
import ClientUserStack from './ClientUserStack';
import StaffUserStack from './StaffUserStack';


function RootNavigator() {
  return (
    <NavigationContainer>
      {/* {user ? <ChatStack /> : <AuthStack />} */}
      <AuthStack />
      <ClientUserStack />
      <StaffUserStack />
    </NavigationContainer>
  );
}
  
export default RootNavigator;