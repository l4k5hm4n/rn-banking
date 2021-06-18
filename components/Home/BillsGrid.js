import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Colors from '../../constants/colors'
import { LinearGradient } from 'expo-linear-gradient';

import ElectricityIcon from '../../assets/svg/electricity_icon.js';
import PostpaidIcon from '../../assets/svg/postpaid_icon.js';
import PrepaidIcon from '../../assets/svg/prepaid_icon.js';
import HouserentIcon from '../../assets/svg/houserent_icon.js';
import DthIcon from '../../assets/svg/dth_icon.js';
import PipedgasIcon from '../../assets/svg/pipedgas_icon.js';
import FastagIcon from '../../assets/svg/fastag_icon.js';
import GascylinderIcon from '../../assets/svg/gascylinder_icon.js';

const SendAgain = props => {

    let billsData = [
        {
            "name" : "Electricity",
            "icon" : <ElectricityIcon />,
            "colors" : ['#AA67F1', '#5C61D8'],
            "locations" : [0,1],
            "start" : {x: 1, y: -0.4}
        },
        {
            "name" : "Postpaid",
            "icon" : <PostpaidIcon />,
            "colors" : ['#5C61D8', '#AA67F1'],
            "locations": [0,1],
            "start": {x: -0.6, y: -0.8}
        },
        {
            "name" : "Prepaid",
            "icon" : <PrepaidIcon />,
            "colors" : ['#5C61D8', '#AA67F1'],
            "locations": [0,1],
            "start": {x: -0.4, y: -0.8}
        },
        {
            "name" : "House rent",
            "icon" : <HouserentIcon />,
            "colors" : ['#AA67F1', '#5C61D8'],
            "locations" : [0.5,1],
            "start" : {x: -1, y: -1}
        },
        {
            "name" : "DTH",
            "icon" : <DthIcon />,
            "colors" : ['#5C61D8', '#AA67F1'],
            "locations" : [1,0],
            "start" : {x: 2, y: 0}
        },
        {
            "name" : "Piped gas",
            "icon" : <PipedgasIcon />,
            "colors" : ['#5C61D8', '#AA67F1'],
            "locations" : [1,0],
            "start" : {x: 0.8, y: -0.8}
        },
        {
            "name" : "FASTag",
            "icon" : <FastagIcon />,
            "colors" : ['#5C61D8', '#AA67F1'],
            "locations" : [1,0],
            "start" : {x: 0.8, y: -0.8}
        },
        {
            "name" : "Gas cylinder",
            "icon" : <GascylinderIcon />,
            "colors" : ['#5C61D8', '#AA67F1'],
            "locations" : [1,1],
            "start" : {x: 0.0, y: 0}
        },
        
    ]

    return (
        <View style={styles.container}>  

        <View style={styles.ContainerHeading}>
            <Text style={styles.ContainerHeadingText}>Bills & recharges</Text>
            <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
                <Text style={styles.HeadingButton}>View more</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.ContainerBody}>
        { billsData.map((bill) => {
            return (
                <TouchableOpacity style={styles.IconContainer} activeOpacity={0.8} onPress={props.onPress}>   
                    <LinearGradient style={styles.BillImage} 
                        colors={bill.colors}
                        locations= {bill.locations}
                        start={bill.start}
                        >
                        {bill.icon}
                    </LinearGradient>
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
        justifyContent: 'space-between',
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
        color: Colors.black
    },
    HeadingButton:{
        fontWeight: '500',
        color: Colors.primary,
    },
    ContainerBody: {
        flexDirection: 'row',
        flexWrap:'wrap',
        marginHorizontal: -12
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
        color: Colors.black_var1,
        paddingTop: 8,
        fontSize: Colors.textPrimary
    }

})

export default SendAgain;

