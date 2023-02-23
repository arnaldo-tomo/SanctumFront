import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

function LogoutScreen({ navigation }) {
    const [message, setMessage] = useState('');

    const handleLogout = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            const response = await axios.delete('http://localhost:8000/api/logout', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.status === 204) {
                // remove o token armazenado no AsyncStorage
                await AsyncStorage.removeItem('token');
                navigation.navigate('Login');
            }
        } catch (error) {
            setMessage('Erro ao efetuar logout');
        }
    };
}

export default LogoutScreen;