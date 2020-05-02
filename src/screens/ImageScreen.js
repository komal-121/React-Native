import React from'react'
import {View,
    StyleSheet,
    ScrollView,
    Text,
    Image}from 'react-native'
import ImageDetail from '../components/ImageDetail'

const ImageScreen=()=>{
    return(
        <View>
        <ScrollView>
            <ImageDetail title="Cat"
             imageSource={require('../../assets/cat.jpg')}
             score={9}
             />            
            
            <ImageDetail title="Dog" 
            imageSource={require('../../assets/dog.jpg')}
            score={10}
            />

            <ImageDetail title="Rabbit"
             imageSource={require('../../assets/rabbit.jpg')}
             score={8}
             />

            <ImageDetail title="Panda" 
            imageSource={require('../../assets/panda.jpg')}
            score={9}
            />

        </ScrollView>
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