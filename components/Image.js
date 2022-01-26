import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Imagee = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.ImageStyle} source={require("../assets/Babu.png")} />
    </View>
  );
};

export default Imagee;

const styles = StyleSheet.create({
  container: {},
  ImageStyle: {
    // height: 331,

    resizeMode: "contain",
    // alignSelf: "center",
    width: "92%",
    marginLeft: 15,
    bottom: 25,
  },
});
