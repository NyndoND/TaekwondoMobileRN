import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground } from 'react-native';
import Logo from '../../assets/logoAcademia.png';

type Props = {
    children: ReactNode;
}

export function BackGround({ children }: Props) {
    return (

        <LinearGradient
            style={{ flex: 1 }}
            colors={['#DADADA', '#686868']}
        >
            <ImageBackground source={Logo} resizeMode='center' style={{ flex: 1, justifyContent: 'center'}}>
                {children}
            </ImageBackground>
        </LinearGradient>
    )
}