import React from 'react'
import{Text,StyleSheet,View,Button,TouchableOpacity} from'react-native'

const HomeScreen=(props)=>{
    return (
    <View>
    <Text style={styles.text}>HomeScreen</Text>
    <Button 
        //  onPress={navigation.navigate('compo', {name: 'pallu'})}
        onPress={()=>{
            props.navigation.navigate("compo")}}
         title="Go to ComponentScreen"
    />
    <TouchableOpacity 
        style={styles.button}
        onPress={()=>props.navigation.navigate("list")}>
        <Text>Go to List screen</Text>
    </TouchableOpacity>
    <Button 
        onPress={()=>props.navigation.navigate("image")}
         title="Go to ImageScreen"
    />
    
    
    </View>
    )
}

const styles=StyleSheet.create({

    text:{
        fontSize:30,
        flex:1
    },
    button:{
        backgroundColor:'lightgrey',
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

