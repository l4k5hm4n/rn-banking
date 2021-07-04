import React, { Suspense, useEffect } from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity, Button} from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withSequence,
    Easing,
  } from 'react-native-reanimated';

const NotificationIcon = React.lazy(() => import('../assets/svg/notification_icon.js'));

const ToggleButton = (props) => {

    const offset = useSharedValue(0);

    const toggleEffect = useAnimatedStyle(() => {
      return {
        transform: [
            {
                translateX: withSequence( withTiming(
                    props.activePage == "Home" ? 80 : -8,
                    {
                        duration: 100,
                        easing: Easing.linear
                    }
                ), withTiming(
                    offset.value,
                    {
                        duration: 100,
                        easing: Easing.linear
                    }
                ))
            },
        ]
      };
    });

    useEffect( () => { 
        if(props.activePage == "Home") {
            offset.value = 0;
        }

        else {
            offset.value = 74;
        }
     })
  
    return ( 
        <View style={styles.ToggleContainer} >
            <Animated.View style={[styles.ToogleMoving, toggleEffect]} />
            <TouchableOpacity style={ props.activePage == "Home" ? {...styles.ToogleItemContainerActive, marginLeft: -74 }: {...styles.ToogleItemContainer, marginLeft: -74} } activeOpacity={0.8} onPress={ () => { props.PayToggleHandler(); }}>
                <Animated.Text style={ props.activePage == "Home" ? {...styles.ToogleItemTextActive, color:"#A46FF1"} : {...styles.ToogleItemText, } }>Pay</Animated.Text>
            </TouchableOpacity>
            <TouchableOpacity style={ props.activePage == "Shop" ? {...styles.ToogleItemContainerActive} : {...styles.ToogleItemContainer, } } activeOpacity={0.8} onPress={ () => { props.StoreToggleHandler()}}>
                <Animated.Text style={ props.activePage == "Shop" ? [styles.ToogleItemTextActive, { color: "#4F2883"}] : {...styles.ToogleItemText} }>Shop</Animated.Text>
            </TouchableOpacity>
        </View>
    )

}
const Header = (props) => {

    let {style} = props

    return (
        <View style={{...styles.container, ...style}}>  

        <TouchableOpacity style={styles.IconContainer} activeOpacity={0.8} >
            <Image style={styles.UserProfileImage} source={require('../assets/home/profile_image.png')}></Image>
        </TouchableOpacity>

        <ToggleButton 
        activePage={props.activePage}
        PayToggleHandler={props.PayToggleHandler}
        StoreToggleHandler={props.StoreToggleHandler}
        />

        <TouchableOpacity style={styles.NotificationsIcon} activeOpacity={0.8} >
            <Suspense fallback={<Text>...</Text>}>
                <NotificationIcon />
            </Suspense> 
        </TouchableOpacity>
    
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 24,
        paddingVertical: 24,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 1
    },
    IconContainer: {
        justifyContent: 'flex-start'
    },
    UserProfileImage : {
        width: 36,
        height: 36,
        borderRadius: 24,
    },
    ToggleContainer: {
        flexDirection: 'row',
        borderRadius: 20,
        borderWidth: 1, 
        borderColor: 'rgba(255, 255, 255, 0.5)',
        alignItems: 'center',
        paddingVertical: 4,
        paddingHorizontal: 6,
        justifyContent: 'space-between',
        width: 160
    },
    ToogleMoving: {
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 20,
        width: 74, 
        height: 30,
        backgroundColor: 'white',
        left: 0
    },
    ToogleItemContainer: {
        paddingVertical: 6,
        width: 74, 
        maxWidth: 74,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'blue'
    },
    ToogleItemContainerActive: {
        paddingVertical: 6,
        width: 74, 
        maxWidth: 74,
        borderRadius: 20,
        marginLeft: 2,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'green'
    },
    ToogleItemText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 13,
        textAlign: 'center'
    },
    ToogleItemTextActive: {
        fontWeight: 'bold',
        fontSize: 13,
    },
    NotificationsIcon: {
        alignItems: 'flex-end',
        justifyContent: 'center'
    }

})

export default Header;

