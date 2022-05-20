import React from "react";
import {View, Text, StyleSheet, TextInput, Button} from "react-native"
import { useState } from "react";

export const AddNotes = ({clickIvent}) => {

    const [value, setValue] = useState('')

    const onClick = () => {
        if (value.trim()) {
            clickIvent(value)
            setValue('')
        }

    }

    return (
        <View style={styles.block}>
            <TextInput style={styles.input} placeholder="Enter here your note" onChangeText={text => setValue(text)} value={value}></TextInput>
            <Button title="ADD" onPress={onClick}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        marginTop: 10
    },
    input: {
        width: "90%",
        borderColor: "black",
        borderWidth: 1,
        padding: 5,
        autoCapitalize: 'sentences'
    },
})