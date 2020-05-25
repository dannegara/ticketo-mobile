import React from 'react';
import EventsList from '../components/events-list';
import DetailScreen from '../components/detail-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import Login from '../components/login';
import Register from '../components/register';

const Stack = createSharedElementStackNavigator();

export default () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="List">
                <Stack.Screen name="List" component={EventsList} options={{headerShown: false}} />
                <Stack.Screen
                    name="Detail"
                    component={DetailScreen}
                    sharedElementsConfig={(route, otherRoute, showing) => {
                        const { item } = route.params;
                        return [`item.${item.id}.photo`, `item.${item.id}.title`];
                    }}
                    options={{headerShown: false}}
                />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}