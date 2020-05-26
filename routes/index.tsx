import React from 'react';
import EventsList from '../components/events-list';
import DetailScreen from '../components/detail-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import Login from '../components/login';
import Register from '../components/register';
import Scanner from '../components/scanner';

const Stack = createStackNavigator();

export default () => {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="Login"
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Scanner" component={Scanner} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}