import React from  'react'
import {StyleSheet, Text, View } from 'react-native'

export default function Sandbox() {
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>one</Text>
            <Text style={styles.boxTwo}>two</Text>
            <Text style={styles.boxThree}>three</Text>
            <Text style={styles.boxFour}>four</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //flex:1,
        flexDirection : 'row',
        justifyContent:'space-around',
        alignItems : 'center',
        paddingTop:40,
        backgroundColor: '#ddd'
    },
    boxOne:{
        backgroundColor : 'violet',
        flex:5,
        paddingTop: 10
    },
    boxTwo:{
        backgroundColor : 'gold',
        flex:1,
        paddingTop: 20
        },
    boxThree:{
        backgroundColor : 'coral',
        flex:1,
        paddingTop: 30
    },
    boxFour:{
        backgroundColor : 'skyblue',
        flex:1,
        paddingTop: 40
    }
});