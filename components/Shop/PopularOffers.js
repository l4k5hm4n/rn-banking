import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import OffersList from '../OffersList'

const PopularOffers = props => {

    return (
        <View style={styles.Container}>  

            <View style={styles.ContainerHeading}>
                <Text style={styles.ContainerHeadingText}>Popular Offers</Text>
            </View>

            <View style={styles.ContainerBody}>
                <OffersList />
            </View>
        
        </View>
    )

}

const styles = StyleSheet.create({
    Container: {
        width: 'auto',
        height: 'auto',
        marginHorizontal: 24,
        marginVertical: 16,
        paddingVertical: 24,
        justifyContent: 'space-between',
    },
    ContainerHeading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,  
    },
    ContainerHeadingText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    ContainerBody: {
        justifyContent: 'space-between',
    }
})

export default PopularOffers;

