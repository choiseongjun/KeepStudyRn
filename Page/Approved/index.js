import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import GroupScreen from './GroupScreen';
import OptionScreen from './OptionScreen';
import CreatePostScreen from './CreatePostScreen';
import CreateFabs from '../Script/CreateFabs';
import GroupDetailScreen from './GroupDetailScreen';
import TimeLineDetail from '../Approved/TimeLine/TimeLineDetail';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function Home() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Feed" component={HomeScreen} />
        <Tab.Screen name="Group" component={GroupScreen} />
        <Stack.Screen name="Option" component={OptionScreen} />
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
                <Stack.Screen name="GroupDetail" component={GroupDetailScreen} />
                <Stack.Screen name="CreatePostScreen" component={CreatePostScreen} />
                <Stack.Screen name="CreateFabs" component={CreateFabs} />
            </Stack.Navigator>
            </NavigationContainer>
        </>
    );

}