import { NativeBaseProvider, Center, Box, Heading, VStack, FormControl, Input, Link, Button, Text, HStack } from 'native-base';
import { Formik } from 'formik';
import React from 'react';
import { Axios } from 'axios';
export default function Register() {
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
                    <Formik
                        initialValues={{ email: '' }}
                        onSubmit={values => console.log(values)}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <VStack space={3} mt="5">
                                <FormControl>
                                    <FormControl.Label>Email</FormControl.Label>
                                    <Input onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        value={values.email} type="password" />
                                </FormControl>
                                <FormControl>
                                    <FormControl.Label>Password</FormControl.Label>
                                    <Input onChangeText={handleChange('Password')}
                                        onBlur={handleBlur('Password')}
                                        value={values.Password} type="password" />
                                </FormControl>
                                <FormControl>
                                    <FormControl.Label>Confirm Password</FormControl.Label>
                                    <Input onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        value={values.email} type="password" />
                                </FormControl>
                                <Button onPress={handleSubmit} mt="2" colorScheme="indigo">
                                    Sign up
                                </Button>
                            </VStack>
                        )}
                    </Formik>

                </Box>
            </Center>
        </NativeBaseProvider>
    )
}
