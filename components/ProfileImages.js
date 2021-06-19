import React, { useState, useEffect } from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../constants/colors'

const SendAgain = props => {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState({});  

    useEffect(() => {
        setLoading(true)
        fetch('https://randomuser.me/api/?results=4')
          .then((response) => response.json())
          .then((json) => setData(json.results))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);

    return (
        <View style={styles.ContainerBody}>
        { !isLoading ? 
                data.map((item, index) => {   
                    return( 
                    <TouchableOpacity key={index} style={styles.ProfileContainer} activeOpacity={0.8} onPress={props.onPress}>
                        <View style={styles.ProfileImage} >
                                {(data[1].login.uuid == item.login.uuid) ? // test condition for rendering a view with alphabet if profile picture isn't available
                                <View style={styles.FetchImage}><Text style={styles.FetchImageText}>{item.name.first[0]}</Text></View> 
                                 :       
                                 <Image style={styles.FetchImage} source={{uri: item.picture.large}} ></Image>
                                }
                        </View>
                        <Text style={styles.Text}>{item.name.first}</Text>
                    </TouchableOpacity>
                )}) 
        :
        [ '', '' ,'' , ''].map((item, index) => {   
            return( 
            <TouchableOpacity key={index} style={styles.ProfileContainer} activeOpacity={0.8} onPress={props.onPress}>
                <View style={styles.ProfileImage} >
                        <View style={styles.FetchImage}></View> 
                </View>
                <Text style={styles.Text}>test</Text>
            </TouchableOpacity>
        )}) 
        }
        </View>
    )

}

const styles = StyleSheet.create({
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    FetchImageText: {
        color: 'white',
        fontSize: Colors.textPrimary*2
    },
    Text: {
        color: Colors.black_var1,
        paddingTop: 8,
        fontSize: Colors.textPrimary
    }

})

export default SendAgain;

