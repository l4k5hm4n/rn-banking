import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View , ScrollView} from 'react-native';

// Components
import OffersSlider from './OffersSlider'
import PopularOffers from './PopularOffers'
import BottomFold from './BottomFold'

export default function Store({navigation}) {

  return (
    <View style={styles.MainContainer}>
    <ScrollView contentContainerStyle={styles.container}
      // onScroll={(event) => {console.log(event.nativeEvent)}}
    >
            <LinearGradient  
            colors={['#542A88', '#3D2672', '#1A2450']}
            locations= {[0,0.2,0.6]}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            style={styles.MainContainer}
            >
           {/* <Header navigation={navigation} style={{marginTop: -36}} activePage={"Shop"}/> */}
           <OffersSlider style={{paddingTop: 188}}/>
           <PopularOffers />
           </LinearGradient>

           <BottomFold />

    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    marginTop: -90,
  },
  container: {
    backgroundColor: '#fff',
  }
});
