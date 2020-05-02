import React from 'react'
import{Text,StyleSheet,View,Button,TouchableOpacity,ScrollView} from'react-native'

const HomeScreen=(props)=>{
    return (
    <View style={{flex:1,backgroundColor:"midnightblue"}}>
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
        onPress={()=>props.navigation.navigate("list")}>
        <Text>Go to List screen</Text>
    </TouchableOpacity>
    <Button 
        onPress={()=>props.navigation.navigate("image")}
         title="Go to Image Screen"
    />
    <TouchableOpacity 
        style={styles.button}
        onPress={()=>props.navigation.navigate("count")}>
        <Text>Go to Counter screen</Text>
    </TouchableOpacity>
    <Button 
        onPress={()=>props.navigation.navigate("color")}
         title="Go to Color Screen"
    />
   <TouchableOpacity
        style={styles.button}
        onPress={()=>props.navigation.navigate("square")}>
        <Text>Go to Square Screen</Text>
    </TouchableOpacity>
    </ScrollView>
    </View>
    )
}

const styles=StyleSheet.create({

       button:{
        backgroundColor:'lightsteelblue',
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
    }
})

export default HomeScreen;

