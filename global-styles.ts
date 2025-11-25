import { StyleSheet } from "react-native";
import { Colors } from "./constants/Colors";
export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.background,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    marginBottom: 30,
  },
  textInput: {
    width: "100%",
    backgroundColor: Colors.textInputBackground,
    color: Colors.text,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    marginBottom: 20,
  },
  label: {
    color: Colors.text,
    fontSize: 18,
    marginBottom: 12,
  },
  buttonGroup: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 20,
    justifyContent: "space-between",
    // paddingHorizontal: 20,
  },
  error: {
    color: Colors.error,
    marginBottom: 20,
  },
});
