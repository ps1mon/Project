import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import {TimeTable} from '../screen/driver/TimeTable'
import {MoveShipScreen} from '../screen/driver/MoveShipScreen'
import {Information} from '../screen/driver/Information'
import {More} from '../screen/driver/More'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const TimeTableFunction = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen 
        name="TimeTable" 
        component={TimeTable} 
        options={{title:'Расписание'}}
      />
    </Stack.Navigator>
  )
}
const MoveShipFunction = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen 
        name="MoveShip" 
        component={MoveShipScreen} 
        options={{title:'Движение паромов'}}
      />
    </Stack.Navigator>
  )
}

const InformationFunction = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen 
        name="Information" 
        component={Information} 
        options={{title:'Информация'}}
      />
    </Stack.Navigator>
  )
}

const MoreFunction = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen 
        name="More" 
        component={More} 
        options={{title:'Еще'}}
      />
    </Stack.Navigator>
  )
}

export const DriverNavigation = () => {
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="TimeTable" 
          component={TimeTableFunction} 
          options={{title:'Расписание'}}
        />
        <Tab.Screen 
          name="MoveShip" 
          component={MoveShipFunction} 
          options={{title:'Движение паромов'}}
        />
        <Tab.Screen 
          name="Information" 
          component={InformationFunction} 
          options={{title:'Информация'}}
        />
        <Tab.Screen 
          name="More" 
          component={MoreFunction} 
          options={{title:'Еще'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}