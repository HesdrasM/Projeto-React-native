import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Experiencia from '../screens/Experiencias';

const Stack = createNativeStackNavigator();

type StackNavigation = {
 Home: undefined;
 Experiencia: undefined;
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>

export default function StackComponent() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Experiencia' component={Experiencia}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}