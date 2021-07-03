import React, {Suspense} from 'react';
import { StyleSheet, Text} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import LottieView from 'lottie-react-native';

const PullDownSvg = React.lazy(() => import('../../assets/svg/pull_down.js'));

const TopFold = () => {
    return (
        <LinearGradient  
            colors={['#C788FB', '#9269EB', '#435ECF']}
            locations= {[0,0.4,1]}
            start={{x: 0.5, y: 0}}
            end={{x: 0.5, y: 1}}
            style={styles.bgHeader}
        >
            <LottieView
                style={styles.LottieView}
                source={require('../../assets/wink_lottie.json')}
                autoPlay   
                loop={false}      
                speed={1.2}          
            />
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
        width: 64,
        height: 64, 
    },
    scanText: {
        fontSize: 14,
        color: 'white',
        paddingVertical: 12,
        textAlign: 'center'
    }
})

export default TopFold;