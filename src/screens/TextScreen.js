import React, { useState } from'react'
import {View,
    StyleSheet,
    TextInput,
    Text,
    TouchableOpacity
    }from 'react-native'

const TextScreen=()=>{
    const[fname,setfName]=useState('');
    const[lname,setlName]=useState('');
   
    const[password,setPassword]=useState('');
    return(
       
        <View style={styles.container}>
            <Text style={styles.text}>SignUp</Text>
    
          
            <TextInput
                style={styles.input}
                placeholder={"First Name"}
                placeholderTextColor={"#fff"}
                value={fname}
                onChangeText={newValue=>setfName(newValue)}>
            </TextInput>
         {/* <Text style={{fontSize:20}}>My name is: {name}</Text> */}

         
            <TextInput
                style={styles.input}
                placeholder={"Last Name"}
                placeholderTextColor={"#fff"}
                value={lname}
                onChangeText={newValue=>setlName(newValue)}>
            </TextInput>

            
            <TextInput
                style={styles.input}
                placeholder={"Email"}
                placeholderTextColor={"#fff"}
                keyboardType={"email-address"}>
                
            </TextInput>
            
                    <TextInput
                        style={styles.input}
                        placeholder={"Password"}
                        placeholderTextColor={"#fff"}
                        value={password}
                        onChangeText={newValue=>setPassword(newValue)}>
                     </TextInput> 
                    {password.length<4? <Text style={{marginLeft:30,color:"white"}}>Password must be 4 characters</Text>:null}
               

                    <TouchableOpacity 
                        style={styles.btn}>
                       <Text style={styles.buttontext}>Create Account</Text> 
                   </TouchableOpacity> 
        </View>
    )
}



const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#98DB34",
        flexDirection: 'column'
    
    },
    buttontext:{
        color:"#98DB34",
        fontSize:20,
        alignItems:'center',
        margin:10,
        fontWeight:'bold'

    },
    
    text: {
        fontSize: 23,
        fontWeight: 'bold',
        color: 'white',
        marginBottom:10,
        marginTop:10,
        alignSelf:'center'
    },
    input: {
        borderWidth: 1,
        color: 'white',
        borderColor: "#98DB34",
        borderBottomColor: 'white',
        marginBottom:20


    },
    btn:{
        height:50,
        width:230,
        backgroundColor:'white',
        alignSelf:'center',
        alignItems:'center',
        borderTopLeftRadius:100,
        borderTopRightRadius:10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:100,
        margin:20
    }

})

export default TextScreen;