import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './../src/Login';
import Home from '../src/Home';
import Register from '../src/Register';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { authService, Sair } from '../services/authService';
const Stack = createStackNavigator();
const Stacks = () => {
    const { Sair } = authService()
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false, }} />
                <Stack.Screen name="Home" component={Home} options={{
                    headerLeft: null, title: 'Home', headerRight: () => (
                        <TouchableOpacity onPress={Sair} style={{ marginRight: 15 }} >
                            <Ionicons name='power' size={24} />
                        </TouchableOpacity>)

                }} />
                <Stack.Screen name="Register" component={Register} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Stacks;
