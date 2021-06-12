import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , ScrollView} from 'react-native';
import ScannerSection from './components/Home/ScannerSection'
import MainContainer from './components/Home/MainContainer'
import FetchBillersBanner from './components/Home/FetchBillersBanner'
import MainPayments from './components/Home/MainPayments'
import SendAgain from './components/Home/SendAgain'
import MyBills from './components/Home/MyBills'
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
