import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from'react-native'
 
const ColorCounter=({color,onIncrease,onDecrease})=>{
    return(
        <View>
         
            <Text style={styles.text}>{color}</Text>

            <TouchableOpacity
                style={styles.buttons}
               onPress={()=>{
                   onIncrease()
               }}>
                <Text style={styles.btext}>{`Increase ${color}`}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
               onPress={()=>{
                   onDecrease()
               }}>
                <Text style={styles.btext}>{`Decrease ${color}`}</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles=StyleSheet.create({
    button:{
        backgroundColor:'steelblue',
        height:50,
        width:200,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        margin:5,
        marginTop:10,
        borderBottomLeftRadius:80,
        borderBottomRightRadius:80,
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
    },
    buttons:{
        backgroundColor:'steelblue',
        height:50,
        width:200,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        margin:5,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
        borderTopLeftRadius:80,
        borderTopRightRadius:80,
    },
    text:{
        fontSize:20,
        fontWeight:"bold",
        fontStyle:"italic",
        fontFamily:"times new roman"
        
    },
    btext:{
        fontSize:18,
        fontWeight:"bold"
        
    }
    
    
    })
    

export default ColorCounter;