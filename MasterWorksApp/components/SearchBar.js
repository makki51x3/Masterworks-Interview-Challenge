
import {fetchRepos} from '../handlers/fetchRepos'
import { Ionicons } from '@expo/vector-icons'
import { useSelector, useDispatch } from "react-redux"
import {updateSuggestionsVisible,addToComparison} from "../redux/slices/searchSlice"
import { View, Dimensions, FlatList, Platform, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { defaultSuggestion } from '../components/defaultSuggestion'

const ScreenHeight = Dimensions.get("window").height;

export const SearchBar = ()=>{

  const comparisonList = useSelector((state) => state.searchReducer.comparisonList);

  // Get data from the redux store
  const dispatch = useDispatch();
  const suggestionsVisible = useSelector((state) => state.searchReducer.suggestionsVisible);
  const suggestionList = useSelector((state) => state.searchReducer.suggestionList);

  const renderSuggestion = ({item}) => {  
    if(comparisonList.includes(item)){
      return <></>
    }
    else{
      return(
        <TouchableOpacity 
            onPress={()=>{dispatch(addToComparison(item))}}
            style={styles.item}
        >          
            <Ionicons name="md-add" size={24} color="black"/>
            <Text style={styles.title}>{item.full_name}</Text>
        </TouchableOpacity>
      );
    }
  }

  return (
    <View  style={styles.searchBar}>
      <TouchableOpacity 
        style={{alignSelf:"center"}} 
        onPress={()=>{dispatch(updateSuggestionsVisible(!suggestionsVisible))}} 
      >
        <Ionicons 
          name={suggestionsVisible?"md-chevron-up":"search-sharp"} 
          size={21} 
          color="black" 
        />
      </TouchableOpacity>
      <View style={styles.searchInputContainer}>
        <TextInput 
          onChangeText= {(filter) => {fetchRepos(dispatch,filter);}} 
          placeholder="Search Repositories"
          style={styles.searchInput} 
        />
      </View>
      { !suggestionsVisible && 
        <TouchableOpacity onPress={()=>{dispatch(updateSuggestionsVisible(!suggestionsVisible))}} >
            <Ionicons 
              name="md-chevron-down" 
              size={21} 
              color="black" 
            />
        </TouchableOpacity>
      }
      { suggestionsVisible && 
        <View style={styles.suggestions}>
            <FlatList
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={true}
              horizontal = {true}
              data={suggestionList}
              renderItem={renderSuggestion}
              keyExtractor={item => item.id}  
              ListEmptyComponent={defaultSuggestion}
            /> 
        </View>
      } 
    </View>  
  );
}


const styles = StyleSheet.create({
  searchInputContainer:{
    flex:1, 
    flexDirection:"column"
  },
  suggestions:{
    alignSelf:"center",
    backgroundColor:'white', 
    padding:5, 
    paddingHorizontal:5,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    width:"70%"
  },
  item: {
    flexDirection:"row",
    backgroundColor: '#c4dff5',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: Platform.OS=="ios"||Platform.OS=="android"?15:18,
  },
  searchBar:{
    flexDirection:"row", 
    alignSelf:"center",
    marginTop:"1%",
    backgroundColor:'white', 
    padding:5, 
    paddingHorizontal:10,
    borderRadius:20,
    marginTop:Platform.OS=="ios"||Platform.OS=="android"?ScreenHeight*0.04:ScreenHeight*0.04,
    width:Platform.OS=="ios"||Platform.OS=="android"?"90%":"70%"
  },
  searchInput: {
    flex:1,
    textAlign: 'center',
    fontSize: 14,
    marginHorizontal:3,
  },
});

export default SearchBar;