import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// import Colors from '../constants/colors'
const MainContainer = props => {
    return (
        <View style={styles.container}>
            <View style={styles.DividerContainer}>
                <View style={styles.Divider}>

                </View>
            </View>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    DividerContainer: {
        alignItems: 'center',
    },
    Divider: {
        width: 38,
        height: 4,
        borderRadius: 20,
        backgroundColor: '#D2D9F1',
        marginVertical: 12
    },
    container: {
        backgroundColor: 'white',
        borderTopLeftRadius: 34,
        borderTopRightRadius: 34,
        marginTop: -32,
        overflow: 'hidden',
    }
})

export default MainContainer;