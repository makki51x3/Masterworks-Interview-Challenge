import { StatusBar } from 'expo-status-bar'
import { View, SafeAreaView, ImageBackground, StyleSheet } from 'react-native'
import background from './assets/background.png' // relative path to image 
import Constants from 'expo-constants'
import {SearchBar} from "./components/SearchBar"
import {ComparisonList} from "./components/ComparisonList"

export const HomeScreen = ()=>{

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={false} /> 
      <ImageBackground source= {background}  resizeMode="cover" style={styles.backgroundContainer}>
        <View style={styles.appContainer}> 
          <SearchBar/>
          <ComparisonList/>
        </View>
      </ImageBackground>    
    </SafeAreaView>  
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  appContainer:{
    flex:1,
    width: "100%", 
    backgroundColor:"rgba(0, 0, 0,0.77)",
  },
  backgroundContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
});

export default HomeScreen;
