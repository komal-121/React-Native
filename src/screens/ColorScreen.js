import React,{useState} from 'react'
import{
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList
} from'react-native'

const ColorScreen=()=>{
    const [colors,setColor]=useState([])
    const vansh =['black','green','gray',"blue"]
    console.log(colors)
    return(
        <View style={{flex:1,backgroundColor:'#BDE87D'}}>
            <TouchableOpacity
               style={styles.button}
               onPress={()=>{
                //    alert("press ho rha hu")
                  setColor([...colors,randomRgb()])
                // setColor([randomRgb()])
                  }}
            >
                 <Text style={{fontSize:30,fontStyle:"italic",fontWeight:"bold",color:'#98DB34'}}> Add color </Text>
            </TouchableOpacity>
            

              <FlatList 
               keyExtractor={(index,item)=>index+item}
        data={colors}
            renderItem={({ item}) =>{
            
            return(
                <View style={{backgroundColor:item,height:100,width:100}}></View>
                )
            }}
            >
        </FlatList>
        
        </View>
    )

}

const randomRgb=()=>{
    const red=Math.floor(Math.random()*256);
    const green=Math.floor(Math.random()*256);
    const blue=Math.floor(Math.random()*256);
     
    return `rgb(${red},${green},${blue})`
    
}


const styles=StyleSheet.create({
button:{
    backgroundColor:'white',
    height:50,
    width:200,
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'center',
    margin:10,
    marginTop:40,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
}


})

export default ColorScreen;