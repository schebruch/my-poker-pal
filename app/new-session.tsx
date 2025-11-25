import MenuButton from "@/components/MenuButton";
import { useRouter } from "expo-router";
import React, { useContext, useState } from "react";
import { SessionContext } from "./context/SessionContext";

import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { GlobalStyles } from "@/global-styles";

export default function NewSessionScreen() {
  const router = useRouter();
  const [buyInAmount, setBuyInAmount] = useState("");
  const [smallBlind, setSmallBlind] = useState("");
  const [bigBlind, setBigBlind] = useState("");
  const [casino, setCasino] = useState("");
  const [formError, setFormError] = useState("");
  const { startSession, addBuyIn } = useContext(SessionContext);

  const handleStartSession = () => {
    if (buyInAmount && casino && smallBlind && bigBlind) {
      console.log("Starting session with buy-in:", buyInAmount);
      setFormError("");
      startSession();
      addBuyIn({
        amount: Number(buyInAmount),
        casino: casino,
        timestamp: new Date(),
      });
      router.push("/home");
    } else {
      setFormError(
        "Please fill out all fields correctly before starting the session."
      );
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={GlobalStyles.container}>
          <Text style={GlobalStyles.title}>New Poker Session</Text>

          <Text style={GlobalStyles.label}>Enter your buy-in:</Text>
          <TextInput
            style={GlobalStyles.textInput}
            value={buyInAmount}
            onChangeText={setBuyInAmount}
            placeholder="0"
            placeholderTextColor="#ccc"
            keyboardType="numeric"
            returnKeyType="done"
          />
          <Text style={GlobalStyles.label}>Enter your casino</Text>
          <TextInput
            style={GlobalStyles.textInput}
            value={casino}
            onChangeText={setCasino}
            placeholder="Enter Casino Here"
            placeholderTextColor="#ccc"
            returnKeyType="done"
          />

          {/* Small Blind / Big Blind Row */}
          <View style={GlobalStyles.row}>
            <View style={{ flex: 1, marginRight: 5 }}>
              <Text style={GlobalStyles.label}>Small Blind:</Text>
              <TextInput
                style={[GlobalStyles.textInput, { width: "100%" }]}
                value={smallBlind}
                onChangeText={setSmallBlind}
                placeholder="0"
                placeholderTextColor="#ccc"
                keyboardType="numeric"
              />
            </View>
            <View style={{ flex: 1, marginLeft: 5 }}>
              <Text style={GlobalStyles.label}>Big Blind:</Text>
              <TextInput
                style={[GlobalStyles.textInput, { width: "100%" }]}
                value={bigBlind}
                onChangeText={setBigBlind}
                placeholder="0"
                placeholderTextColor="#ccc"
                keyboardType="numeric"
              />
            </View>
          </View>

          <MenuButton
            title="Start Session"
            onPress={handleStartSession}
            color="#e63946"
          />
          {formError ? (
            <Text style={GlobalStyles.error}>{formError}</Text>
          ) : null}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
