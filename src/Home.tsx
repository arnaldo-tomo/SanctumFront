import { Box, NativeBaseProvider } from 'native-base';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { getUserInfo } from '../services/authService';

function Home() {

    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const fetchUserInfo = async () => {
            const user = await getUserInfo();
            setUserInfo(user);
        }

        fetchUserInfo();
    }, []);
    return (
        <NativeBaseProvider>
            <Box>{userInfo?.name}</Box>
        </NativeBaseProvider>
    )
}
export default Home;