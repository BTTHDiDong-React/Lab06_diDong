import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import ComponentList from './src/components/ComponentList';
import ComponentItem from './src/components/ComponentItem';

export default function App() {
  return (
    <ComponentList />
  );
}
