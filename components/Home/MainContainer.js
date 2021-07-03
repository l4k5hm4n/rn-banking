import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated'


// import Colors from '../constants/colors'
const MainContainer = (props) => {

    let [propStyles, setStyles] = React.useState(props.style)

    return (
        <Animated.View style={[styles.container, propStyles]}>
            <View style={styles.DividerContainer}>
                <View style={styles.Divider}>
                </View>
            </View>
            {props.children}
        </Animated.View>
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
        marginTop: 240,
        overflow: 'hidden',
        zIndex: 9999999999
    }
})

export default MainContainer;