import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Rating = () => {
  return (
    <View style={{ bottom: 80, width: "100%", paddingHorizontal: 20 }}>
      <Text style={styles.headText}>Ratings and Reviews</Text>
      <View style={styles.ratingsBackground}>
        <View style={styles.TextContainer}>
          <View style={styles.counts}>
            <Text style={styles.cou}>409</Text>
            <Text style={styles.cou}>4,0</Text>
          </View>
          <View style={styles.vertical}></View>
          <View style={styles.horizon}></View>
          <View style={styles.ReviewStar}>
            <View style={{ width: "48.5%" }}>
              <Text
                style={{
                  color: "white",
                  fontSize: 17,
                  fontWeight: "700",
                  alignSelf: "center",
                  fontFamily: "Regular",
                  left: 5,
                }}
              >
                Reviews
              </Text>
            </View>
            <View
              style={{
                width: "48.5%",
                position: "absolute",
                right: 0,
              }}
            >
              <Image
                style={{ alignSelf: "center", left: 5 }}
                source={require("../assets/zvezda.png")}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  headText: {
    color: "white",
    fontSize: 18,
    marginTop: 15,
    fontFamily: "Regular",
  },
  ratingsBackground: {
    backgroundColor: "#2A2D3A",
    width: "100%",
    height: 130,
    borderRadius: 16,
    marginTop: 15,
    alignSelf: "center",
  },
  TextContainer: { flexDirection: "column" },
  cou: {
    color: "#7669D2",
    fontSize: 20,
    fontFamily: "Bold",
  },
  counts: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  ReviewStar: {
    flexDirection: "row",
    // justifyContent: "space-around",
    marginTop: 50,
  },
  vertical: {
    backgroundColor: "#414557",
    height: 30,
    width: 2,
    alignSelf: "center",
    position: "absolute",
    marginTop: 20,
  },
  horizon: {
    backgroundColor: "#414557",
    height: 2,
    width: 335,
    position: "absolute",
    alignSelf: "center",
    marginTop: 70,
  },
});
