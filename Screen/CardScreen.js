import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CardScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Congrats! You bought a Game</Text>
    </View>
  );
};

export default CardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1F2029",
  },
  text: {
    color: "#7669D2",
    fontSize: 60,
    fontWeight: "900",
    textAlign: "center",
  },
});
