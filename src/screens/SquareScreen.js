import React,{ useReducer} from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from'react-native'
import ColorCounter from'../components/ColorCounter';
 
const COLOR_INCREMENT=25;

    const reducer=(state,action)=>{
        //state==={red:number,green:number,blue:number}
        // action==={colorToChange:'red'||'green'||'blue',amount:15||-15S}

        switch(action.colorToChange){
            case'red':
                if(state.red+action.amount>255||state.red+action.amount<0)
                {
                    return state;
                }
                return{...state,red:state.red+action.amount}
            case'green':
            if(state.green+action.amount>255||state.green+action.amount<0)
                {
                    return state;
                }
                return{...state,green:state.green+action.amount}
            case'blue':
            if(state.blue+action.amount>255||state.blue+action.amount<0)
                {
                    return state;
                }
                 return{...state,blue:state.blue+action.amount}
            default:
                 return state;
        }
    }

const SquareScreen=()=>{
   const [state,runReducer]=useReducer(reducer,{red:0,green:0,blue:0})

    const {red,green,blue}=state;
    return(
        <View style={{flex:1,backgroundColor:'#ADE25D'}}>
            <ScrollView>
                <ColorCounter
                   onIncrease={()=>runReducer({colorToChange:'red',amount:COLOR_INCREMENT})} 
                   onDecrease={()=>runReducer({colorToChange:'red',amount:-1*COLOR_INCREMENT})}  
                   color="Red"
            />
           <ColorCounter 
             onIncrease={()=>runReducer({colorToChange:'blue',amount:COLOR_INCREMENT})}  
             onDecrease={()=>runReducer({colorToChange:'blue',amount:-1*COLOR_INCREMENT})} 
             color="Blue"
           />
           <ColorCounter 
               onIncrease={()=>runReducer({colorToChange:'green',amount:COLOR_INCREMENT})} 
               onDecrease={()=>runReducer({colorToChange:'green',amount:-1*COLOR_INCREMENT})} 
               color="Green"
           />   
            <Text style={{
                  fontSize:20,
                  fontWeight:"bold",
                 fontStyle:"italic",
                 textAlign:"center",
                 marginTop:20,
                 color:'#DB3477',
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