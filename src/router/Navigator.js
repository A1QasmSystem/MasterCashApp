import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// SCREENS
import Splash from '../components/Splash';
import Login from '../auth/Login';
import Register from '../auth/Register';
import Recovery from '../auth/Recovery';
import MemberDash from '../MemberDash';
import CashierDash from '../Cashier/CashierDash';
import Profile from '../User/Profile';
import ListMember from '../Member/ListMember';
import AddMember from '../Member/AddMember';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={false}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Recovery" component={Recovery} />
        <Stack.Screen name="MemberDash" component={MemberDash} />
        <Stack.Screen name="CashierDash" component={CashierDash} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ListMember" component={ListMember} />
        <Stack.Screen name="AddMember" component={AddMember} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
