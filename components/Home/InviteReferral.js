import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Colors from '../../constants/colors'

// const RightArrow = import('../../assets/svg/right_arrow.js');

const InviteReferral = props => {
    return (
        <LinearGradient 
        colors={['white', '#E6EAFF']}
        locations= {[0, 1]}
        start={{x: 0, y: 0}}
        >   
        <View style={styles.Container}>
                <View style={styles.TextContainer}>
                    <Text style={styles.TextTitle}>Invite your friends to PayZapp</Text>
                    <Text style={styles.TextSecondary}>Earn ₹150 cashback when they make their first payment</Text>
                    <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}> 
                        <View style={styles.BtnContainer}>
                        <Text style={styles.BtnText}>Invite & Earn</Text>   
                        </View>  
                    </TouchableOpacity>
                </View>

                <View style={styles.ImageContainer}>
                    <Image style={styles.Image} source={require('../../assets/home/invite_image.png')}></Image>
                </View>
        </View>          
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        marginLeft: 24,
        marginTop: 8,
        justifyContent: 'space-around'
    },
    TextContainer: {
        alignItems: 'flex-start',
        width: "60%",
    },
    TextTitle: {
        fontSize: 24,     
        fontWeight: '700',
        color: 'black'
    },
    TextSecondary: {
        fontSize: Colors.textPrimary,
        marginTop: 12,
        lineHeight: 18,
        color: "#666666"
    },
    BtnContainer: {
        backgroundColor: "#5C61D8",
        borderRadius: 10,
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginVertical: 16
    },
    BtnText: {
        color: 'white'
    },
    ImageContainer: {
        width: '40%',
        maxWidth: 200,
        maxHeight: 200,
    },
    Image: {
        width: "100%",
        height: "100%",
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default InviteReferral;

