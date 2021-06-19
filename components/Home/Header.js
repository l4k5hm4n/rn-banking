import React, { Suspense, useState } from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';

const NotificationIcon = React.lazy(() => import('../../assets/svg/notification_icon.js'));

const ToggleButton = (props) => {

    let { navigation, activePage} = props

    let PayToggleHandler = () => {
            navigation.navigate('Home')
        }

    let StoreToggleHandler = () => {
            navigation.navigate('Shop')
        }

    return ( 
        <View style={styles.ToggleContainer}>
            <TouchableOpacity style={ activePage == "Home" ? styles.ToogleItemContainerActive : styles.ToogleItemContainer } activeOpacity={0.8} onPress={PayToggleHandler}>
                <Text style={ activePage == "Home" ? styles.ToogleItemTextActive : styles.ToogleItemText }>Pay</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ activePage == "Shop" ? styles.ToogleItemContainerActive : styles.ToogleItemContainer } activeOpacity={0.8} onPress={StoreToggleHandler}>
                <Text style={ activePage == "Shop" ? styles.ToogleItemTextActive : styles.ToogleItemText }>Shop</Text>
            </TouchableOpacity>
        </View>
    )

}
const Header = (props) => {

    let {navigation, style, activePage} = props

    return (
        <View style={{...styles.container, ...style}}>  

        <TouchableOpacity style={styles.IconContainer} activeOpacity={0.8} >
            <Image style={styles.UserProfileImage} source={require('../../assets/home/profile_image.png')}></Image>
        </TouchableOpacity>

        <ToggleButton navigation={navigation} activePage={activePage}/>

        <TouchableOpacity style={styles.NotificationsIcon} activeOpacity={0.8} >
            <Suspense fallback={<Text>...</Text>}>
                <NotificationIcon />
            </Suspense> 
        </TouchableOpacity>
        
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 24,
        marginBottom: 8,
        paddingVertical: 24,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    IconContainer: {
        justifyContent: 'flex-start'
    },
    UserProfileImage : {
        width: 36,
        height: 36,
        borderRadius: 24,
    },
    ToggleContainer: {
        flexDirection: 'row',
        borderRadius: 20,
        borderWidth: 1, 
        borderColor: 'rgba(255, 255, 255, 0.5)',
        alignItems: 'center',
        paddingVertical: 4,
        paddingHorizontal: 6
    },
    ToogleItemContainer: {
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 20,
    },
    ToogleItemContainerActive: {
        paddingVertical: 6,
        paddingHorizontal: 24,
        backgroundColor: 'white',
        borderRadius: 20,
    },
    ToogleItemText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 13
    },
    ToogleItemTextActive: {
        color: '#C788FB',
        fontWeight: 'bold',
        fontSize: 13
    },
    NotificationsIcon: {
        alignItems: 'flex-end',
        justifyContent: 'center'
    }

})

export default Header;

