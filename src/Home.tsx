import { NativeBaseProvider, Box, Text } from 'native-base';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { getUserInfo } from '../services/authService';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Home({ route }) {
    const [user, setUser] = useState();
    const [auth_name] = route.params;

    useEffect(() => {

        const fetchUser = async () => {
            try {
                const token = await AsyncStorage.getItem('token');
                const response = await fetch('http://127.0.0.1:8000/api/user', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const data = await response.json();
                setUser(data);

            } catch (error) {
                console.error(error);
            }
        };

        fetchUser();

    }, []);
    return (
        <NativeBaseProvider>
            <Box>{user ? (
                <>
                    <Text>Bem-vindo, {user.name}!</Text>
                    <Text>Email: {user.email}</Text>
                </>
            ) : (
                <Text>Carregando informações do usuário...</Text>
            )}</Box>
        </NativeBaseProvider>
    )
}
export default Home;