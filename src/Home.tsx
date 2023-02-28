import {
    NativeBaseProvider, Spacer, Heading, Box, Button, StatusBar, HStack, Image, Avatar, AspectRatio,
    IconButton, Center, VStack, FlatList, ScrollView, Icon, Fab
} from 'native-base';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authService } from '../services/authService';
import { Dimensions, TouchableOpacity, View, Text, ImageBackground, ImageBackgroundComponent, ImageBackgroundBase } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { MaterialIcons, Ionicons, Entypo, AntDesign } from '@expo/vector-icons';

function Home() {
    const daysOfWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const currentDate = new Date();
    const currentDayOfWeek = daysOfWeek[currentDate.getDay()];
    const currentDae = new Date().toLocaleDateString();

    const [usuario, setnome] = useState();
    const dia = currentDayOfWeek;
    const semana = currentDae;

    useEffect(() => {
        const fetchUserData = async () => {
            const info = await AsyncStorage.getItem('name');
            setnome(info);
        };
        fetchUserData();
    }, [])

    const data = [{
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        fullName: "Aafreen Khan",
        timeStamp: "12:47 PM",
        recentText: "Good Day!",
        avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }, {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        fullName: "Aafreen Khan",
        timeStamp: "12:47 PM",
        recentText: "Good Day!",
        avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }, {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        fullName: "Sujitha Mathur",
        timeStamp: "11:11 PM",
        recentText: "Cheer up, there!",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU"
    }, {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        fullName: "Anci Barroco",
        timeStamp: "6:22 PM",
        recentText: "Good Day!",
        avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg"
    }, {
        id: "68694a0f-3da1-431f-bd56-142371e29d72",
        fullName: "Aniket Kumar",
        timeStamp: "8:56 PM",
        recentText: "All the best",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU"
    }, {
        id: "28694a0f-3da1-471f-bd96-142456e29d72",
        fullName: "Kiara",
        timeStamp: "12:47 PM",
        recentText: "I will call today.",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
    }];



    return (
        <NativeBaseProvider >
            <AspectRatio w="100%" ratio={17 / 11}>
                <Image source={{ uri: require('./image/dia.jpg') }} alt="image" borderBottomRadius={4} />
            </AspectRatio>
            <Heading fontWeight={'medium'} fontSize={40} style={{ position: 'absolute', top: 158, left: 10, color: 'white' }}>{dia}</Heading>
            <Heading fontWeight={'thin'} fontSize={20} style={{ position: 'absolute', top: 200, left: 10, color: 'white' }}>{semana}</Heading>
            <Heading fontWeight={'thin'} fontSize={20} style={{ position: 'absolute', top: 20, left: 10, color: 'white' }}>{usuario}</Heading>

            <ScrollView>
                <HStack bgColor={'white'}>
                    <FlatList showsHorizontalScrollIndicator={false} shadow="2" px={2} data={data} renderItem={({ item }) =>

                        <Box pl={["0", "4"]} pr={["0", "4"]} py="2">
                            <HStack shadow={2} space={[2, 2]} justifyContent="space-between" height={50} borderRadius={4}>
                                {/* <Avatar size="30px" source={{ uri: item.avatarUrl }} paddingTop={5} /> */}
                                <Heading fontWeight={'medium'} fontSize={25} px={2} bottom={20} >{item.fullName}</Heading>
                                {/* <Heading fontWeight={'medium'} fontSize={10} px={2} bottom={20}  >{item.recentText}</Heading> */}
                                <Ionicons name='close' size={30} bottom={20} />



                            </HStack>
                        </Box>

                    } keyExtractor={item => item.id} />
                </HStack>
            </ScrollView>
            <TouchableOpacity>
                <AspectRatio w="100%" bgColor={'white'} ratio={80 / 11}>
                    <Box style={{ position: 'absolute', backgroundColor: 'white', bottom: 50, color: 'black' }}>
                        <Ionicons name='add' size={50} />

                    </Box>
                </AspectRatio>
                <Box position="absolute" bottom={4} left={50}>
                    <Heading fontWeight={'medium'} fontSize={15} >Criar Meta</Heading>
                </Box>
            </TouchableOpacity>
        </NativeBaseProvider >
    )
}
export default Home;