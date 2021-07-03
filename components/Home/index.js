import { PanGestureHandler, NativeViewGestureHandler } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, useAnimatedGestureHandler, withSpring, runOnJS } from 'react-native-reanimated'
import React from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';

// Components
import TopFold from './TopFold'
import MainContainer from './MainContainer'
import FetchBillersBanner from './FetchBillersBanner'
import MainPayments from './MainPayments'
import SendAgain from './SendAgain'
import MyBills from './MyBills'
import CashbackBanner from './CashbackBanner'
import BillsGrid from './BillsGrid'
import InviteReferral from './InviteReferral'
import Slider from '../Slider'

const Home = ({navigation}) => {

  let nativeRef = React.createRef();
  let scrollRef = React.createRef();

  const SPRING_CONFIG = {
    damping: 80,
    overshootClamping: true,
    // restDisplacementThreshold: 0.001,
    // restSpeedThreshold: 0.001,
    stiffness: 500,
  }

  const dimensions = useWindowDimensions();
  const startingPosition = 240;
  const y = useSharedValue(startingPosition);
  const top = useSharedValue(startingPosition);

  let _onScrollDown = useAnimatedGestureHandler({

    onStart: (event, ctx) => {
      ctx.startTop = Math.min(top.value, startingPosition);
      // console.log(top.value, 'top')
    },
    
  onActive: (event, ctx) => {
      if(event.translationY >= 0) {
        top.value = withSpring(Math.min(ctx.startTop +event.translationY, startingPosition + 56), SPRING_CONFIG)
        // console.log(top.value, 1)
      }
      else {
        top.value = withSpring(20, SPRING_CONFIG);
        // console.log(top.value, 2)
      }

      // runOnJS(disableView)([])
      
    },
    onEnd: () => {
      if(top.value > 36 && top.value < startingPosition - 160) {
        top.value = 36
        // console.warn(1)
      } 
      // else if(top.value < startingPosition - 160 && top.value > 36){
      //   top.value = 36
      //   console.warn(2)
      // }
      // else if(top.value > startingPosition - 160 && top.value < startingPosition ) {
      //   top.value = startingPosition
      // }
      else if(top.value > 36){ 
        top.value = startingPosition
        // console.warn(3)
      }
    }

  })

  let panStyles = useAnimatedStyle(() => {
    return {
      marginTop: withSpring(top.value, SPRING_CONFIG)
    };
  });

  return (
    <View style={[styles.MainContainer]}>
      <TopFold navigation={navigation}/>
      <PanGestureHandler  
        ref={nativeRef}
        onGestureEvent={_onScrollDown}
        simultaneousHandlers={scrollRef}
        minDist={22}
      > 
      <Animated.View >
      
      <NativeViewGestureHandler 
        ref={scrollRef}
        simultaneousHandlers={nativeRef}
      > 
        <Animated.ScrollView 
          style={{flex: 1, height: dimensions.height, zIndex: 999}}
        >
            <MainContainer style={{...panStyles}}>
                <FetchBillersBanner />
                <MainPayments />
                <Slider />
                <SendAgain />
                <MyBills />
                <CashbackBanner />
                <BillsGrid />
                <InviteReferral />
            </MainContainer>

        </Animated.ScrollView>
      </NativeViewGestureHandler>
      </Animated.View>
      </PanGestureHandler>
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    marginTop: -100,
  },
  scrollView: {
    height: 700,
    width: 400,
    backgroundColor: 'red',
    flex: 1,
  },
});

export default Home; 