
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from '../screens/Products';
import Cart from '../screens/Cart'
import MyCart from '../redux/MyCart';
const Stack= createNativeStackNavigator();
const RootNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator    >
         <Stack.Screen
          name='Products'
          component={Products}
        //   options={{headerShown:'false'}}
         />
         {/* <Stack.Screen
         name='Cart'
         component={Cart}
        //  options={{headerShown:'false'}}
         /> */}
           <Stack.Screen
         name='MyCart'
         component={MyCart}
        //  options={{headerShown:'false'}}
         />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigation;