import React from "react"; 
import { Text, View } from "react-native";
import {  header  } from '../styles';

export default function Header () {
    return (
        <View style={header.conteiner}>
            <Text style={header.text}>Convert</Text>  
        </View>
    )
}