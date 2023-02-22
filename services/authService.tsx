import axios from 'axios';
import Login from './../src/Login';
import Register from './../src/Register';
import Home from './../src/Home';

const getUserInfo = async () => {
    const response = await axios.get('http://127.0.0.1:8000//api/user');
    return response.data;
}

export { Login, Register, Home, getUserInfo };
