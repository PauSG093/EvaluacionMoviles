import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { ClassifiedScreen } from './src/screens/ClassifiedScreen';
import { Position1Screen } from './src/screens/Position1Screen';
import { Position2Screen } from './src/screens/Position2Screen';
import { Position3Screen } from './src/screens/Position3Screen';
import { Position4Screen } from './src/screens/Position4Screen';
import { Position5Screen } from './src/screens/Position5Screen';
import { Position6Screen } from './src/screens/Position6Screen';
import { Position7Screen } from './src/screens/Position7Screen';
import { Position8Screen } from './src/screens/Position8Screen';
import { Position9Screen } from './src/screens/Position9Screen';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
    {/*
    <ClassifiedScreen/>
    <Position1Screen/>
    <Position2Screen/>
    <Position3Screen/>
    <Position4Screen/>
    <Position5Screen/>
    <Position6Screen/>
    <Position7Screen/>
    <Position8Screen/>*/}
    <Position9Screen/>
    
    
    </SafeAreaView>
  )
}

export default App;