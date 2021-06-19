import React, {Suspense} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Svg, { Path } from "react-native-svg"
import Colors from '../constants/colors'

const RightArrow = React.lazy(() => import('../assets/svg/right_arrow.js'));

let data = [
    {
        id: 1,
        image: require('../assets/store/amazon.png'),
        merchant: 'Amazon',
        rating: '4.0',
        cashback: 5,
        rewardsRatio: 10,
        btnTitle: 'Shop now',
        route: ''
    },
    {
        id: 2,
        image: require('../assets/store/flipkart.png'),
        merchant: 'Flipkart',
        rating: '3.8',
        cashback: 1,
        rewardsRatio: 3,
        btnTitle: 'Shop now',
        route: ''
    },
    {
        id: 3,
        image: require('../assets/store/redbus.png'),
        merchant: 'Redbus',
        rating: '3.9',
        cashback: 5,
        rewardsRatio: 10,
        btnTitle: 'Book now',
        route: ''
    }
  ]

const OffersList = () => {

    return (
      <View style={styles.OfferItemsContainer}>
      { data.map((OfferItem, index) => {
          return(
              <View key={index} style={index == data.length-1 ? {...styles.OfferItem, borderBottomWidth: 0} : styles.OfferItem}>

              <View style={styles.OfferItemLeft}>
                  <Image style={styles.OfferItemLogo} source={OfferItem.image}></Image>
                  <View style={styles.OfferItemInfo}>
                      <Text style={styles.OfferItemName}>{ OfferItem.merchant }</Text>

                      <View style={styles.OfferItemSubText}>
                            <Svg width={12} height={12} viewBox="0 0 10 10" fill="none" >
                                <Path
                                    d="M5 0l1.123 3.455h3.632L6.816 5.59 7.94 9.045 5 6.91 2.061 9.045 3.184 5.59.244 3.455h3.633L5 0z"
                                    fill="#FFB904"
                                />
                            </Svg>
                            <Text style={styles.OfferItemRating}>{ OfferItem.rating }</Text>
                            <View style={styles.Divider}></View>
                            <Text style={styles.OfferItemCashback}>{ OfferItem.cashback }% cashback</Text>
                     </View>

                      <View style={styles.OfferItemRewards} >
                        <Svg width={12} height={12} viewBox="0 0 12 12" fill="none" >
                        <Path
                            d="M10.482 4.148c.007.117.018.232.018.35a6.006 6.006 0 01-6 6c-.118 0-.233-.01-.35-.018a4.486 4.486 0 106.332-6.332z"
                            fill="#3BC191"
                        />
                        <Path d="M4.5 9a4.5 4.5 0 100-9 4.5 4.5 0 000 9z" fill="#3BC191" />
                    </Svg>
                        <Text style={styles.OfferItemRewardsText}>{ OfferItem.rewardsRatio }X Reward Points</Text>
                      </View>

                  </View>
              </View>

              <View style={styles.OfferItemRight}>
                  <TouchableOpacity activeOpacity={0.8}>
                      <View style={styles.OfferItemBtn}>
                          <Text style={styles.OfferItemBtnText}>{OfferItem.btnTitle}</Text>
                          <Suspense fallback={<Text>...</Text>}>
                            <RightArrow />
                        </Suspense>
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
  OfferItemsContainer:{
      borderStyle: 'solid',
      marginBottom: -20
  },
  OfferItem: {
      alignItems: 'flex-start',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 18,
      borderBottomColor: "#2D3672",
      borderBottomWidth: 1
  },
  OfferItemLeft: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
  },
  OfferItemInfo: {
      marginLeft: 16,
      justifyContent: 'flex-start',
  },
  OfferItemName: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16
  },
  OfferItemSubText: {
    flexDirection: 'row',
    marginTop: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  OfferItemRating: {
    fontSize: 12,
    opacity: 0.6,
    marginLeft: 4,
    color: 'white'
  },
  OfferItemCashback: {
    fontSize: 12,
    opacity: 0.6,
    color: 'white'
  },
  Divider: {
    width: 6,
    height: 6,
    borderRadius: 10,
    marginHorizontal: 6,
    backgroundColor: 'white',
    opacity: 0.8
  },
  OfferItemRewards: {
    flexDirection: 'row',
    marginTop: 4,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  OfferItemRewardsText: {
      color: '#3BC191',
      fontSize: 12,
      marginLeft: 4,
  },
  OfferItemLogo : {
      width: 40,
      height: 40,
      borderRadius: 8,
      backgroundColor: Colors.primary,
      justifyContent: 'center',
      alignItems: 'center'
  },
  OfferItemRight: {
      flexDirection: 'row',
  },
  OfferItemBtn: {
      backgroundColor: '#3A4692',
      borderRadius: 10,
      padding: 10,
      alignItems: 'center',
      flexDirection: 'row',
  },
  OfferItemBtnText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 12,
      paddingHorizontal: 4
  }

})

export default OffersList;

