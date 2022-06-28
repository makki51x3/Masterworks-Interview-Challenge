


import { Dimensions, Platform, View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import {openInBrowser} from '../handlers/openInBrowser'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons';
import {onShare} from '../handlers/onShare'
import { useDispatch } from "react-redux"
import {removeFromComparison} from "../redux/slices/searchSlice"
import {handleDate} from "../handlers/handleDate"
import {numberToComma} from "../handlers/numberToComma"

const ScreenWidth = Dimensions.get("window").width;
const ScreenHeight = Dimensions.get("window").height;

export const ComparisonCard = ({item})=>{

    // Get data from the redux store
    const dispatch = useDispatch();

    return(
        <View style={styles.mainContainer}>
            <TouchableOpacity onPress={()=>{openInBrowser(item)}} style={styles.head}>
                <Text style={styles.title}>{item.full_name}</Text>
                <Image source={{ uri: item.owner.avatar_url }} style = {styles.image} />
            </TouchableOpacity>
            <View style={styles.body}>
                <View style={styles.containerHorizontal}>
                    <Ionicons style={styles.star}name="star" size={24} color="#202020"/>
                    <Text onPress={()=>{openInBrowser(item)}} style={styles.title}>Stars</Text>
                </View>
                <Text style={styles.title}>{numberToComma(item.stargazers_count)}</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.containerHorizontal}>
                    <FontAwesome style={styles.fork} name="code-fork" size={24} color="#202020" />
                    <Text style={styles.title}>Forks</Text>
                </View>
                <Text style={styles.title}>{numberToComma(item.forks_count)}</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.containerHorizontal}>
                    <Ionicons style={styles.issues} name="md-information-circle" size={24} color="#202020"/>
                    <Text style={styles.title}>Open issues</Text>
                </View>
                <Text style={styles.title}>{item.open_issues_count}</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.containerHorizontal}>
                    <Ionicons style={styles.calendar}name="calendar-sharp" size={24} color="#202020"/>
                    <Text style={styles.title}>Age</Text>
                </View>
                <Text style={styles.title}>{handleDate(item.created_at)}</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.containerHorizontal}>
                    <FontAwesome style={styles.plus} name="plus" size={24} color="#202020" />
                    <Text style={styles.title}>Last commit</Text>
                </View>
                <Text style={styles.title}>{handleDate(item.updated_at)}</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.containerHorizontal}>
                    <FontAwesome style={styles.certificate} name="certificate" size={24} color="#202020" />
                    <Text style={styles.title}>License</Text>
                </View>
                <Text style={styles.title}>{item.license?item.license.key.toUpperCase():"No License"}</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.containerHorizontal}>
                    <FontAwesome style={styles.language} name="language" size={24} color="#202020" />
                    <Text style={styles.title}>Language</Text>
                </View>
                <Text style={styles.title}>{item.language}</Text>
            </View>
            <View style={styles.foot}>
                <TouchableOpacity 
                    onPress={()=>{dispatch(removeFromComparison(item))}}
                    style={styles.removeBtn}
                >          
                    <Ionicons style={styles.removeIcon}name="remove-circle-outline" size={21} color="black"/>
                    <Text style={styles.removeBtnTxt} >Remove repo</Text>
                </TouchableOpacity>                
                <Ionicons onPress={()=>{onShare(item)}} name="share-social-sharp" size={24} color="#202020"/>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    removeIcon:{
        paddingRight:3, 
        alignSelf:"center"
    },
    containerVertical:{
        flexDirection:"column",
        justifyContent:"center"
    },
    removeBtnTxt:{
        alignSelf:"center",
        fontWeight:"500"
    },
    language:{
        marginLeft:2,
        marginRight:9,
        alignSelf:"center"
    },
    certificate:{
        marginLeft:2,
        marginRight:9,
        alignSelf:"center"
    },
    plus:{
        marginLeft:3,
        marginRight:9,
        alignSelf:"center"
    },
    star:{
        marginRight:5,
        alignSelf:"center"
    },
    fork:{
        marginLeft:7,
        marginRight:8,
        alignSelf:"center"
    },
    issues:{
        marginRight:6,
        alignSelf:"center"
    },
    calendar:{
        marginRight:7,
        alignSelf:"center"
    },
    mainContainer:{
        flexDirection:"column",
        justifyContent:"center",
        backgroundColor:"white",
        paddingHorizontal:10,
        paddingVertical:5,
        width:Platform.OS=="ios"||Platform.OS=="android"?ScreenWidth*0.7:ScreenWidth*0.25,
        marginLeft:ScreenWidth*0.04
    },
    containerHorizontal:{
        flexDirection:"row",
        justifyContent:"center",
    },
    title: {
        fontSize: 17,
        alignSelf:"center",
        paddingVertical:5
    },
    image: {
        height: 30, 
        width: 30, 
        margin: 3, 
        resizeMode:"contain",
        borderRadius:7,
    },
    removeBtn: {
        flexDirection:"row",
        borderRightWidth: 3,
        borderRightColor:"#f6f6f5",
        alignSelf:"center"
    },   
    head:{
        backgroundColor:'white', 
        flexDirection:"row",
        paddingVertical:5, 
        paddingHorizontal:10,
        justifyContent:"space-between",
        borderBottomWidth: 3,
        borderBottomColor:"#f6f6f5",
    },
    body:{
        backgroundColor:'white', 
        flexDirection:"row",
        paddingVertical:5, 
        paddingHorizontal:10,
        justifyContent:"space-between",
    },
    foot:{
        backgroundColor:'white', 
        flexDirection:"row",
        paddingVertical:5, 
        paddingHorizontal:10,
        justifyContent:"space-evenly",
        borderTopWidth: 3,
        borderTopColor:"#f6f6f5",
    },
});

export default ComparisonCard;