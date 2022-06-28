
import { View, Dimensions, FlatList, StyleSheet } from 'react-native'
import { useSelector } from "react-redux"
import ComparisonCard from './ComparisonCard';

const ScreenHeight = Dimensions.get("window").height;

export const ComparisonList = () => {

    const comparisonList = useSelector((state) => state.searchReducer.comparisonList);

    const renderCard = ({item}) => (<ComparisonCard item={item} />);

    return (
        <View style={styles.containerVertical}>
            <FlatList
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                horizontal = {true}
                data={comparisonList}
                renderItem={renderCard}
                keyExtractor={item => item.id}  
            /> 
        </View>
    );

};

const styles = StyleSheet.create({
    containerVertical:{
        flexDirection:"column",
        justifyContent:"center",
        marginTop:ScreenHeight*0.07
    },
});

export default ComparisonList;