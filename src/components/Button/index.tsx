import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity, View, Text, TouchableOpacityProps } from 'react-native';
import { styles } from './styles';

type Props = TouchableOpacityProps & {
    text: string;
    color: string;
}

export function Button( {text, color, ...rest}: Props) {
    return (
            <TouchableOpacity 
            style={[styles.container, {borderColor: color}]} 
            {...rest}>
                <Text style={{color: color, fontWeight:'bold', fontSize: 25}}>
                    {text}
                </Text>
            </TouchableOpacity>
    )
}