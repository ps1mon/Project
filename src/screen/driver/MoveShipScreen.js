import * as React from 'react'
import {View, 
        Text, 
        StyleSheet, 
        Dimensions,
        TouchableOpacity} from 'react-native' 
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'

export const MoveShipScreen = () => {
  const [isPressed, setIsPressed] = React.useState('')
  const pressed = () => {
    return(
      <View style={styles.main}>
        <View style={{flexDirection:'row'}}> 
          <TouchableOpacity style={styles.touch}>
            <Text style={styles.touchtext}>Из Якутска</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.touch2}
            onPress={() => {
              setIsPressed(null)
            }}
          >
            <Text style={styles.touchtext2}>Из Нижнего Бестяха</Text>
          </TouchableOpacity>
        </View>
        <MapView 
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
          latitude: 62.0738900,
          longitude: 129.7330600,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        >

        </MapView>
      </View>
    )
  }
  const notpressed = () => {
    return(
      <View style={styles.main}>
        <View style={{flexDirection:'row'}}> 
          <TouchableOpacity 
            style={styles.touch2}
            onPress={()=>{setIsPressed('')}}
          >
            <Text style={styles.touchtext2}>Из Якутска</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touch}>
            <Text style={styles.touchtext}>Из Нижнего Бестяха</Text>
          </TouchableOpacity>
        </View>
        <MapView 
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
          latitude: 62.0738900,
          longitude: 129.7330600,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        >

        </MapView>
      </View>
    )
    
  }
  return(
    isPressed===''?pressed():notpressed()
  )
  
}

const styles=StyleSheet.create({
  main:{
    flex:1,
    alignItems:'center'
  },
  text:{
    fontSize:17,
    padding:5
  },
  map:{
    width:Dimensions.get('window').width,
    height:'90%'
  },
  touch:{
    justifyContent:'center',
    borderColor:'#479ED8',
    borderWidth:1,
    borderRadius:5,
    marginVertical:5,
    width:'45%',
    backgroundColor:'#479ED8',
    alignItems:'center'
  },
  touch2:{
    justifyContent:'center',
    borderColor:'#479ED8',
    borderWidth:1,
    borderRadius:5,
    marginVertical:5,
    width:'45%',
    backgroundColor:'#fff',
    alignItems:'center'
  },
  touchtext:{
    color:'#fff',
    fontSize:17,
    padding:3
  },
  touchtext2:{
    color:'#479ED8',
    fontSize:17,
    padding:3
  }
})
