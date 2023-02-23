
import { NativeBaseProvider, Center, Box, Heading, VStack, FormControl, Input, Link, Button, Text, HStack } from 'native-base';
import React from 'react';
import { Formik } from 'formik';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Register({ navigation }: { navigation: any }) {


    const formulario = {
        name: '',
        email: '',
        password: '',
    }
    return (
        <NativeBaseProvider>
            <Center w="100%">
                <Box safeArea p="2" w="90%" maxW="290" py="8">
                    <Heading size="lg" color="coolGray.800" _dark={{
                        color: "warmGray.50"
                    }} fontWeight="semibold">
                        Welcome
                    </Heading>
                    <Heading mt="1" color="coolGray.600" _dark={{
                        color: "warmGray.200"
                    }} fontWeight="medium" size="xs">
                        Sign up to continue!
                    </Heading>
                    <Formik initialValues={formulario} onSubmit={values =>
                        axios.post("http://localhost:8000/api/register", values)
                            .then((response) => response.data)
                            .then((data) => {
                                if (data.token) {
                                    const { token, message } = data;
                                    // armazene o token no armazenamento local (local storage) ou async storage
                                    // Armazena o token e o nome do usuário no AsyncStorage
                                    AsyncStorage.setItem('auth_token', token);
                                    AsyncStorage.setItem('message', message);
                                    AsyncStorage.setItem('name', data.info.name);
                                    AsyncStorage.setItem('email', data.info.email);
                                    AsyncStorage.setItem('id', data.info);
                                    //objeto armazenado,
                                    AsyncStorage.setItem('user', JSON.stringify(data.info));
                                    // redirecione para a tela de Home
                                    navigation.navigate('Home');
                                }
                            })
                            .catch((error) => console.error(error))
                    }

                    >
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <VStack space={3} mt="5">
                                <FormControl>
                                    <FormControl.Label>name</FormControl.Label>
                                    <Input onChangeText={handleChange('name')}
                                        onBlur={handleBlur('name')}
                                        value={values.name} type="text" />
                                </FormControl>
                                <FormControl>
                                    <FormControl.Label>Email</FormControl.Label>
                                    <Input onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        value={values.email} type="email" />
                                </FormControl>

                                <FormControl>
                                    <FormControl.Label>Confirm Password</FormControl.Label>
                                    <Input onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        value={values.password} type="password" />
                                </FormControl>
                                <Button onPress={handleSubmit} mt="2" colorScheme="indigo">
                                    Sign up
                                </Button>
                            </VStack>
                        )}
                    </Formik>

                </Box>
            </Center>
        </NativeBaseProvider >
    )
}
