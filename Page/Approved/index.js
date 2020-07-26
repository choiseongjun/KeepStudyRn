import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import GroupScreen from './GroupScreen';
import TimeLineDetail from '../Approved/TimeLine/TimeLineDetail';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function Home() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Feed" component={HomeScreen} />
        <Tab.Screen name="Group" component={GroupScreen} />
      </Tab.Navigator>
    );
  }
export const Approved = ({}) => {
    return(
        <>
            <NavigationContainer>
            <Stack.Navigator> 
                <Stack.Screen name="Feed" component={Home} />
                <Stack.Screen name="TimeLineDetail" component={TimeLineDetail} />
                <Stack.Screen name="Group" component={GroupScreen} />
            </Stack.Navigator>
            </NavigationContainer>
        </>
    );

}