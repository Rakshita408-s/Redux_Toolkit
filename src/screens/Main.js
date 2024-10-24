
import React, { useEffect } from 'react'
import RootNavigation from '../navigation'

import shoesData from '../data'
import { useDispatch } from 'react-redux'
import { addMyProducts } from '../redux/MyProductSlice'
import { SafeAreaView } from 'react-native-safe-area-context'

const Main = () => {
    const dispatch=useDispatch();
    useEffect(()=>{
        shoesData.map(item=>{
            dispatch(addMyProducts(item));
        })
    },[]);
  return (
    <SafeAreaView style={{flex:1}}> 
   <RootNavigation/>
   </SafeAreaView>
  )
}

export default Main