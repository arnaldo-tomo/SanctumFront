import axios from 'axios';
import Login from './../src/Login';
import Register from './../src/Register';
import Home from './../src/Home';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Sair = ({ navigation }: { navigation: any }) => {
    AsyncStorage.removeItem('id');
    AsyncStorage.removeItem('token');
    AsyncStorage.removeItem('name');
    AsyncStorage.removeItem('email');
    AsyncStorage.removeItem('user');
    navigation.navigate('Login')
}

export { Login, Register, Home, Sair };
