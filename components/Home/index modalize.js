import { PanGestureHandler, NativeViewGestureHandler, State } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, useAnimatedGestureHandler, withSpring, runOnJS } from 'react-native-reanimated'
import React, { useState, useEffect }  from 'react';
import { StyleSheet, View, ScrollView, useWindowDimensions, TouchableOpacity, Text } from 'react-native';
import { Modalize } from 'react-native-modalize';

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

  const modalizeRef =  React.createRef();

  const onOpen = () => {
    modalizeRef.current?.open();
  };


  let ref = React.createRef();
  let scrollRef = React.createRef();
  let scrollContentRef = React.createRef();

  let [test, setContext] = React.useState(true);
  let [scrolled, setScrolled] = React.useState(false);

  
  let disableView = ( ) => {
    setContext(false)
  }

  let enableView = () => {
    console.log('fgdg')
    setContext(true)
  }

  let setscrollHandler = () => {
      setScrolled(true)
  }

  let setNegscrollHandler = () => {
    setScrolled(false)
}

  const dimensions = useWindowDimensions();
  const startingPosition = 240;
  const y = useSharedValue(startingPosition);
  const top = useSharedValue(startingPosition);

  let _onScrollDown = useAnimatedGestureHandler({

    onStart: (event, ctx) => {
      // console.log(ctx.startY)
      ctx.startY = startingPosition;
      ctx.startTop = top.value;
      // console.log(startingPosition, event.translationY)
      // if(top.value < 1) {
      //   runOnJS(disableView)([])
      // }
      console.log(top.value, 'top')
    },
    // onActive: (event,ctx) => {

    //   // if( startingPosition< y.value +  event.translationY) { 
    //   //   y.value = Math.min(startingPosition + event.translationY, startingPosition + 80)
    //   //   ctx.startY = startingPosition + event.translationY
    //   // }
    //   ctx.startY = startingPosition + event.translationY
    //   if( (startingPosition <= ctx.startY) && !scrolled) {
    //     console.log(1)
    //     y.value = Math.min(startingPosition + event.translationY, startingPosition + 80)
    //   }
    //   else if((startingPosition <= ctx.startY) && scrolled) {
    //     console.log(1.1)
    //     y.value = Math.min(startingPosition + event.translationY, startingPosition + 80)
    //     runOnJS(setNegscrollHandler)([])
    //   }
    //   else {
    //     runOnJS(disableView)([])
    //   }
    //   console.log(startingPosition, ctx.startY,' fg')
    //   // else {
    //   //   runOnJS(disableView)([])
    //   // }
    //   // if( event.translationY>4 && (ctx.startY < ctx.startY + event.translationY)) { 
    //   //   y.value = Math.min(ctx.startY + event.translationY, ctx.startY + 80)
    //   //   // console.log(y.value)
    //   // }
    //   // else if( ctx.startY > ctx.startY + event.translationY) {
    //   //   y.value = ctx.startY + event.translationY;
    //   //   // console.log('fd')
    //   // }
    // },
    onActive: (event, ctx) => {
      if(event.translationY >= 0) {
        top.value = Math.min(ctx.startTop +event.translationY, startingPosition + 80) 
        console.log(top.value, 1)
      }
      else {
        top.value = 20;
        runOnJS(disableView)([])
        console.log(top.value, 2, test)
      }
      
    },
    onEnd: () => {
      if(top.value > 0 && top.value > startingPosition - 20) {
        top.value = startingPosition
        console.warn(1)
      } else if(top.value < startingPosition - 20){
        top.value = 20
        console.warn(2)
      }
    },
    // onEnd: (event, ctx) => {
    //   // setContext(false);
    //   // console.log(ctx.startY, startingPosition)
    //   if(!scrolled) {
    //     console.log(11)
    //     y.value = startingPosition
    //   }
     
    //   else {


    //   }
    //   console.log('?')
    //   // else if( ctx.startY > ctx.startY + event.translationY) {
    //   //   y.value = y.value
    //   // }
    // },  
    // onCancel: (event, ctx) => {
    //   runOnJS(enableView)([])
    // }

  })

  let _stateChange = (event, ctx) => {
      console.log('event')
  }

  // let panStyles = useAnimatedStyle(() => {
  //   return {
  //     marginTop: y.value,
  //   };
  // });

  let panStyles = useAnimatedStyle(() => {
    return {
      marginTop: top.value,
    };
  });

  const handlerRef = React.useRef()

  function scrollView (event) {
    console.log('event')
  }

  return (
    <View style={[styles.MainContainer]}>
      {/* <TopFold navigation={navigation}/> */}

      <TouchableOpacity style={test} onPress={onOpen}>
        <Text style={{color: 'black'}}>Open the modal</Text>
      </TouchableOpacity>
      <Modalize ref={modalizeRef}>
      <Animated.ScrollView 
        onscroll={() => scrollView()}
        ref={scrollContentRef}
        onScrollBeginDrag={(()=> {console.log('df')})}
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
      </Modalize>
    </View>
  );
}


//   return (
//     <Animated.View style={[styles.MainContainer]}>
//       <PanGestureHandler 
        
//                 ref={ref}
//                 onGestureEvent={_onScrollDown}
//                 simultaneousHandlers={handlerRef}
//       >
//       <Animated.View>
//     <NativeViewGestureHandler ref={handlerRef}>
//     <Animated.ScrollView 
//     contentContainerStyle={styles.container}    
//       // onScroll={(event) => {console.log(event.nativeEvent)}}
//     >
//       <TopFold navigation={navigation}/>
//       <MainContainer style={panStyles}>
//         <FetchBillersBanner />
//         <MainPayments />
//         <Slider />
//         <SendAgain />
//         <MyBills />
//         <CashbackBanner />
//         <BillsGrid />
//         <InviteReferral />
//       </MainContainer>
//       </Animated.ScrollView>
//       </NativeViewGestureHandler>
//       </Animated.View>
//       </PanGestureHandler>
//     </Animated.View>
//   );
// }

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    minHeight: 1000
  },
  test: {
    backgroundColor: 'red',
  },
  scrollView: {
    height: 700,
    width: 400,
    backgroundColor: 'red',
    flex: 1,
  },
  // container: {
  //   position: 'absolute',
  //   backgroundColor: '#fff',
  // },
});

export default Home; 