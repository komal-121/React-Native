import { createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import TextScreen from './src/screens/TextScreen';
import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import { View,Text } from 'react-native';



//  const navigator = createStackNavigator(
//   {
//       Home:HomeScreen,
//        Components:ComponentScreen,
//        List:ListScreen
// },
// {
//   initialRouteName:'Home',
//   defaultNavigationoptions:{
//     title:'App'
//   }
// }
// );

// export default createStackNavigator(navigator);
const Stack = createStackNavigator();
 export default class App extends React.Component{
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator>
         <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome To Home Screen'}}
        />
        <Stack.Screen name="Compo" component={ComponentScreen} />
         <Stack.Screen name="List" component={ListScreen} />
         <Stack.Screen name="Image"component={ImageScreen}/>
         <Stack.Screen name="Count"component={CounterScreen}/>
         <Stack.Screen name="Color"component={ColorScreen}/>
         <Stack.Screen name="Square"component={SquareScreen}/>
         <Stack.Screen name="Text"component={TextScreen}/>
      </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

