import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text className='text-blue-700 text-2xl'>RootLayout</Text>
      <StatusBar style="auto"/>
      <Link href='home' style={{color: 'blue'}}>Click her to go to home</Link>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
})