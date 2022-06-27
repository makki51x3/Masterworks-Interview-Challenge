
import { Dimensions, View, FlatList, Platform, TextInput, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { useSelector, useDispatch } from "react-redux"
import {openInBrowser} from '../handlers/openInBrowser'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons';
import {onShare} from '../handlers/onShare'
import ComparisonCard from './ComparisonCard';

export const ComparisonList = () => {

    const comparisonList = useSelector((state) => state.searchReducer.comparisonList);

    return (
        <View style={styles.containerVertical}>
            <FlatList
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                horizontal = {true}
                data={comparisonList}
                renderItem={ComparisonCard}
                keyExtractor={item => item.id}  
                // ListEmptyComponent={defaultSuggestion}
            /> 
        </View>
    );

};

const styles = StyleSheet.create({
    containerVertical:{
        flexDirection:"column",
        justifyContent:"center"
    },
});

export default ComparisonList;