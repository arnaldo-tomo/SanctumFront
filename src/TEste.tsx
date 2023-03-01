
import { HStack, NativeBaseProvider, Button } from 'native-base';
import React from 'react';
import { Master } from '../services/controller';
const { controller } = Master()
const TEste = () => {

    return (
        <NativeBaseProvider>
            <HStack>
                <Button onPress={Controller}>Onclick</Button>
            </HStack>
        </NativeBaseProvider>
    )
}

export default TEste;