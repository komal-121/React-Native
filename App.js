import { createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
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
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="compo" component={ComponentScreen} />
         <Stack.Screen name="list" component={ListScreen} />
         <Stack.Screen name="image"component={ImageScreen}/>
         <Stack.Screen name="count"component={CounterScreen}/>
         <Stack.Screen name="color"component={ColorScreen}/>
         <Stack.Screen name="square"component={SquareScreen}/>
      </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

