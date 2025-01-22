import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from './Themed';
import Colors from '@/constants/Colors';

export default function RoundButton({ text } : {text:string}) {
    return (
        <View><Text>Text: {text}</Text></View>
    )
}