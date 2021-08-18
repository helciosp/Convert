import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import Base from './src/components/Base'

export default function App() {
  return (
    <View style={{flex: 1}}>
      <Base />
    </View>
  );
}
