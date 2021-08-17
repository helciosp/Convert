import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'

export default function Base() {

    const [numBinario, setNumBinario] = useState("")
    const [numOctal, setNumOctal] = useState("")
    const [numDecimal, setNumDecimal] = useState("")
    const [numDecimalInt, setNumDecimalInt] = useState(0)
    const [numHexadecimal, setNumHexadecimal] = useState("")

    const binario = (num) => {
    }
    const octal = (num) => {
    }
    const deciaml = (num) => {
    }
    const hexadecimal = (num) => {
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