import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import { app, base } from '../styles';

export default function Base() {

    const [numBinario, setNumBinario] = useState("")
    const [numOctal, setNumOctal] = useState("")
    const [numDecimal, setNumDecimal] = useState("")
    const [numHexadecimal, setNumHexadecimal] = useState("")

    const binario = (num) => {
        let newNum = parseInt(num, 2)
        setNumDecimal(newNum.toString(10));
        setNumHexadecimal(newNum.toString(16));
        setNumOctal(newNum.toString(8));
    }
    const octal = (num) => {
        let newNum = parseInt(num, 8)
        setNumDecimal(newNum.toString(10));
        setNumHexadecimal(newNum.toString(16));
        setNumBinario(newNum.toString(2));
    }
    const decimal = (num) => {
        let newNum = parseInt(num)
        setNumBinario(newNum.toString(2));
        setNumHexadecimal(newNum.toString(16));
        setNumOctal(newNum.toString(8));
    }
    const hexadecimal = (num) => {
        let newNum = parseInt(num, 16);
        setNumDecimal(newNum.toString());
        setNumBinario(newNum.toString(2));
        setNumOctal(newNum.toString(8));
    }

    return (
        <View style={app.conteiner}>     
            <View style={base.session}>
                <Text style={base.textBase}>Binário</Text>
                <TextInput keyboardType='decimal-pad' style={base.inputBase} onChangeText={(num) => binario(num)} defaultValue={numBinario} />
            </View>
            <View style={base.session}>
                <Text style={base.textBase}>Octal</Text>
                <TextInput keyboardType='decimal-pad' style={base.inputBase} onChangeText={(num) => octal(num)} defaultValue={numOctal} />
            </View>
            <View style={base.session}>
                <Text style={base.textBase}>Decimal</Text>
                <TextInput keyboardType='decimal-pad' style={base.inputBase} onChangeText={(num) => decimal(num)} defaultValue={numDecimal} />
            </View>
            <View style={base.session}>
                <Text style={base.textBase}>Hexadecimal</Text>
                <TextInput style={base.inputBase} onChangeText={(num) => hexadecimal(num)} defaultValue={numHexadecimal} />
            </View>   
        </View>
        
    )
}