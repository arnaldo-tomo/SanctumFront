import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './../src/Login';
import Home from '../src/Home';
import Register from '../src/Register';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { authService } from '../services/authService';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Stack = createStackNavigator();
const Stacks = () => {
    const { Sair } = authService()
    console.log('Peimro')
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false, }} />
                <Stack.Screen name="Home" component={Home} options={{
                    headerLeft: null, headerTransparent: true, headerMode: 'float', title: '', headerTintColor: 'white',

                    headerRight: () => (
                        <TouchableOpacity onPress={Sair} style={{ marginRight: 15 }} >
                            <Ionicons name='power' color={'white'} size={24} />
                        </TouchableOpacity>)

                }} />
                <Stack.Screen name="Register" component={Register} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Stacks;
