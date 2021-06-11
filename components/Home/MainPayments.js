import React, { Suspense } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../../constants/colors'

const SendMoney = React.lazy(() => import('../../assets/svg/send_money.js'));
const PayBills = React.lazy(() => import('../../assets/svg/pay_bills.js'));
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
                <View style={styles.Icon}>
                    <Suspense fallback={<Text>...</Text>}>
                        <PayBills style={styles.FetchImage} />    
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
        justifyContent: 'space-between',
    },
    IconContainer: {
        marginRight: '6%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Icon : {
        padding: 12,
        borderRadius: 40,
        backgroundColor: Colors.primary,
    },
    Text: {
        color: Colors.black_var1,
        paddingTop: 8
    }

})

export default MainPayments;

// https://transform.tools/svg-to-react-native
