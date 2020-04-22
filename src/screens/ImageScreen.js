import React from'react'
import {View,StyleSheet,Text,Image}from 'react-native'
import ImageDetail from '../components/ImageDetail'

const ImageScreen=()=>{
    return(
        <View>
            <ImageDetail title="Cat"/>            
            <ImageDetail title="Dog"/>
            <ImageDetail title="Rabbit"/>
            <ImageDetail title="Panda"/>

        </View>

        )
}

const styles=StyleSheet.create({
    textStyles:{
        fontSize:30,
        color:"red"
    },
});


export default ImageScreen;