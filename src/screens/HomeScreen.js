import React from 'react'
import{Text,StyleSheet,View,Button,TouchableOpacity,ScrollView} from'react-native'

const HomeScreen=(props)=>{
    return (
    <View style={{flex:1,backgroundColor:"#98DB34"}}>
        <ScrollView>
    {/* <Text style={styles.text}>HomeScreen</Text> */}
    {/* <Button 
        //  onPress={navigation.navigate('compo', {name: 'pallu'})}
        onPress={()=>{
            props.navigation.navigate("compo")}}
         title="Go to Component Screen"
    /> */}
    <TouchableOpacity 
        style={styles.button}
        onPress={()=>props.navigation.navigate("List")}>
        <Text style={styles.btext}>Go to List screen</Text>
    </TouchableOpacity>
    <Button 
        color="#DB3477"
        onPress={()=>props.navigation.navigate("Image")}
         title="Go to Image Screen"
    />
    <TouchableOpacity 
        style={styles.button}
        onPress={()=>props.navigation.navigate("Count")}>
        <Text style={styles.btext}>Go to Counter screen</Text>
    </TouchableOpacity>
    <Button 
        color="#DB3477"
        onPress={()=>props.navigation.navigate("Color")}
         title="Go to Color Screen"
    />
   <TouchableOpacity
        style={styles.button}
        onPress={()=>props.navigation.navigate("Square")}>
        <Text style={styles.btext}>Go to Square Screen</Text>
    </TouchableOpacity>
    <Button
        color="#DB3477"
        // tainerStyle={{padding:10, height:45}}
        onPress={()=>props.navigation.navigate("Text")}
         title="Go to Text Screen"
    />
    </ScrollView>
    </View>
    )
}

const styles=StyleSheet.create({

       button:{
        backgroundColor:'snow',
        height:50,
        width:200,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        margin:10,
        // borderRadius:25
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    btext:{
        color:"#DB3477",
        fontWeight:'bold',
        fontSize:18
    }
})

export default HomeScreen;

