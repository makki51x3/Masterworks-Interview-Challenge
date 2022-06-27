


import { Dimensions, View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import {openInBrowser} from '../handlers/openInBrowser'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons';
import {onShare} from '../handlers/onShare'

const ScreenWidth = Dimensions.get("window").width;
const ScreenHeight = Dimensions.get("window").height;

export const ComparisonCard = (item)=>{
    return(
        <View style={styles.mainContainer}>
            <View style={styles.head}>
                <Text onPress={()=>{openInBrowser(item)}}style={styles.title}>{item.full_name}</Text>
                <Image source={{ uri: "https://avatars.githubusercontent.com/u/139426?v=4" }} style = {styles.image} />
            </View>
            <View style={styles.body}>
                <View style={styles.containerHorizontal}>
                    <Ionicons style={styles.star}name="star" size={24} color="#202020"/>
                    <Text onPress={()=>{openInBrowser(item)}} style={styles.title}>angular/angular.js</Text>
                </View>
                <Text style={styles.title}>190,121</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.containerHorizontal}>
                    <FontAwesome style={styles.fork} name="code-fork" size={24} color="#202020" />
                    <Text style={styles.title}>angular</Text>
                </View>
                <Text style={styles.title}>190,121</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.containerHorizontal}>
                    <Ionicons style={styles.info} name="md-information-circle" size={24} color="#202020"/>
                    <Text style={styles.title}>angu5678lar</Text>
                </View>
                <Text style={styles.title}>190,121</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.containerHorizontal}>
                    <Ionicons style={styles.calendar}name="calendar-sharp" size={24} color="#202020"/>
                    <Text style={styles.title}>angular/</Text>
                </View>
                <Text style={styles.title}>190,121</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.containerHorizontal}>
                    <FontAwesome style={styles.plus} name="plus" size={24} color="#202020" />
                    <Text style={styles.title}>angular</Text>
                </View>
                <Text style={styles.title}>190,121</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.containerHorizontal}>
                    <FontAwesome style={styles.certificate} name="certificate" size={24} color="#202020" />
                    <Text style={styles.title}>angular</Text>
                </View>
                <Text style={styles.title}>190,121</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.containerHorizontal}>
                    <FontAwesome style={styles.language} name="language" size={24} color="#202020" />
                    <Text style={styles.title}>angular</Text>
                </View>
                <Text style={styles.title}>190,121</Text>
            </View>
            <View style={styles.foot}>
                <TouchableOpacity 
                    onPress={()=>{console.log("pressed")}}
                    style={styles.removeBtn}
                >          
                    <Ionicons name="md-add" size={24} color="black"/>
                    <Text style={styles.removeBtnTxt} >Press to Remove</Text>
                </TouchableOpacity>                
                <Ionicons onPress={()=>{onShare(item)}} name="share-social-sharp" size={24} color="#202020"/>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
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
        marginRight:9
    },
    certificate:{
        marginLeft:2,
        marginRight:9
    },
    plus:{
        marginLeft:3,
        marginRight:9
    },
    star:{
        marginRight:5
    },
    fork:{
        marginLeft:7,
        marginRight:8
    },
    info:{
        marginRight:6
    },
    calendar:{
        marginRight:7
    },
    mainContainer:{
        flexDirection:"column",
        justifyContent:"center",
        backgroundColor:"white",
        paddingHorizontal:10,
        paddingVertical:5,
        width:ScreenWidth*0.25,
    },
    containerHorizontal:{
        flexDirection:"row",
        justifyContent:"center",
    },
    title: {
        fontSize: 17,
        alignSelf:"center"
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
        justifyContent:"center"
    },   
    head:{
        backgroundColor:'white', 
        flexDirection:"row",
        padding:10, 
        paddingHorizontal:10,
        justifyContent:"space-between",
        borderBottomWidth: 3,
        borderBottomColor:"#f6f6f5",
    },
    body:{
        backgroundColor:'white', 
        flexDirection:"row",
        padding:10, 
        paddingHorizontal:10,
        justifyContent:"space-between",
    },
    foot:{
        backgroundColor:'white', 
        flexDirection:"row",
        padding:10, 
        paddingHorizontal:10,
        justifyContent:"space-evenly",
        borderTopWidth: 3,
        borderTopColor:"#f6f6f5",
    },
});

export default ComparisonCard;