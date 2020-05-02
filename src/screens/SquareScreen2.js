import React,{useState} from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from'react-native'
import ColorCounter from'../components/ColorCounter';
 
const COLOR_INCREMENT=25;
const SquareScreen=()=>{
    const [red,setRed]=useState(0);
    const [blue,setBlue]=useState(0);
    const [green,setGreen]=useState(0);

    const setColor=(color,change)=>{
        switch(color){
            case'red':
            if(color==='red') {
                if(red+change>255||red+change<0){
                    return;
                }
                else{
                    setRed(red+change);
                }
            }
            case'green':
            if(color==='green') {
                if(green+change>255||green+change<0){
                    return;
                }
                else{
                    setGreen(green+change);
                }
            }
            case'blue':
            if(color==='blue') {
                if(blue+change>255||blue+change<0){
                    return;
                }
                else{
                    setBlue(blue+change);
                }
            }
            default:
                return;
        }
    }

    return(
        <View style={{flex:1}}>
            <ScrollView>
                <ColorCounter
                    // onIncrease={()=>{
                    //     if(red+COLOR_INCREMENT>255){
                    //         return;
                    //     }
                  //  else{
                    //     setRed(red+COLOR_INCREMENT)
                    //     color="Red"
                    //  }
                    // }
                    // onDecrease={()=>{
                    // if(red+COLOR_DECREMENT<0){
                    //     return;
                    // }
                    // else{
                    //     setRed(red+COLOR_DECREMENT)
                    //     color="Red"
                    // }}
             onIncrease={()=>setColor('red',COLOR_INCREMENT)} 
               onDecrease={()=>setColor('red',-1*COLOR_INCREMENT)} 
               color="Red"
            />
           <ColorCounter 
             onIncrease={()=>setColor('blue',COLOR_INCREMENT)} 
             onDecrease={()=>setColor('blue',-1*COLOR_INCREMENT)} 
             color="Blue"
           />
           <ColorCounter 
               onIncrease={()=>setColor('green',COLOR_INCREMENT)} 
               onDecrease={()=>setColor('green',-1*COLOR_INCREMENT)} 
               color="Green"
           />   
            <Text style={{
                  fontSize:20,
                  fontWeight:"bold",
                 fontStyle:"italic",
                 textAlign:"center",
                 marginTop:20,
                fontFamily:"times new roman"
                }}>
                Square of Color Is Here
            </Text>
           <View 
              style={{
                  height:150,
                  width:150,
                  margin:20,
                  alignSelf:"center",
                  backgroundColor:`rgb(${red},${green},${blue})`
                  }}>
            </View>
           </ScrollView>
        </View>
    )
}

const style=StyleSheet.create({
    
   
    
})

export default SquareScreen;