import React from'react'
import {View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet} from 'react-native'

const ImageDetail=(props)=>{
    return(
        <View>
            
        {/* <TouchableOpacity
            onPress={()=>props.click()}
        > */}
            
            <Image 
             style={styles.img}
            source={props.imageSource}/>
            <Text style={styles.textStyle}>{props.title}</Text>
            <Text style={styles.textStyles}>Image Score:{props.score}</Text>
        {/* </TouchableOpacity> */}
              
        </View>
    )
}
const styles=StyleSheet.create({

    textStyle:{
        fontSize:30,
        color:"blue"
    },
    textStyles:{
        fontSize:20,
        color:"red",
        marginBottom:20
    },
    img:{
        height:180,
        width:350
    }

})



export default ImageDetail;