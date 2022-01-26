import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import Imagee from "./components/Image";
import NameAndDescription from "./components/NameAndDescription";
import Rating from "./components/Rating";
export default function App() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Imagee />
      <NameAndDescription />
      <Rating />
      <StatusBar style="light" hidden />
    </ScrollView>
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
