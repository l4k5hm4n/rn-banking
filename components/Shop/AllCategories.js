import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Platform} from 'react-native';
import Colors from '../../constants/colors'
import { LinearGradient } from 'expo-linear-gradient';

import FoodIcon from '../../assets/svg/food_icon.js';
import GroceriesIcon from '../../assets/svg/groceries_icon.js';
import HealthIcon from '../../assets/svg/health_icon.js';
import BeveragesIcon from '../../assets/svg/beverages_icon.js';
import RetailIcon from '../../assets/svg/retail_icon.js';
import ShoppingIcon from '../../assets/svg/shopping_icon.js';
import TravelIcon from '../../assets/svg/travel_icon.js';

const AllCategories = props => {

    let billsData = [
        {
            "name" : "Food",
            "icon" : <FoodIcon />,
        },
        {
            "name" : "Groceries",
            "icon" : <GroceriesIcon />,
        },
        {
            "name" : "Health",
            "icon" : <HealthIcon />,
        },
        {
            "name" : "Beverages",
            "icon" : <BeveragesIcon />,
        },
        {
            "name" : "Retail",
            "icon" : <RetailIcon />,
        },
        {
            "name" : "Shopping",
            "icon" : <ShoppingIcon />,
        },
        {
            "name" : "Travel",
            "icon" : <TravelIcon />,
        },
        {
            "name" : "More",
            "icon" : <Text style={styles.MoreIcon}>+ 10</Text>,
        }
        
    ]

    return (
        <View style={styles.container}>  

        <View style={styles.ContainerHeading}>
            <Text style={styles.ContainerHeadingText}>Bills & recharges</Text>
        </View>

        <View style={styles.ContainerBody}>
        { billsData.map((bill, index) => {
            return (
                <TouchableOpacity key={index} style={styles.IconContainer} activeOpacity={0.8} >   
                    <View style={styles.BillImage} >
                        {bill.icon}
                    </View>
                    <Text style={styles.BillTitle}>{bill.name}</Text>
                </TouchableOpacity>
            )
        })}
        </View>
        
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        width: 'auto',
        height: 'auto',
        marginHorizontal: 24,
        marginBottom: 8,
        paddingVertical: 12,
        borderRadius: 20,
        justifyContent: 'space-around',
    },
    ContainerHeading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 24
    },
    ContainerHeadingText: {
        fontWeight: '700',
        fontSize: 16,
        color: 'white'
    },
    ContainerBody: {
        flexDirection: 'row',
        flexWrap:'wrap',
        marginHorizontal: -12,
        justifyContent: 'space-around',
    },
    IconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '25%',
        marginBottom: 12
    },
    BillImage : {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    BillTitle: {
        color: 'white',
        paddingTop: 8,
        fontSize: Colors.textPrimary
    },
    MoreIcon: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    }

})

export default AllCategories;

