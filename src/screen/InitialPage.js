import * as React from 'react'
import {View, TouchableOpacity, Text, StyleSheet, Image, Dimensions} from 'react-native'

const widthScreen = Dimensions.get('window').width
const heightScreen = Dimensions.get('window').height

export const InitialPage=() => {
    return(
        <View style={styles.main}>
                <Image style={styles.image}
                    source={
                              require('../../assets/ferry.png')
                            }
                />
                <TouchableOpacity style={styles.button1}>
                    <Text style={styles.text}>
                        Пользователь
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2}>
                    <Text style={styles.text}>
                        Капитан
                    </Text>
                </TouchableOpacity>
        </View>)
}

const styles= StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff'
        },
    image: {
        width: '60%',
        resizeMode: 'contain',
        marginTop: '25%'
    },
    button1: {
        backgroundColor: '#FFA745',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        width: '65%',
        marginTop: '18%'
    },
    button2: {
        backgroundColor: '#479ED8',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        width: '65%',
        marginTop: 15
    },
    text: {
        color: '#fff',
        paddingVertical: 12,
        fontSize: 21,
        fontFamily: 'lato'
    }
})