import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../components/login';
import Register from '../components/register';
import Scanner from '../components/scanner';

const Stack = createStackNavigator();

interface Props {
    initialRoute?: string
}

export default (props: Props) => {
    const { initialRoute = 'Login' } = props;
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName={initialRoute}
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