import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import Base from './src/components/Base';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <StatusBar translucent= {false} backgroundColor='#1c1c1c' style='light' />
      <Base />
    </View>
  );
}
