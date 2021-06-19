import React from 'react';
import { StyleSheet} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from './Header'

const TopFold = ({navigation}) => {
    return (
        <LinearGradient  
            colors={['#C788FB', '#9269EB', '#435ECF']}
            locations= {[0,0.4,1]}
            start={{x: 0.5, y: 0}}
            end={{x: 0.5, y: 1}}
            style={styles.bgHeader}
        >

        <Header navigation={navigation} activePage={"Home"}/>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    bgHeader: {
        width: '100%',
        height: 320
    }
})

export default TopFold;