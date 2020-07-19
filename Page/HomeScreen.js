import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {DetailsScreen} from './DetailsScreen.js'

  
function HomeScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
            <Button
            title="Go to Detail"
            onPress={() => navigation.navigate('Detail')}
            />
      </View>   
    );
  }
export default HomeScreen;