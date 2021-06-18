import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , ScrollView} from 'react-native';
import ScannerSection from './components/Home/ScannerSection'
import MainContainer from './components/Home/MainContainer'
import FetchBillersBanner from './components/Home/FetchBillersBanner'
import MainPayments from './components/Home/MainPayments'
import SendAgain from './components/Home/SendAgain'
import MyBills from './components/Home/MyBills'
import CashbackBanner from './components/Home/CashbackBanner'
import BillsGrid from './components/Home/BillsGrid'
import InviteReferral from './components/Home/InviteReferral'
import Slider from './components/Slider'

export default function App() {

  return (
    <View style={styles.MainContainer}>
    <ScrollView contentContainerStyle={styles.container}
      // onScroll={(event) => {console.log(event.nativeEvent)}}
    >
      <StatusBar style="auto" />
      <ScannerSection />
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
    marginTop: 36,
  },
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
});


// https://formidable.com/blog/2021/reanimated-two/
// https://www.reactnativeschool.com/how-to-use-reanimated-2-a-beginners-guide
// https://thewidlarzgroup.com/reanimated2-slider/#animate-slider2-with-useslider-hook