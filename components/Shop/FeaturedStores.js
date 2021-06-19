import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, FlatList} from 'react-native';

const RightArrow = React.lazy(() => import('../../assets/svg/right_arrow.js'));

let offersData = [
    {
        id: 1,
        logo: require('../../assets/store/featured_stores/goibibo.png'),
        bannerBgImage: require('../../assets/store/featured_stores/goibibo_banner.png'),
        bannerBgColor: '#F96611',
        title: 'Upto 50% Off',
        titleColor: 'white',
        route: ''
    },
    {
        id: 2,
        logo: require('../../assets/store/featured_stores/myntra.png'),
        bannerBgImage: require('../../assets/store/featured_stores/myntra_banner.png'),
        bannerBgColor: '#F51CB3',
        title: 'Flat 10% off',
        titleColor: 'white',
        route: ''
    },
    {
        id: 3,
        logo: require('../../assets/store/featured_stores/zomato.png'),
        bannerBgImage: require('../../assets/store/featured_stores/zomato_banner.png'),
        bannerBgColor: '#F05050',
        title: ' Flat ₹500 off',
        titleColor: 'white',
        route: ''
    },
    {
        id: 4,
        logo: require('../../assets/store/featured_stores/uber.png'),
        bannerBgImage: require('../../assets/store/featured_stores/uber_banner.png'),
        bannerBgColor: '#222222',
        title: 'Flat ₹50 off',
        titleColor: 'white',
        route: ''
    },
    {
        id: 5,
        logo: require('../../assets/store/featured_stores/goibibo.png'),
        bannerBgImage: require('../../assets/store/featured_stores/goibibo_banner.png'),
        bannerBgColor: '#F96611',
        title: 'Upto 50% Off',
        titleColor: 'white',
        route: ''
    },
  ]

  function Slide(props) {
    let {data, index} = props
    return (
        <TouchableOpacity activeOpacity={0.8}>
        <View style={ (index == offersData.length-1) ? {...styles.SlideContainer, backgroundColor: data.bannerBgColor, marginRight: 44} : {...styles.SlideContainer, backgroundColor: data.bannerBgColor}}>

        <Image style={styles.SlideImage} source={data.bannerBgImage}></Image>
        
        <View style={styles.SlideText}>
            <Text style={{...styles.SlideTextTitle, color: data.titleColor}}>{data.title}</Text>
        </View>

        <View style={styles.logo}>
            <Image style={styles.logoImage} source={data.logo}></Image>
        </View>

      </View>
      </TouchableOpacity>
    );
  }

const Slider = props => {

    return (
      <View>
        <View style={styles.Container}>  

            <View style={styles.ContainerHeading}>
                <Text style={styles.ContainerHeadingText}>Featured Stores</Text>
            </View>
        
        </View>

            <FlatList
                data={offersData}
                keyExtractor={item => item.id.toString()}
                renderItem={({item, index}) => {
                    return <Slide data={item} index={index}/>
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.SectionContainer}
            >    
             </FlatList>
      </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        width: 'auto',
        height: 'auto',
        marginHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 6,
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
    SectionContainer: {
        paddingHorizontal: 24,
    },
    SlideContainer: {
        height:150,
        width: 100,
        marginRight: 10,
        borderRadius: 8,
        overflow: 'hidden',
        justifyContent: 'center',
    },
    SlideImage: { 
        width: '100%',
        height: 120,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },
    SlideText: {
        fontSize: 14,
        paddingVertical: 10,
    },
    SlideTextTitle: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase'
    },
    logo: {
        position: 'absolute',
        top: '50%',
        left: 8,
        backgroundColor: 'red',
        borderRadius: 20,
        width: 34,
        height: 34,
    },
    logoImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        borderRadius: 20,
    }

})

export default Slider;