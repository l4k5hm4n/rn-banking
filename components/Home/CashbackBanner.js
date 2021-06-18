import React, { Suspense } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Colors from '../../constants/colors'

const CashbackImage = React.lazy(() => import('../../assets/svg/cashback_coin.js'));
const RightArrow = React.lazy(() => import('../../assets/svg/right_arrow.js'));

const CashbackBanner = props => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
        <View style={styles.container}>  

                <View style={styles.CashbackImageContainer}>
                    <Image style={styles.CashbackImage} source={require('../../assets/home/cashback_coin.png')}></Image>
                </View>

                <View style={styles.TextContainer}>
                    <Text style={styles.TextTitle}>CASHBACK EARNED</Text>
                    <Text style={styles.TextCashback}>₹7000</Text>
                </View>

                <View style={styles.BtnContainer}>
                    <View style={styles.BtnBoundingBox} />
                    <Suspense fallback={<Text>...</Text>}>
                        <RightArrow style={styles.RightArrow} />    
                    </Suspense>  
                </View>
            
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 'auto',
        height: 'auto',
        flexDirection: 'row',
        marginHorizontal: 24,
        marginTop: 8,
        paddingTop: 12,
        paddingRight: 12,
        paddingBottom: 12,
        borderRadius: 20,
        backgroundColor: '#AA67F1',
        overflow: 'hidden',
    },
    CashbackImageContainer: {
        flex: 1,
        marginBottom: -12,
    },
    CashbackImage: {
        width: 74,
        height: 74,
        marginLeft: -2,
        marginBottom: -2
    },
    TextContainer: {
        maxWidth: 240,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: 60,
        color: 'white',
        flexGrow: 4,
    },
    TextTitle: {
        fontSize: Colors.textPrimary,
        marginTop: 2,
        color: 'white'
    },
    TextCashback: {
        fontSize: 24,
        marginTop: 2,
        fontWeight: '900',
        color: 'white'
    },
    BtnContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flexGrow: 1
    },
    BtnBoundingBox: {
        backgroundColor: 'white',
        opacity: 0.1,
        width: 32,
        height: 32,
        position: 'absolute',
        borderRadius: 10
    },
    RightArrow: {
        left: 8
    } 
})

export default CashbackBanner;

// https://transform.tools/svg-to-react-native
