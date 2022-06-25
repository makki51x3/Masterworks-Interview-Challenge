import { StatusBar } from 'expo-status-bar';
import { View, TextInput, StyleSheet, Dimensions, Platform, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSelector, useDispatch } from "react-redux";
import {updateSuggestionsVisible,updateFilter} from "./redux/slices/searchSlice"

const ScreenHeight = Dimensions.get("window").height;

export const HomeScreen = ()=>{

  // Get data from the redux store
  const dispatch = useDispatch();

  const suggestionsVisible = useSelector((state) => state.searchReducer.suggestionsVisible);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{flexDirection:"row", justifyContent:"space-around",width:"77%"}}>
          <TextInput 
          onChangeText= {(filter) => dispatch(updateFilter(filter))} 
          placeholder="Search Repositories"
          style={styles.searchInput} 
          />
          <TouchableOpacity 
          style={styles.btn} 
          onPress={()=>{dispatch(updateSuggestionsVisible(!suggestionsVisible))}}
          >
            <Ionicons name={suggestionsVisible?"caret-up-circle-outline":"caret-down-circle-outline"} size={24} color="black" />
          </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInput: {
    flex:1,
    textAlign: 'center',
    padding:(Platform.OS!="ios")?"0.3%":"1.3%", 
    margin:10,
    marginRight:0,
    borderWidth: 1,
    borderColor: 'black',
    fontSize: 14,
    backgroundColor: 'white',
    borderRadius:5,
  },
  btn: {
      margin:ScreenHeight*0.01,
      justifyContent:"space-around"
  }
});

export default HomeScreen;
