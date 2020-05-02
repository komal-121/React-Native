import React,{useState, useReducer} from'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity


}from 'react-native'

const reducer=(state,action)=>{
    //state==={count:number}
    //action==={type:'increment'||'decrement' amount:1}

    switch(action.type){
        case'increment':
            return{...state,count:state.count+action.amount}
        case'decrement':
            return{...state,count:state.count-action.amount}
        default:
            return state;    
    }
}

const CounterScreen=()=>{
    // const [counter,setCounter]=useState(0);
    const[state,runReducer]=useReducer(reducer,{count:0})
    return(
        <View>
            <TouchableOpacity
                style={styles.button}

                onPress={()=>{
                  //don't use this in react  counter++;
                    runReducer({type:'increment',amount:1})
                }}>
                <Text style={{fontWeight:"bold"}}> Click here to Increase Count </Text>
            </TouchableOpacity>

            <TouchableOpacity
                 style={styles.button}
                 onPress={()=>{
                   // counter--;
                   runReducer({type:'decrement',amount:1})
                 }}>
                <Text style={{fontWeight:"bold"}}> Click here to Decrease Count </Text>
            </TouchableOpacity>

                <Text style={styles.textstyle} >Current Count:{state.count}</Text>

        </View>
    )

}

const styles=StyleSheet.create({
    textstyle:{
        fontSize:30,
        alignSelf:'center'
    },
    button:{
        backgroundColor:'green',
        height:50,
        width:250,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        margin:20,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:30,
        borderTopLeftRadius:30,
        borderTopRightRadius:10,
        
    }
})

export default CounterScreen