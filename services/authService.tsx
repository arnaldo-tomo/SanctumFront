import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Sair() {
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


export { Sair };
