import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const NameAndDescription = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bothTexts}>
        <Text style={styles.NameText}>Gothic 3</Text>
        <View style={styles.TextContainer}>
          <Image source={require("../assets/calendar-1.png")} />
          <Text style={styles.dateText}>15 Mar, 2001</Text>
        </View>
      </View>
      <Text style={styles.descriptionContainer}>
        Gothic is a fantasy-themed action role-playing video game for Microsoft
        Windows developed by the German company Piranha Bytes.
      </Text>
    </View>
  );
};

export default NameAndDescription;

const styles = StyleSheet.create({
  container: { bottom: 80 },
  bothTexts: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  NameText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 20,
  },
  TextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  descriptionContainer: {
    color: "#A7ABBD",
    fontSize: 15,
    fontWeight: "500",
    marginHorizontal: 20,
    marginTop: 10,
    lineHeight: 22,
    fontFamily: "Regular",
  },
  dateText: {
    color: "white",
    marginHorizontal: 20,
    fontWeight: "600",
    fontSize: 16,
    fontFamily: "Regular",
  },
});
