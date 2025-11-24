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
        <View style={styles.container}>
          <Text style={styles.title}>New Poker Session</Text>

          <Text style={styles.label}>Enter your buy-in:</Text>
          <TextInput
            style={styles.input}
            value={buyInAmount}
            onChangeText={setBuyInAmount}
            placeholder="0"
            placeholderTextColor="#ccc"
            keyboardType="numeric"
            returnKeyType="done"
          />
          <Text style={styles.label}>Enter your casino</Text>
          <TextInput
            style={styles.input}
            value={casino}
            onChangeText={setCasino}
            placeholder="Enter Casino Here"
            placeholderTextColor="#ccc"
            returnKeyType="done"
          />

          {/* Small Blind / Big Blind Row */}
          <View style={styles.row}>
            <View style={{ flex: 1, marginRight: 10 }}>
              <Text style={styles.label}>Small Blind:</Text>
              <TextInput
                style={styles.input}
                value={smallBlind}
                onChangeText={setSmallBlind}
                placeholder="0"
                placeholderTextColor="#ccc"
                keyboardType="numeric"
              />
            </View>
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={styles.label}>Big Blind:</Text>
              <TextInput
                style={styles.input}
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
          {formError ? <Text style={styles.error}>{formError}</Text> : null}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b0b0b",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    marginBottom: 30,
  },
  label: {
    color: "white",
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    width: "100%", // each half input fills its flex container
    backgroundColor: "#1a1a1a",
    color: "white",
    fontSize: 18,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 20,
  },
  error: {
    color: "#e63946",
    marginBottom: 20,
  },
});
