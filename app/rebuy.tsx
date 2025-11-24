import { useRouter } from "expo-router";
import React, { useContext } from "react";
import { SessionContext } from "./context/SessionContext";
import MenuButton from "@/components/MenuButton";

import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Rebuy() {
  const router = useRouter();
  const { addBuyIn, buyIns } = useContext(SessionContext);
  const [rebuyAmount, setRebuyAmount] = React.useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Buy-Ins This Session</Text>

      {/* Header row */}
      <View style={styles.headerRow}>
        <Text style={styles.header}>Amount</Text>
        <Text style={styles.header}>Casino</Text>
        <Text style={styles.header}>Date</Text>
      </View>

      {/* Card list */}
      {buyIns.map((buyIn, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.tableText}>${buyIn.amount}</Text>
          <Text style={styles.tableText}>{buyIn.casino}</Text>
          <Text style={styles.tableText}>
            {buyIn.timestamp.toLocaleString(undefined, {
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: true, 
            })}
          </Text>
        </View>
      ))}

      {/* Rebuy Button */}
      <Text style={styles.label}>Enter Rebuy Amount</Text>
      <TextInput
        style={styles.input}
        value={rebuyAmount}
        onChangeText={setRebuyAmount}
        placeholder="0"
        placeholderTextColor="#ccc"
        keyboardType="numeric"
        returnKeyType="done"
      />
      <MenuButton
        title="Rebuy"
        onPress={() => {
          addBuyIn({
            amount: Number(rebuyAmount),
            casino: buyIns[0]["casino"] || "Unknown",
            timestamp: new Date(),
          });
          setRebuyAmount("");
        }}
        color="#e63946"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b0b0b",
    padding: 20,
  },
  label: {
    color: "white",
    fontSize: 18,
    marginBottom: 8,
    textAlign: "center",
    marginTop: 20,
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

  headerTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },

  headerRow: {
    flexDirection: "row",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#444",
    marginBottom: 10,
  },

  header: {
    flex: 1,
    color: "#aaa",
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },

  card: {
    width: "100%",
    backgroundColor: "#1a1a1a",
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#333",
    flexDirection: "row",
  },

  tableText: {
    flex: 1,
    color: "#ccc",
    fontSize: 18,
    fontWeight: "bold",
  },
});
