import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'

export default function Base() {

    const [numBinario, setNumBinario] = useState("")
    const [numOctal, setNumOctal] = useState("")
    const [numDecimal, setNumDecimal] = useState("")
    const [numHexadecimal, setNumHexadecimal] = useState("")

    const binario = (num) => {
        setNumDecimal(Number(num).toString(10));
        setNumHexadecimal(Number(num).toString(16));
        setNumOctal(Number(num).toString(8));
    }
    const octal = (num) => {
        setNumDecimal(Number(num).toString(10));
        setNumHexadecimal(Number(num).toString(16));
        setNumBinario(Number(num).toString(2));
    }
    const deciaml = (num) => {
        setNumBinario(Number(num).toString(2));
        setNumHexadecimal(Number(num).toString(16));
        setNumOctal(Number(num).toString(8));
    }
    const hexadecimal = (num) => {
        setNumDecimal(Number(num).toString(10));
        setNumBinario(Number(num).toString(2));
        setNumOctal(Number(num).toString(8));
    }

    return (
        <View>
            <Text>Binário</Text>
            <TextInput onChangeText={(num) => binario(num)} defaultValue={numBinario} />
            <Text>Octal</Text>
            <TextInput onChangeText={(num) => octal(num)} defaultValue={numOctal} />
            <Text>Decimal</Text>
            <TextInput onChangeText={(num) => deciaml(num)} defaultValue={numDecimal} />
            <Text>Hexadecimal</Text>
            <TextInput onChangeText={(num) => hexadecimal(num)} defaultValue={numHexadecimal} />
        </View>
    )
}