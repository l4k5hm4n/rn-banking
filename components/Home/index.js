import React from 'react';
import { StyleSheet, View , ScrollView} from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';

// Components
import TopFold from './TopFold'
import MainContainer from './MainContainer'
import FetchBillersBanner from './FetchBillersBanner'
import MainPayments from './MainPayments'
import SendAgain from './SendAgain'
import MyBills from './MyBills'
import CashbackBanner from './CashbackBanner'
import BillsGrid from './BillsGrid'
import InviteReferral from './InviteReferral'
import Slider from '../Slider'

const Home = ({navigation}) => {

  return (
    <View style={styles.MainContainer}>

    <ScrollView 
    contentContainerStyle={styles.container}    
      // onScroll={(event) => {console.log(event.nativeEvent)}}
    >
      <TopFold navigation={navigation}/>
      <MainContainer>
        <FetchBillersBanner />
        <MainPayments />
        <Slider />
        <SendAgain />
        <MyBills />
        <CashbackBanner />
        <BillsGrid />
        <InviteReferral />
      </MainContainer>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    marginTop: -100,
  },
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
});

export default Home; 
