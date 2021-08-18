import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, View } from 'react-native';
import Header  from './src/components/Header';
import Base from './src/components/Base';

export default function App() {
  return (
    <ScrollView>
      <View style={{flex: 1}}>
        <StatusBar translucent= {false} backgroundColor='#1c1c1c' style='light' />
        <Header />
        <Base />
      </View>
    </ScrollView>
  );
}
