import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CardScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Congrats! You Bought The Game</Text>
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
    fontSize: 70,
    fontWeight: "900",
    textAlign: "center",
    lineHeight: 220,
    marginHorizontal: 18,
  },
});
