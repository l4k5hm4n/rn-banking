import React, { Suspense } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../../constants/colors'
import LottieView from 'lottie-react-native';

const SendMoney = React.lazy(() => import('../../assets/svg/send_money.js'));
// const PayBills = React.lazy(() => import('../../assets/svg/pay_bills.js'));
const Wallet = React.lazy(() => import('../../assets/svg/wallet.js'));
const Transactions = React.lazy(() => import('../../assets/svg/transactions.js'));

const MainPayments = props => {
    return (
        <View style={styles.container}>  

            <TouchableOpacity style={styles.IconContainer} activeOpacity={0.8} onPress={props.onPress}>
                <View style={styles.Icon}>
                    <Suspense fallback={<Text>...</Text>}>
                        <SendMoney style={styles.FetchImage} />    
                    </Suspense>  
                </View>
                <Text style={styles.Text}>Send Money</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.IconContainer} activeOpacity={0.8} onPress={props.onPress}>
                <View style={styles.IconLottie}>
                    <Suspense fallback={<Text>...</Text>}>
                    <LottieView
                        style={styles.LottieView}
                        source={require('../../assets/billers_lottie.json')}
                        autoPlay
                        speed={1.4}   
                    />
                        {/* <PayBills style={styles.FetchImage} />     */}
                    </Suspense>  
                </View>
                <Text style={styles.Text}>Pay Bills</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.IconContainer} activeOpacity={0.8} onPress={props.onPress}>
                <View style={styles.Icon}>
                    <Suspense fallback={<Text>...</Text>}>
                        <Transactions style={styles.FetchImage} />    
                    </Suspense>  
                </View>
                <Text style={styles.Text}>Transactions</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{...styles.IconContainer, marginRight: 0}} activeOpacity={0.8} onPress={props.onPress}>
                <View style={styles.Icon}>
                    <Suspense fallback={<Text>...</Text>}>
                        <Wallet style={styles.FetchImage} />    
                    </Suspense>  
                </View>
                <Text style={styles.Text}>Accounts</Text>
            </TouchableOpacity>

        </View>    )
}

const styles = StyleSheet.create({
    container: {
        width: 'auto',
        height: 'auto',
        flexDirection: 'row',
        marginHorizontal: 24,
        marginTop: 20,
        paddingVertical: 12,
        borderRadius: 20,
        justifyContent: 'space-around'
    },
    IconContainer: {
        marginRight: '6%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Icon : {
        padding: 12,
        borderRadius: 40,
        backgroundColor: Colors.primary,
    },
    IconLottie: {
        borderRadius: 40,
        backgroundColor: Colors.primary,
        maxWidth: 56,
        maxHeight: 56, 
    },
    LottieView: {
        width: 57,
        height: 57, 
        marginHorizontal: -7,
        paddingLeft: 7
    },
    Text: {
        color: Colors.black_var1,
        paddingTop: 8,
        fontSize: Colors.textPrimary
    }

})

export default MainPayments;

// https://transform.tools/svg-to-react-native
