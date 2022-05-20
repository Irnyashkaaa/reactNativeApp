import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export const Header = (props) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>YOUR TODO</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#fff',
        fontSize: 30,
        margin: 10
    },
    navbar: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: 'black'
    }
})