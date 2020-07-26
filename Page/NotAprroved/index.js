import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginPage from './LoginPage';
import HomeScreen from '../Approved/HomeScreen';
const Stack = createStackNavigator();

export const NotApproved = ({}) => {
    return(
        <>
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginPage} />
            <Stack.Screen name="Home" component={HomeScreen}/>
        </Stack.Navigator>
        </>
    );
 
}