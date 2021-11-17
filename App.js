import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './navigation/tabnavigation';

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
}