import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../constants/colors'

let data = [
    {
      id: 1,
      image: require('../assets/home/vodafone.png'),
      merchant: 'Vodafone',
      transactionId: '8296334099',
      billAmount: 1790
    },
    {
      id: 2,
      image: require('../assets/home/bharat_gas.jpeg'),
      merchant: 'Bharat Gas',
      transactionId: 'UXA 12872',
      billAmount: 8709
    },
    {
      id: 3,
      image: require('../assets/home/bsnl.jpeg'),
      merchant: 'BSNL',
      transactionId: '9876785676 - Postpaid',
      billAmount: 433
    }
  ]

const BillsList = () => {

    return (
      <View style={styles.BillItemsContainer}>
      { data.map((billItem, index) => {
          return(
              <View key={index} style={styles.BillItem}>

              <View style={styles.BillItemLeft}>
                  <Image style={styles.BillItemLogo} source={billItem.image}></Image>
                  <View style={styles.BillItemInfo}>
                      <Text style={styles.BillItemName}>{ billItem.merchant }</Text>
                      <Text style={styles.BillItemTransactionId}>{ billItem.transactionId }</Text>
                  </View>
              </View>

              <View style={styles.BillItemRight}>
                  <TouchableOpacity activeOpacity={0.8}>
                      <View style={styles.BillItemPaymentBtn}>
                          <Text style={styles.BillItemAmount}>Pay ₹{ billItem.billAmount }</Text>
                      </View>
                  </TouchableOpacity>
              </View>
              </View>
          )
      })}
    </View>
    )
}

const styles = StyleSheet.create({
  BillItemsContainer:{
      backgroundColor: 'white',
      padding: 16,
      borderColor: Colors.accent_var1,
      borderStyle: 'solid',
      borderWidth: 1,
      borderRadius: 20,
      paddingBottom: 0,
  },
  BillItem: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: 20,
  },
  BillItemLeft: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
  },
  BillItemInfo: {
      marginLeft: 8,
      marginTop: 4,
      justifyContent: 'flex-start',
  },
  BillItemName: {
      color: Colors.primary,
      fontWeight: '700',
  },
  BillItemTransactionId: {
      fontSize: 11,
      opacity: 0.6,
      marginTop: 3
  },
  BillItemLogo : {
      width: 40,
      height: 40,
      borderRadius: 40,
      backgroundColor: Colors.primary,
      justifyContent: 'center',
      alignItems: 'center'
  },
  BillItemRight: {
      flexDirection: 'row'
  },
  BillItemPaymentBtn: {
      backgroundColor: Colors.primary,
      borderRadius: 10,
      paddingVertical: 11,
      width: 90,
      alignItems: 'center'
  },
  BillItemAmount: {
      color: 'white',
      fontWeight: '700',
      fontSize: 12,
      paddingHorizontal: 4

  }

})

export default BillsList;

