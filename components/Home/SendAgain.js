import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../../constants/colors'
import ProfileImages from '../ProfileImages'

const SendAgain = props => {

    return (
        <View style={styles.container}>  

        <View style={styles.ContainerHeading}>
            <Text style={styles.ContainerHeadingText}>Send Again</Text>
            <TouchableOpacity style={styles.IconContainer} activeOpacity={0.8} onPress={props.onPress}>
                <Text style={styles.HeadingButton}>View more</Text>
            </TouchableOpacity>
        </View>

        <ProfileImages />
        
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
        alignItems: 'center',
        marginBottom: 16
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
        justifyContent: 'space-between'
    },
    ProfileContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    FetchImage : {
        width: 54,
        height: 54,
        borderRadius: 50,
        backgroundColor: Colors.primary,
    },
    Text: {
        color: Colors.black_var1,
        paddingTop: 8,
        fontSize: Colors.textPrimary
    }

})

export default SendAgain;

