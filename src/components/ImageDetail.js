import React from'react'
import {View,Text,Image,TouchableOpacity}from 'react-native'

const ImageDetail=(props)=>{
    return(
        <TouchableOpacity
            onPress={()=>props.click()}
        >
            <Text>{props.title}</Text>

        </TouchableOpacity>
              
    
    )
}




export default ImageDetail;