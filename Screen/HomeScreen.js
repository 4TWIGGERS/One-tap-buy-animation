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
    <View style={{ flex: 1, position: "relative" }}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Imagee />
        <NameAndDescription />
        <Rating />
      </ScrollView>
      <View
        style={{
          position: "absolute",
          bottom: 50,
          alignSelf: "center",
          width: "100%",
        }}
      >
        <Cart navigation={props.navigation} />
      </View>
      <StatusBar style="light" hidden />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F2029",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
