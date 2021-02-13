import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// SCREENS
import Splash from '../components/Splash';
import Login from '../auth/Login';
import Dashboard from '../Dashboard';
import Register from '../auth/Register';
import Recovery from '../auth/Recovery';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={false}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Recovery" component={Recovery} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
