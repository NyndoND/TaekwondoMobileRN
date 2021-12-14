import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import * as ScreenOrientation from 'expo-screen-orientation';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button } from '../../components/Button';
import CountDown from 'react-native-countdown-component';
import Falta from '../../assets/falta.png';
import { BackGround } from '../../components/BackGround';

export function Home() {

    const [pontosAzul, setPontosAzul] = useState('0');
    const [pontosVerm, setPontosVerm] = useState('0');
    const [time, setTime] = useState(300);
    const [pause, setPause] = useState(false);
    const [faltasAzul, setFaltasAzul] = useState(0);
    const [faltasVerm, setFaltasVerm] = useState(0);

    function handlePointAzul(number: number) {
        const pontos = parseInt(pontosAzul) + number;
        setPontosAzul(String(pontos))
    }
    function handlePointVerm(number: number) {
        const pontos = parseInt(pontosVerm) + number;
        setPontosVerm(String(pontos))
    }

    function handleSetTime() {
        setTime(time + 60);
    }
    function handlePause() {
        setPause(false);
    }
    function handleStart() {
        setPause(true);
    }
    function handleFaltaAzul() {
        handlePointVerm(1);
        setFaltasAzul(faltasAzul + 1)
    }

    function handleFaltaVerm() {
        handlePointAzul(1);
        setFaltasVerm(faltasVerm + 1)
    }

    async function changeScreenOrientation() {
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    }

    useEffect(() => {
        changeScreenOrientation();
    }, []);

    return (
        <BackGround>
            <View style={styles.container}>
                <StatusBar style="auto" />
                <CountDown
                    until={time}
                    timeToShow={['M', 'S']}
                    onFinish={() => alert('finished')}
                    onPress={() => handleSetTime()}
                    size={25}
                    running={pause}
                    showSeparator
                    timeLabels={{ d: '', h: '', m: '', s: '' }}
                    digitStyle={{ backgroundColor: '#959595', opacity: 0.7 }}
                />
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.start} onPress={handleStart}>
                        <Text style={{ fontWeight: 'bold' }}>
                            Start
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.start} onPress={handlePause}>
                        <Text style={{ fontWeight: 'bold' }}>
                            Pause
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.names}>
                    <Text style={{ fontSize: 30, color: '#0D9EF0', fontWeight:'bold' }}>
                        Atleta1
                    </Text>
                    <Text style={{ fontSize: 30, color: '#F61818', fontWeight:'bold' }}>
                        Atleta2
                    </Text>
                </View>
                <View style={styles.pontos}>
                    <Text style={{ fontSize: 60, color: 'black', fontWeight: '800' }}>
                        {pontosAzul}
                    </Text>
                    <Text style={{ fontSize: 60, color: 'black', fontWeight: '800' }}>
                        {pontosVerm}
                    </Text>
                </View>
                <View style={styles.buttons3}>
                    <Button
                        text='3'
                        color='#0D9EF0'
                        onPress={() => handlePointAzul(3)}
                    />
                    <Button
                        text='3'
                        color='#F61818'
                        onPress={() => handlePointVerm(3)}
                    />
                </View>
                <View style={styles.buttons2}>
                    <Button
                        text='2'
                        color='#0D9EF0'
                        onPress={() => handlePointAzul(2)}
                    />
                    <Button
                        text='2'
                        color='#F61818'
                        onPress={() => handlePointVerm(2)}
                    />
                </View>
                <View style={styles.buttons1}>
                    <Button
                        text='1'
                        color='#0D9EF0'
                        onPress={() => handlePointAzul(1)}
                    />
                    <Button
                        text='1'
                        color='#F61818'
                        onPress={() => handlePointVerm(1)}
                    />
                </View>
                <View style={{ flexDirection: 'row', position: 'absolute', top: 250, width: '60%', justifyContent: 'space-between', alignItems: 'center' }}>
                    <TouchableOpacity onPress={handleFaltaAzul}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={Falta}
                                resizeMode='contain'
                                style={{ width: 50, height: 50,  borderRadius: 25  }} />
                            <Text style={{ fontWeight: 'bold', fontSize: 25, marginHorizontal: 5 }}>
                                {faltasAzul}
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleFaltaVerm}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={Falta}
                                resizeMode='contain'
                                style={{ width: 50, height: 50, borderRadius: 25 }} />
                            <Text style={{ fontWeight: 'bold', fontSize: 25, marginHorizontal: 5 }}>
                                {faltasVerm}
                            </Text>

                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </BackGround>
    )
}