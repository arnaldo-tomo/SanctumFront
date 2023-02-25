import { NativeBaseProvider, Center, Box, Spinner, Heading, VStack, FormControl, Input, Alert, Collapse, Link, Button, Text, HStack, IconButton } from 'native-base';
import React, { useState } from 'react';
import { Formik } from 'formik';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Spinne } from '../services/authService';

export default function Login({ navigation }: { navigation: any }) {
    const formulario = {
        email: '',
        password: '',
    }
    const [show, setShow] = React.useState(false);
    const [sms, setSMS] = useState();
    return (
        <NativeBaseProvider>
            <Center flex={1} w="100%" bgColor={'white'}>
                <Box safeArea p="2" w="100%" maxW="290">
                    <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
                        color: "warmGray.50"
                    }}>
                        Welcome
                    </Heading>
                    <Heading mt="2" _dark={{
                        color: "warmGray.200"
                    }} color="coolGray.600" fontWeight="medium" size="xs">
                        Sign in to continue!
                    </Heading>

                    <Box w="100%" paddingTop={4} alignItems="center">
                        <Collapse isOpen={show}>
                            <Alert maxW="400" status="error">
                                <VStack space={1} flexShrink={1} w="100%">
                                    <HStack flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
                                        <HStack flexShrink={1} space={2} alignItems="center">
                                            <Alert.Icon />
                                            <Text fontSize="md" fontWeight="medium" _dark={{
                                                color: "coolGray.800"
                                            }}>
                                                Credenciais inválidas!
                                            </Text>
                                        </HStack>

                                    </HStack>
                                    <Box pl="6" _dark={{
                                        _text: {
                                            color: "coolGray.600"
                                        }
                                    }}>
                                        {sms ? <Text>{sms}</Text> : null}
                                    </Box>
                                </VStack>
                            </Alert>
                        </Collapse>
                    </Box>


                    <Formik
                        initialValues={formulario} onSubmit={values =>
                            axios.post("http://localhost:8000/api/logiiin", values)
                                .then((response) => response.data)
                                .then((data) => {
                                    if (data.token) {
                                        AsyncStorage.setItem('id', data.user.id);
                                        AsyncStorage.setItem('name', data.user.name);
                                        AsyncStorage.setItem('email', data.user.email);
                                        AsyncStorage.setItem('token', data.token);
                                        navigation.navigate('Home');
                                    }
                                })
                                .catch((error) => {
                                    setShow(true);
                                    setSMS(error.message);
                                }
                                )
                        }
                    >
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <VStack space={3} mt="5">

                                <FormControl>
                                    <FormControl.Label>Email</FormControl.Label>
                                    <Input onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        value={values.email} type="email" borderRadius={6} />
                                </FormControl>

                                <FormControl>
                                    <FormControl.Label>Password</FormControl.Label>
                                    <Input onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        value={values.password} type="password" />
                                    <Link _text={{ fontSize: "xs", fontWeight: "500", color: "indigo.500" }} alignSelf="flex-end" mt="1">
                                        Forget Password?
                                    </Link>
                                </FormControl>

                                <Button onPress={handleSubmit} mt="2" colorScheme="indigo">  Sign in </Button>

                                <TouchableOpacity onPress={() => navigation.navigate('Register')}  >
                                    <HStack mt="6" justifyContent="center">
                                        <Text fontSize="sm" color="coolGray.600" _dark={{
                                            color: "warmGray.200"
                                        }}>
                                            I'm a new user.{"Register"}
                                        </Text>
                                        <Link _text={{
                                            color: "indigo.500",
                                            fontWeight: "medium",
                                            fontSize: "sm"
                                        }} >
                                            Sign Up
                                        </Link>
                                    </HStack>
                                </TouchableOpacity>
                            </VStack>
                        )}
                    </Formik>
                </Box>
            </Center>
        </NativeBaseProvider >
    )
}
