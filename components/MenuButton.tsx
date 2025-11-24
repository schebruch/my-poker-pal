import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface MenuButtonProps {
    title: string;
    onPress: () => void;
    color?: string;
    textcolor?: string;
}

export default function MenuButton({ title, onPress, color = '#1d3557'}: MenuButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.text]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '80%',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});