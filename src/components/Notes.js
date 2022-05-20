import React, { useState } from 'react'

import { StyleSheet, Text, ScrollView, Button, View } from 'react-native'

export const Todo = ({ title }) => {

    return (
        <ScrollView style={styles.todo}>
            <View style={styles.block}>
                <Text style={styles.text}>{title}</Text>
                <Button title='x' />
            </View>

        </ScrollView>
    )


}

const styles = StyleSheet.create({
    todo: {
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 10,
        width: '95%',
        marginLeft: '2%',
    },
    text: {
        fontSize: 18,
        color: 'black',
        marginVertical: '4px',
        marginLeft: 4
    },
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
})