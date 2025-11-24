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
                {activeSession ? null : <MenuButton
                    title="Begin New Session"
                    onPress={() => router.push('/new-session')}
                />}
                {activeSession ? <MenuButton
                    title="End Session"
                    color="#e63946"
                    onPress={() => console.log("TODO End Session")}
                /> : null}
                {activeSession ? <MenuButton
                    title="Current Session"
                    onPress={() => router.push('/current-session')}
                /> : null}
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