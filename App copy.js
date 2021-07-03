import { PanGestureHandler } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Animated, { useSharedValue, useAnimatedGestureHandler } from 'react-native-reanimated'
// import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator();

// components
import Home from './components/Home'
import Shop from './components/Shop'
import Header from './components/Header'

export default function App() {

  let [ activePage, setActivePage ] = useState('Home') 

  let PayToggleHandler = () => {
      setActivePage('Home')
  }

  let StoreToggleHandler = () => {
     setActivePage('Shop')
  }

  // Set default state as Home on unmount
  useEffect(() => {
    return () => {
      setActivePage('Home'); 
    };
  }, []);

  let ref = React.createRef();

  const startingPosition = 100;
  const y = useSharedValue(startingPosition);

  let _onScrollDown = useAnimatedGestureHandler({

    onStart: (event, ctx) => {
      
    },
    onActive: (event,ctx) => {
      y.value = startingPosition + event.translationY
    },
    onEnd: (event, ctx) => {
      y.value = startingPosition
    },  

  })

  // let _onScrollDown = (event) => {

  //   // console.log('down')
  //   // const {translationY} = event.nativeEvent;
  //   // // handle PanGesture event here
  // };
  

  let scrollTest = () =>{
    console.log('d')
  }

  

  return (
    <View style={styles.MainContainer}>
    <ScrollView contentContainerStyle={styles.Container}
            onscroll={scrollTest}
            onScrollBeginDrag={console.log('t')}
            >
        <View>
        <StatusBar style="auto" />
          <Header 
            activePage={activePage}
            PayToggleHandler={PayToggleHandler}
            StoreToggleHandler={StoreToggleHandler}
          />
          { activePage == 'Home' ? <Home /> : <Shop />}
          </View>
      </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: '#fff',
    marginTop: 36,
  },
  Container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
});


// https://formidable.com/blog/2021/reanimated-two/
// https://www.reactnativeschool.com/how-to-use-reanimated-2-a-beginners-guide
// https://thewidlarzgroup.com/reanimated2-slider/#animate-slider2-with-useslider-hook