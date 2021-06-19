import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// components
import Home from './components/Home'
import Shop from './components/Shop'

export default function App() {

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator 
        screenOptions={{headerShown: false}}
        initialRouteName="Home"
      >
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen name="Shop" component={Shop} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    marginTop: 36,
  },
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
});


// https://formidable.com/blog/2021/reanimated-two/
// https://www.reactnativeschool.com/how-to-use-reanimated-2-a-beginners-guide
// https://thewidlarzgroup.com/reanimated2-slider/#animate-slider2-with-useslider-hook