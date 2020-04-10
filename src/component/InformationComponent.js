import * as React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export const InformationComponent = ({data}) => {
  return(
    <View style={styles.main}>
      <Text style={styles.text}>{data.date}</Text>
      <Text style={styles.text}>{data.data}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  main:{
    justifyContent:'center'
  },
  text:{
    fontSize:17
  }
})