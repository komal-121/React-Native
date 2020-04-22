import React from 'react'
import{Text,StyleSheet,View } from'react-native'

const ComponentScreen=()=>{
    const name="Komal";
    const greeting=<Text>Have a good day</Text>
    return(
    <View>
    <Text style={styles.textStyles}>hello{name}</Text>
    {greeting}
    </View>
    );
};

const styles=StyleSheet.create({

    textStyle:{
        fontSize:30,
        color:"red"
    },
    
    textStyles:{
        fontSize:20,
        color:"blue"
    }
})

export default ComponentScreen;

