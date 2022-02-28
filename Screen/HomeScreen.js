import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Cart from "../components/Animation";
import Imagee from "../components/Image";
import NameAndDescription from "../components/NameAndDescription";
import Rating from "../components/Rating";
import { useFonts } from "expo-font";

export default function HomeScreen(props) {
  const [loaded] = useFonts({
    Bold: require("../fonts/Lato-Bold.ttf"),
    Regular: require("../fonts/Lato-Regular.ttf"),
    Black: require("../fonts/Lato-Black.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.mainContainer}>
      <StatusBar style="light" />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Imagee />
        <NameAndDescription />
        <Rating />
      </ScrollView>
      <View style={styles.CardContainer}>
        <Cart navigation={props.navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, position: "relative", backgroundColor: "#1F2029" },
  container: {
    flex: 1,
    backgroundColor: "#1F2029",
    marginTop: 40,
  },

  CardContainer: {
    position: "absolute",
    bottom: 50,
    alignSelf: "center",
    width: "100%",
  },
});
