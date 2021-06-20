import React, { Suspense } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../../constants/colors'

const FetchBillerSvg = React.lazy(() => import('../../assets/svg/fetch_billers_icon.js'));
const ArrowSvg = React.lazy(() => import('../../assets/svg/arrow.js'));

const FetchBillersBanner = props => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
        <View style={styles.container}>  

                <Suspense fallback={<Text>...</Text>}>
                    <FetchBillerSvg style={styles.FetchImage} />    
                </Suspense>  

                <View style={styles.TextContainer}>
                    <Text style={styles.TextContent}>Fetch all your utility billers linked to your mobile number</Text>
                    <View style={styles.BtnContainer}>
                        <Text style={styles.TextButton}>Fetch Billers</Text>
                        <Suspense fallback={<Text>...</Text>}>
                            <ArrowSvg style={styles.ArrowImage} />    
                        </Suspense>  
                    </View>
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
        marginTop: 6,
        padding: 12,
        borderRadius: 20,
        backgroundColor: '#EFF1FB',
    },
    FetchImage: {
        marginTop: 4
    },
    TextContainer: {
        maxWidth: 240,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginLeft: 12,
    },
    TextContent: {
        fontSize: Colors.textPrimary,
        marginTop: 2,
    },
    BtnContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    TextButton: {
        fontWeight: '500',
        color: Colors.primary,
        marginTop: 6,
        fontSize: Colors.textPrimary
    },
    ArrowImage: {
        marginTop: 7.2
    }
})

export default FetchBillersBanner;

// https://transform.tools/svg-to-react-native
