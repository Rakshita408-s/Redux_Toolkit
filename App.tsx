import { Text,View } from 'react-native'
import React from 'react'
import RootNavigation from './src/navigation'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import Main from './src/screens/Main'
const App = () => {
  return (
    
    <Provider  store={store}>
      
      <Main/>
      
    </Provider>

   
  )
}

export default App