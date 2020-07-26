import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Page/HomeScreen';
import TimeLineDetail from './Page/TimeLine/TimeLineDetail';
import GroupScreen from './Page/GroupScreen';
import LoginPage from './Page/LoginPage';

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
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator> 
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Feed" component={Home} />
        <Stack.Screen name="TimeLineDetail" component={TimeLineDetail} />
        <Stack.Screen name="Group" component={GroupScreen} />
      </Stack.Navigator>
  </NavigationContainer>
  
  );
};


export default App;
