import { NativeBaseProvider, Box, Text, Button } from 'native-base';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from './Login';
import { Sair } from '../services/authService';


function Home({ navigation }: { navigation: any }) {
    const [data, setData] = useState();

    useEffect(() => {

        const fetchUserData = async () => {
            const Data = await AsyncStorage.getItem('name');
            setData(Data);
        };
        fetchUserData();
    }, []);





    return (
        <NativeBaseProvider>

            <Text>Carregando informações do usuário.2..{data}</Text>
            <Button onPress={() => Sair}>LogoutScreen</Button>
        </NativeBaseProvider>
    )
}
export default Home;