import axios from 'axios';
import React, { useState, useEffect } from 'react';

import { HStack, Spinner, Heading } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
const authService = () => {
    const Spinne = () => {
        return (
            <HStack space={2} justifyContent="center">
                <Spinner accessibilityLabel="Loading posts" />
                <Heading color="primary.500" fontSize="md">
                    Loading
                </Heading>
            </HStack>
        )
    }

    const Sair = () => {
        const token = AsyncStorage.getItem('token');
        axios.post('http://localhost:8000/api/logout', null, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        // Limpa os dados de autenticação armazenados no AsyncStorage
        AsyncStorage.removeItem('id');
        AsyncStorage.removeItem('token');
        AsyncStorage.removeItem('name');
        AsyncStorage.removeItem('email');
        AsyncStorage.removeItem('user');
        // Redireciona o usuário para a tela de login
        navigation.navigate('Login');
    }


    const Sessao = () => {
        const [usuario, setData] = useState();
        return usuario;

        useEffect(() => {
            const fetchUserData = async () => {
                const f = await AsyncStorage.getItem('name');
                setData(f);
                return usuario;
            };
            fetchUserData();
        })

    }
    return {
        Spinne, Sair, Sessao
    }
}


export { authService };
