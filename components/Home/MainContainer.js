import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// import Colors from '../constants/colors'
const MainContainer = props => {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderTopLeftRadius: 34,
        borderTopRightRadius: 34,
        marginTop: -32,
        overflow: 'hidden',
    }
})

export default MainContainer;