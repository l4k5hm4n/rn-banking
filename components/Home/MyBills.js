import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../../constants/colors'
import BillsList from '../BillsList'
import EllipsesSvg from '../../assets/svg/Ellipses'

const SendAgain = props => {

    return (
        <View style={styles.container}>  

            <View style={styles.ContainerHeading}>
                <Text style={styles.ContainerHeadingText}>My bills</Text>
            </View>

        <View style={styles.ContainerBody}>

            <BillsList />

            <TouchableOpacity activeOpacity={0.8} style={styles.ViewAllContainer}>
                <View style={styles.ViewAllIconContainer}>
                    <EllipsesSvg style={styles.ViewAllIcon} />
                </View>
                <Text style={styles.ViewAllText}>View all bills</Text>
            </TouchableOpacity>

        </View>
        
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        width: 'auto',
        height: 'auto',
        marginHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 20,
        justifyContent: 'space-between',
    },
    ContainerHeading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16
    },
    ContainerHeadingText: {
        fontWeight: '700',
        fontSize: 16,
        color: Colors.black
    },
    ContainerBody: {
        justifyContent: 'space-between',
        backgroundColor: Colors.accent_var1,
        borderRadius: 20,
    },
    ViewAllContainer: {
        marginHorizontal: 24,
        paddingVertical: 12,
        flexDirection: 'row',
        alignItems: 'center'
    },
    ViewAllIconContainer: {
        paddingVertical: 6,
        paddingHorizontal: 6,
        borderRadius: 10,
        backgroundColor: Colors.primary
    },
    ViewAllIcon: {
    },
    ViewAllText: {
        marginLeft: 12,
        color: Colors.primary,
        fontWeight: '700',
        fontSize: 13
    }

})

export default SendAgain;

