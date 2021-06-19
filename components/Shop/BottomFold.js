import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View , ScrollView} from 'react-native';

// Components
import FeaturedStores from './FeaturedStores'
import AllCategories from './AllCategories'

export default function BottomFold({navigation}) {

  return (
    <ScrollView contentContainerStyle={styles.container}
      // onScroll={(event) => {console.log(event.nativeEvent)}}
    >
            <LinearGradient  
            colors={['#24316B', '#1A2450']}
            locations= {[0,0.6]}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            style={styles.MainContainer}
            >

           <FeaturedStores />
           <AllCategories />
           </LinearGradient>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
});
