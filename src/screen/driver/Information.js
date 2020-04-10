import * as React from 'react'
import {View, 
        StyleSheet, 
        Text, 
        FlatList} from 'react-native'

import {inf} from '../../data/data'
import {InformationComponent} from '../../component/InformationComponent'

export const Information = () => {
  return(
    <View style={styles.main}>
      <FlatList
                    style={styles.flatlist}
                    data={inf}
                    renderItem={({ item }) => <InformationComponent data={item} />}
                    keyExtractor={item => item.id}
                  />
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