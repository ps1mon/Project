import * as React from 'react'
import {View, StyleSheet, Text} from 'react-native'

export const More = () => {
  return(
    <View style={styles.main}>
      <Text style={styles.text}>More</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  main:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    fontSize:17
  }
})