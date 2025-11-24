import MenuButton from "@/components/MenuButton";
import { useRouter } from "expo-router";
import React, { useContext, useState } from "react";
import { SessionContext } from "./context/SessionContext";

import { StyleSheet, Text, View } from "react-native";

export default function RenderCurrentSession() {
  const router = useRouter();
  const { buyIns } = useContext(SessionContext);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Current Session</Text>
      <View style={styles.buttonGroup}>
        <MenuButton title="Rebuy" onPress={() => router.push("/rebuy")} />

        <MenuButton
          title="Submit Hand"
          onPress={() => console.log("TODO SUBMIT HAND")}
        />
        <MenuButton
          title="Submit Tilt Notes"
          onPress={() => console.log("TODO SUBMIT TILT NOTES")}
        />
        <MenuButton
          title="Edit Buy Ins"
          onPress={() => console.log("TODO SUBMIT TILT NOTES")}
        />
      </View>
    </View>
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
  buttonGroup: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
  },
});
