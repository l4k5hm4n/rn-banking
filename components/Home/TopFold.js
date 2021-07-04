import React, {Suspense} from 'react';
import { StyleSheet, Text} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import LottieView from 'lottie-react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, runOnJS } from 'react-native-reanimated'

const PullDownSvg = React.lazy(() => import('../../assets/svg/pull_down.js'));

const TopFold = (props) => {

    const scale = useSharedValue(240);

    let scaleNew = props.scale

    scale.value = scaleNew

    let scaleStyles = useAnimatedStyle(() => {
            return {
                maxHeight: scale.value/240 <= 1 ? 64 : (scale.value/100)*64
            }
        }
      );

    return (
        <LinearGradient  
            colors={['#C788FB', '#9269EB', '#435ECF']}
            locations= {[0,0.4,1]}
            start={{x: 0.5, y: 0}}
            end={{x: 0.5, y: 1}}
            style={styles.bgHeader}
        >   
        <Animated.View style={{maxHeight: 64}, scaleStyles}>
            <LottieView
                style={[styles.LottieView]}
                source={require('../../assets/wink_lottie.json')}
                autoPlay   
                loop={false}      
                speed={1.2}          
            /></Animated.View>
            <Text style={styles.scanText}>Pull down to scan and pay</Text>
            <Suspense fallback={<Text>...</Text>}>
                <PullDownSvg/>
            </Suspense>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    bgHeader: {
        width: '100%',
        height: 320,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center'
    },
    LottieView: {
        width: '100%',
        height: 200, 
    },
    scanText: {
        fontSize: 14,
        color: 'white',
        paddingVertical: 12,
        textAlign: 'center'
    }
})

export default TopFold;