import { PanGestureHandler, NativeViewGestureHandler } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useDerivedValue, useAnimatedStyle, useAnimatedGestureHandler, withSpring, runOnJS, interpolate, Extrapolate } from 'react-native-reanimated'
import React, {Suspense} from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import LottieView from 'lottie-react-native';
import { Animated as anim, StyleSheet, View, Text, useWindowDimensions, Vibration } from 'react-native';

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

const PullDownSvg = React.lazy(() => import('../../assets/svg/pull_down.js'));

const Home = (props) => {

  let nativeRef = React.createRef();
  let scrollRef = React.createRef();

  const SPRING_CONFIG = {
    damping: 80,
    overshootClamping: true,
    // restDisplacementThreshold: 0.001,
    // restSpeedThreshold: 0.001,
    stiffness: 500,
  }

  let pullVibration = () => {
    Vibration.vibrate(10)
  }

  const dimensions = useWindowDimensions();
  const startingPosition = 240;
  const top = useSharedValue(startingPosition);

  let _onScrollDown = useAnimatedGestureHandler({

  onStart: (event, ctx) => {
    ctx.startTop = Math.min(top.value, startingPosition);
  },
  onActive: (event, ctx) => {
      if(event.translationY >= 0 ) {
        top.value = withSpring(Math.min(ctx.startTop +event.translationY, startingPosition + 56), SPRING_CONFIG)
        // console.log(top.value, 1)
      }
      else {
        top.value = withSpring(20, SPRING_CONFIG);
        // console.log(top.value, 2)
      }
    },
  onEnd: (event,ctx) => {
    // when the user scrolls up, 36 is the arbitary number for the top active responder
    if(top.value > 60 && event.translationY <= 0) {
      top.value = 16
      // console.warn(1)
    } 
    // create a stop when user tries to scroll down the modal
    else if(top.value < startingPosition - 160 && top.value > 60){
      top.value = 16
      // console.warn(2)
    }
    else if(top.value > 36 ){ 
      top.value >= startingPosition + 50 ? runOnJS(pullVibration)([]) : null
      top.value = startingPosition
      // console.warn(3)
    }
  }

  })

  let headerToggle = useAnimatedStyle(() => {
    return {
        zIndex: interpolate(top.value,
          [0,160,300],
          [2,0,0],
          Extrapolate.clamp
      )
    }
}
);

  let panStyles = useAnimatedStyle(() => {
    return {
      marginTop: withSpring(top.value, SPRING_CONFIG)
    };
  });

  let scaleStyles = useAnimatedStyle(() => {
          return {
            maxHeight: interpolate(top.value,
                [240,300],
                [64,100],
                Extrapolate.clamp,
            ),
            marginTop: withSpring(interpolate(top.value,
              [240,300],
              [0,54],
              Extrapolate.clamp
            ), SPRING_CONFIG)
          }
      }
  );

  let scaleTextStyles = useAnimatedStyle(() => {
          return {
              paddingVertical: withSpring(interpolate(top.value,
                [240,300],
                [0,10],
                Extrapolate.clamp,SPRING_CONFIG)
            )
          }
      }
  );

  return (
    <Animated.View style={[styles.MainContainer, headerToggle]}>
        <LinearGradient  
            colors={['#C788FB', '#9269EB', '#435ECF']}
            locations= {[0,0.4,1]}
            start={{x: 0.5, y: 0}}
            end={{x: 0.5, y: 1}}
            style={styles.bgHeader}
        >   
            <Animated.View style={{maxHeight: 64, maxWidth: 64}, scaleStyles}>
              <LottieView
                  style={[styles.LottieView]}
                  source={require('../../assets/wink_lottie.json')}
                  autoPlay   
                  loop={false}      
                  speed={1.2}          
            />
            </Animated.View>

            <Animated.View style={[scaleTextStyles]}>
            <Text style={styles.scanText}>Pull down to scan and pay</Text>
            </Animated.View>

            <Suspense fallback={<Text>...</Text>}>
                <PullDownSvg/>
            </Suspense>
            
        </LinearGradient>
      
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
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    marginTop: -84,
  },
  scrollView: {
    height: 700,
    width: 400,
    backgroundColor: 'red',
    flex: 1,
  },
  bgHeader: {
    width: '100%',
    height: 320,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBarHeader: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  LottieView: {
      width: '100%',
      height: '100%', 
  },
  scanText: {
      fontSize: 14,
      color: 'white',
      paddingVertical: 12,
      textAlign: 'center'
  }
});

export default Home; 