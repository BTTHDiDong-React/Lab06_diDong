import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';	
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ComponentList from './src/components/ComponentList';
import Detail from './src/components/Detailitem';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <ComponentList />
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={ComponentList} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

