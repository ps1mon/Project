import * as React from 'react'
import {View,
        Text,
        StyleSheet,
        TouchableOpacity,
        ScrollView,
        Dimensions
        } from 'react-native'

const widthWindow = Dimensions.get('window').width 
const heightWindow = Dimensions.get('window').height

export const TimeTableDriver = ({data}) => {
    return(
        <View style={styles.submain}>
          <View style={styles.mainTextView}>
            <View style={styles.textView}>
              <Text style={styles.text}>Отплытие</Text>
              <Text style={styles.text}>Причал</Text>
              <Text style={styles.text}>Паром</Text>
            </View>
            <View style={styles.textView}>
              <Text style={styles.text}>{data.date1}</Text>
              <Text style={styles.text}>{data.dock1}</Text>
              <Text style={styles.text}>{data.parom}</Text>  
            </View>
          </View>
        </View>
    )
}

const styles=StyleSheet.create({
    submain:{
      flexDirection:'row',
      borderBottomWidth:1,
      borderBottomColor:'grey'
    },
    textView:{
      flexDirection:'row',
      justifyContent:'space-around' 
    },
    text:{
      justifyContent:'center', 
      alignItems:'center',
      padding:3, 
    },
    mainTextView:{
      flex:1, 
      width:widthWindow+10 
    }
})