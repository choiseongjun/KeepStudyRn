import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Page/HomeScreen';
import DetailsScreen from './Page/DetailsScreen';
import GroupScreen from './Page/GroupScreen'
 
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Group" component={GroupScreen} />
    </Tab.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator> 
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={DetailsScreen} />
        <Stack.Screen name="Group" component={GroupScreen} />
      </Stack.Navigator>
  </NavigationContainer>
  
  );
};


export default App;
