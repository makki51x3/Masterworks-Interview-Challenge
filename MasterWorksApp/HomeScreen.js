import { StatusBar } from 'expo-status-bar';
import { View, FlatList, SafeAreaView, ImageBackground, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSelector, useDispatch } from "react-redux";
import {updateSuggestionsVisible,updateFilter} from "./redux/slices/searchSlice"
import background from './assets/background.png' // relative path to image 

const Item = ({ title }) => {
  return(
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export const HomeScreen = ()=>{

  // Get data from the redux store
  const dispatch = useDispatch();

  const suggestionsVisible = useSelector((state) => state.searchReducer.suggestionsVisible);
  const repositories = useSelector((state) => state.searchReducer.repositories);
  const renderItem = ({ item }) => (<Item title={item.title} />);
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={false} /> 
      <ImageBackground source= {background}  resizeMode="cover" style={styles.backgroundContainer}>
        <View style={styles.appContainer}> 
          <View  style={styles.searchBar}>
            <Ionicons name="search-sharp" size={21} color="black" />
            <TextInput 
            onChangeText= {(filter) => dispatch(updateFilter(filter))} 
            placeholder="Search Repositories"
            style={styles.searchInput} 
            />
            <TouchableOpacity 
            onPress={()=>{dispatch(updateSuggestionsVisible(!suggestionsVisible))}}
            >
              <Ionicons name={suggestionsVisible?"md-chevron-up":"md-chevron-down"} size={21} color="black" />
            </TouchableOpacity>
          </View>
          { suggestionsVisible && 
          <View style={styles.searchBar}>
            <FlatList
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={true}
              horizontal = {true}
              data={repositories}
              renderItem={renderItem}
              keyExtractor={item => item.id}  
              ListEmptyComponent={ 
                ()=>(
                  <View style={styles.item}>
                    <Text style={styles.title}>No Suggestions Available!</Text>
                  </View>
                )
            }
            /> 
          </View>
          }          
        </View>
      </ImageBackground>    
    </SafeAreaView>  
  );
}
const styles = StyleSheet.create({
  card_template:{
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
    alignSelf:"center"
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
  },
  container:{
    flex: 1
  },
  searchBar:{
    flexDirection:"row", 
    alignSelf:"center",
    marginTop:"1%",
    backgroundColor:'white', 
    padding:5, 
    paddingHorizontal:10,
    borderRadius:20,
    width:"70%"
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
  searchInput: {
    flex:1,
    textAlign: 'center',
    fontSize: 14,
    marginHorizontal:3,
  },
});

export default HomeScreen;
