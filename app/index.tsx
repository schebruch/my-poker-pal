import MenuButton from '@/components/MenuButton';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { GlobalStyles } from '../global-styles';

export default function LoginScreen() {
  const router = useRouter();


  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={GlobalStyles.container}>
          <Text style={GlobalStyles.title}>Sign up / Login</Text>

          {/* Input Group */}
          <View style={GlobalStyles.buttonGroup}>
            <TextInput
              style={GlobalStyles.textInput}
              placeholder="Email"
              placeholderTextColor="#ccc"
            />
            <TextInput
              style={GlobalStyles.textInput}
              placeholder="Password"
              placeholderTextColor="#ccc"
              secureTextEntry
            />
          </View>

          {/* Button Group */}
          <View style={GlobalStyles.buttonGroup}>
            <MenuButton
              title="Log In"
              onPress={() => router.push('/home')}
              color="#e63946"
            />

            <MenuButton
              title="Create Account"
              onPress={() => router.push('/home')}
              color="#1d3557"
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}