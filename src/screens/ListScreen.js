import React from 'react'
import{Text,
    StyleSheet,
    View,
    FlatList
 } from'react-native'
 import ImageDetail from '../components/ImageDetail'

const ListScreen=()=>{
    
    const friends=[
        {name:'Komal',id:'1'},
        {name:'kattapa',id:'2'},
        {name:'Laila',id:'3'},
        {name:'Pallu',id:'4'},
        {name:'Bhallu',id:'5'},
        {name:'Chutki',id:'6'},
       
       
    ];
    // const vansh=[1,1,1,1,1]
    return(
        <View style={{flex:1,backgroundColor:"crimson"}}>
             <FlatList 
               keyExtractor={(index,item)=>index+item}
        data={friends}
            renderItem={({ item}) =>{
            
            return(
             
                <Text style={styles.textStyles}>{item.name}</Text>
                //    <ImageDetail
                // title={item.name}
                // click={()=>alert(item.id)}
            //    />

            )           
         }}
            >
        </FlatList>

        </View>
    )
}

const styles=StyleSheet.create({

    textStyles:{
        fontSize:30,
        marginVertical:50,
        color:"black",
        backgroundColor:"cornsilk"
       
    }
})


export default ListScreen;

