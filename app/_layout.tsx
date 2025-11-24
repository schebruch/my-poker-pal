import { Stack } from 'expo-router';
import React from 'react';
import { SessionProvider } from './context/SessionContext';

export default function Layout() {
  return (
    <SessionProvider>
      <Stack
        screenOptions={{
          headerShown: true,           // show header on all screens
          headerTitle: 'MyPokerPal', // common title
          headerStyle: {
            backgroundColor: '#0b0b0b', // dark background
          },
          headerTintColor: 'white',     // text color
          headerTitleAlign: 'center',   // center the title
        }}
      />
    </SessionProvider>
  );
}