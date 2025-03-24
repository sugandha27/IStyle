import React, { JSX } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  useColorScheme
} from 'react-native'

function App() : JSX.Element{
  const isDarkMode = useColorScheme() === 'dark'
  return (
    <SafeAreaView>
    <View style = {styles.container}>
      <Text style = {isDarkMode ? styles.whiteText:styles.darkText}>Hello World !</Text>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center'
  },
  whiteText:{
    color: '#FFFFFF'
  },
  darkText: {
    color: '#000000'
  }
})

export default App