# Lab06_diDong

$	npm install @react-navigation/native 


$	npx expo install react-native-screens react-native-safe-area-context


$	npm install react-native-screens react-native-safe-area-context

$	npm install @react-navigation/native-stack


    import { NavigationContainer } from '@react-navigation/native';<br/>
    import { createNativeStackNavigator } from '@react-navigation/native-stack';

    const Stack = createNativeStackNavigator();
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Layout1a} />
        <Stack.Screen name="Layout_1b" component={Layout1b} />
        <Stack.Screen name="Layout_1c" component={Layout1c} />
      </Stack.Navigator>
    </NavigationContainer>
<br/>
$	npm install --save react-native-vector-icons

	import Icon from 'react-native-vector-icons/FontAwesome'

 	<Icon name="rocket" color="#eee" size={30} />


## bài todo List: 

 <img src="./Ảnh minh họa/todoList.png" alt="Hình ảnh không tồn tại" width=300>

## bài AppFragment: 

 <img src="./Ảnh minh họa/AppFragment_serceen1.png" alt="Hình ảnh không tồn tại" width=300>
 <img src="./Ảnh minh họa/AppFragment_serceen1.png" alt="Hình ảnh không tồn tại" width=300>

