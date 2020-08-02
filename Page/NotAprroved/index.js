import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginPage from './LoginPage';
import HomeScreen from '../Approved/HomeScreen';
import RegisterScreen from './RegisterScreen';
const Stack = createStackNavigator();

export const NotApproved = ({}) => {
    return(
        <>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginPage} />
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Register" component={RegisterScreen}/>
            </Stack.Navigator>
        </NavigationContainer>

        </>
    );
 
}