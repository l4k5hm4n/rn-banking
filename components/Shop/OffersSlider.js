import React, { Suspense} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, FlatList} from 'react-native';

const RightArrow = React.lazy(() => import('../../assets/svg/right_arrow.js'));

let offersData = [
    {
        id: 1,
        logo: require('../../assets/store/myntra.png'),
        logoBgColor: 'white',
        bannerBgImage: require('../../assets/store/myntra_banner.png'),
        bannerBgColor: '#88C9E7',
        title: 'Flat 30% off on all Shoe brands',
        titleColor: 'white',
        buttonText: 'Shop Now',
        buttonBgColor: '#1D698B',
        route: ''
    },
    {
        id: 2,
        logo: require('../../assets/store/dominos.png'),
        logoBgColor: 'white',
        bannerBgImage: require('../../assets/store/dominos_banner.png'),
        bannerBgColor: '#D4D8D6',
        title: ' ₹50 off on pizza of your choice',
        titleColor: '#464646',
        buttonText: 'Order Now',
        buttonBgColor: '#636966',
        route: ''
    },
    {
        id: 3,
        logo: require('../../assets/store/oyo.png'),
        logoBgColor: '#EF2A24',
        bannerBgImage: require('../../assets/store/oyo_banner.png'),
        bannerBgColor: '#F3AF6C',
        title: ' ₹500 off on your first booking',
        titleColor: 'white',
        buttonText: 'Book Now',
        buttonBgColor: '#8D4C0C',
        route: ''
    },
    {
        id: 4,
        logo: require('../../assets/store/myntra.png'),
        logoBgColor: 'white',
        bannerBgImage: require('../../assets/store/myntra_banner.png'),
        bannerBgColor: '#88C9E7',
        title: 'Flat 30% off on all Shoe brands',
        titleColor: 'white',
        buttonText: 'Shop Now',
        buttonBgColor: '#1D698B',
        route: ''
    },
    {
        id: 5,
        logo: require('../../assets/store/dominos.png'),
        logoBgColor: 'white',
        bannerBgImage: require('../../assets/store/dominos_banner.png'),
        bannerBgColor: '#D4D8D6',
        title: ' ₹50 off on pizza of your choice',
        titleColor: '#464646',
        buttonText: 'Order Now',
        buttonBgColor: '#636966',
        route: ''
    }
  ]

  function Slide(props) {
    let {data, index} = props
    return (
        <View style={ (index == offersData.length-1) ? {...styles.SlideContainer, backgroundColor: data.bannerBgColor, marginRight: 44} : {...styles.SlideContainer, backgroundColor: data.bannerBgColor}}>

        <Image style={styles.SlideImage} source={data.bannerBgImage}></Image>
        
        <View style={styles.SlideText}>
            <Text style={{...styles.SlideTextTitle, color: data.titleColor}}>{data.title}</Text>
            <TouchableOpacity style={{...styles.BtnContainer, backgroundColor: data.buttonBgColor}} activeOpacity={0.8}>
                    <Text style={styles.BtnText}>{data.buttonText}</Text>
                    <View style={styles.rightArrow}>
                        <Suspense fallback={<Text>...</Text>}>
                            <RightArrow />
                        </Suspense>
                    </View>
            </TouchableOpacity>
        </View>

        <View style={{...styles.logo, backgroundColor: data.logoBgColor}}>
            <Image style={styles.logoImage} source={data.logo}></Image>
        </View>

      </View>
    );
  }

const Slider = props => {

    return (
      <View>
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
    SectionContainer: {
        paddingHorizontal: 24,
    },
    SlideContainer: {
        height:250,
        width: 165,
        marginRight: 16,
        borderRadius: 12,
        overflow: 'hidden',
        justifyContent: 'center',
    },
    SlideImage: { 
        width: '100%',
        height: 140,
    },
    SlideText: {
        fontSize: 14,
        padding: 16,
    },
    SlideTextTitle: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    BtnContainer: {
        padding: 10,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginTop: 10
    },
    BtnText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12,
        opacity: 0.8,
        marginRight: 2,
    },
    rightArrow:{
        opacity: 0.8
    },
    logo: {
        position: 'absolute',
        top: 16,
        left: 16,
        backgroundColor: 'red',
        borderRadius: 20,
        width: 40,
        height: 40,
        padding: 8
    },
    logoImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        borderRadius: 20,
    }

})

export default Slider;