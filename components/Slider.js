import React, { useState, useRef, useEffect, useCallback } from 'react';
import {Animated, View, Text, Image, StyleSheet, TouchableOpacity, FlatList, Dimensions} from 'react-native';

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

let data = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
      title: 'Flat ₹30 cashback',
      subtitle: 'on your first recharge',
      backgroundColor: '#CA476A'
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
        title: 'Flat ₹100 cashback',
        subtitle: 'on your first bill payment',
        backgroundColor: '#586AD5'
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        title: 'Flat ₹50 cashback',
        subtitle: 'on your first wifi bill payment',
        backgroundColor: '#AA67F1'
    },
    {
      id: 4,
      image:
        'https://images.unsplash.com/photo-1568700942090-19dc36fab0c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        title: 'Flat ₹30 cashback',
        subtitle: 'on your first wallet transfer',
        backgroundColor: 'purple'
    }
  ]

  function Slide({ data }) {
    return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={{...styles.SlideContainer, backgroundColor: data.backgroundColor}}>
        <View style={styles.SlideText}>
            <Text style={styles.SlideTextTitle}>{data.title}</Text>
            <Text style={styles.SlideTextSubTitle}>{data.subtitle}</Text>
        </View>
        <Image style={styles.SlideImage}
          source={require('../assets/home/recharge_banner.png')}
        ></Image>
      </View>
      </TouchableOpacity>
    );
  }

const Slider = props => {

const navBtnAnim = useRef(new Animated.Value(0)).current;

const [index, setIndex] = useState(0);
const indexRef = useRef(index);
indexRef.current = index;

let prevIndex = 0
const onScroll = useCallback((event) => {
  const slideSize = event.nativeEvent.layoutMeasurement.width;
  const currentIndex = event.nativeEvent.contentOffset.x / slideSize;
  const roundIndex = Math.round(currentIndex);
  const distance = Math.abs(roundIndex - currentIndex);
  const scrollResistance = 0.4 < distance;

  let direction = (currentIndex > prevIndex) ? true : false;
  if(direction){
    Animated.timing(navBtnAnim, {
      toValue: (distance)*16,
      duration: 20,
      useNativeDriver: false
    }).start();
  }
  else {
    Animated.timing(navBtnAnim, {
      toValue: -(distance)*16,
      duration: 20,
      useNativeDriver: false
    }).start();
  }

  prevIndex = currentIndex

  if (roundIndex !== indexRef.current && !scrollResistance) {
    setIndex(roundIndex);
  }

}, []);


let SlideNavigation = (props) => {
  let nav = []
  for( let i=0; i<props.slideCount; i++){
    nav = [...nav, 
    <Animated.View key={i}
    style={ i == index ? {...styles.NavDot2, transform: [{ translateX: navBtnAnim } ]} : {...styles.NavDot}}>
    </Animated.View>]
}

  return(
      <View style={styles.NavContainer}>
        {nav}
      </View> 
  )
  
}

    return (
      <View>
            <FlatList
                data={data}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => {
                    return <Slide data={item} />
                }}
                pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
                onScroll={onScroll}
                style={styles.bannerContainer}
            >    
             </FlatList>
             <SlideNavigation slideCount={data.length} index={index}/>
      </View>
    )
}

const styles = StyleSheet.create({
    SlideContainer: {
        flexDirection: 'row',
        height:120,
        width: windowWidth-48,
        marginHorizontal: 24,
        marginVertical: 20,
        borderRadius: 20,
        backgroundColor: '#FF4373',
        overflow: 'hidden',
    },
    SlideText: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
        paddingVertical: 16,
        width: 100,
        height: 92
    },
    SlideTextTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    SlideTextSubTitle: {
        color: 'white',
        opacity: 0.8
    },
    SlideImage: { 
        flex: 1,
        width: '100%',
        height: '100%' 
    },
    NavContainer: {
      flexDirection: 'row',
      position: 'absolute',
      marginHorizontal: 24,
      bottom: 36,
      left: 20
    },
    NavDot: {
      height: 8,
      width: 8,
      borderRadius: 20,
      backgroundColor:'white',
      marginRight: 6,
    },
    NavDot2: {
      height: 8,
      width: 24,
      borderRadius: 20,
      backgroundColor:'white',
      marginRight: 6
    }
})

export default Slider;