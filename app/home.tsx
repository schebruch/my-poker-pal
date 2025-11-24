import MenuButton from '@/components/MenuButton';
import { useRouter } from 'expo-router';
import React from 'react';
import { useContext } from 'react';
import { SessionContext } from './context/SessionContext';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {

    const router = useRouter();
    const { activeSession } = useContext(SessionContext);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome, Sam!</Text>
            <Text style={styles.text}>Current Bankroll: $10,000</Text>
            <View style={styles.buttonGroup}>
                <MenuButton
                    title="Begin New Session"
                    disabled={activeSession}
                    onPress={() => router.push('/new-session')}
                    color={activeSession ? '#555' : '#1d3557'}
                />
                <MenuButton
                    title="Current Session"
                    onPress={() => console.log("TODO View Current Session")}
                    disabled={!activeSession}
                    color={activeSession ? '#1d3557' : '#555'}
                />
                <MenuButton
                    title="Add Bankroll"
                    onPress={() => console.log("TODO Add Bankroll")}
                />
                <MenuButton
                    title="Analytics"
                    onPress={() => console.log("TODO Analytics")}
                />
            </View>

            <TouchableOpacity style={styles.settingsButton} onPress={() => console.log("Open Settings")}>
                <Ionicons name="settings-outline" size={35} color="white" />
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0b0b0b',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    },
    buttonGroup: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
    },
    settingsButton: {
        position: 'absolute',
        bottom: 20,
        left: 20,
    },
});