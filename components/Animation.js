import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";
// import ReText from "./ReText";

const { width } = Dimensions.get("screen");

export default function Cart() {
  const buttonWidthValue = useSharedValue(width - 40);
  const cardIconScaleValue = useSharedValue(1);
  const cardIconTranslateXValue = useSharedValue(0);
  const cardIconOpacity = useSharedValue(1);
  const checkIconTranslateValue = useSharedValue(-130);
  const textValue = useSharedValue(1);
  const overlayOpacityValue = useSharedValue(1);
  const firstTextOpacityValue = useSharedValue(1);
  const secondTextOpacityValue = useSharedValue(0);
  const thirdTextOpacityValue = useSharedValue(0);

  const buttonStyle = useAnimatedStyle(() => {
    return {
      width: buttonWidthValue.value,
    };
  });

  const cardStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: cardIconTranslateXValue.value },
        { scale: cardIconScaleValue.value },
      ],
      opacity: cardIconOpacity.value,
    };
  });
  const checkStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: checkIconTranslateValue.value }],
    };
  });
  const overlayStyle = useAnimatedStyle(() => {
    return {
      opacity: overlayOpacityValue.value,
    };
  });

  const firstTextStyle = useAnimatedStyle(() => {
    return {
      opacity: firstTextOpacityValue.value,
    };
  });
  const secondTextStyle = useAnimatedStyle(() => {
    return {
      opacity: secondTextOpacityValue.value,
    };
  });
  const thirdTextStyle = useAnimatedStyle(() => {
    return {
      opacity: thirdTextOpacityValue.value,
    };
  });

  const formattedPrice = useDerivedValue(() => {
    if (textValue.value === 1) {
      return `1-tap buy`;
    } else if (textValue.value === 2) {
      return `Yaay!`;
    } else if (textValue.value === 3) {
      return `View the Receipt`;
    }
  }, [textValue.value]);

  return (
    <View style={styles.cont}>
      <TouchableOpacity
        onPress={() => {
          firstTextOpacityValue.value = withDelay(
            100,
            withTiming(
              0,
              { duration: 100 }
              // , () => {
              //   secondTextOpacityValue.value = withDelay(
              //     100,
              //     withTiming(1, { duration: 100 })
              //   );
              // }
            )
          );
          secondTextOpacityValue.value = withDelay(
            100,
            withTiming(1, { duration: 100 }, () => {
              secondTextOpacityValue.value = withDelay(
                1000,
                withTiming(0, { duration: 100 })
              );
            })
          );
          thirdTextOpacityValue.value = withDelay(
            1150,
            withTiming(1, { duration: 100 })
          );

          // secondTextOpacityValue.value = withSequence(withTiming(0,{duration:100}), withTiming(1, {duration:100}),withTiming(1,{duration:1100}) )
          checkIconTranslateValue.value = withSequence(
            withSpring(20, {
              damping: 15,
              mass: 0.4,
              stiffness: 100,
              overshootClamping: false,
              restDisplacementThreshold: 0.1,
              restSpeedThreshold: 8,
            }),
            withTiming(20, { duration: 500 }),
            withTiming(-140, { duration: 350 })
          );

          buttonWidthValue.value = withSequence(
            withTiming(width + 50, { duration: 400 }),
            withTiming(width + 50, { duration: 700 }),
            withTiming(width - 40, { duration: 300 })
          );
          textValue.value = withSequence(
            withTiming(1, { duration: 100 }),
            withTiming(2, { duration: 100 }),
            withTiming(3, { duration: 900 })
          );
          overlayOpacityValue.value = withDelay(500, withTiming(0, 10));
          cardIconOpacity.value = withDelay(
            1100,
            withTiming(0, { duration: 300 })
          );
          cardIconTranslateXValue.value = withSequence(
            withTiming(-50, { duration: 300 }),
            withTiming(-50, { duration: 400 }),
            withTiming(70, { duration: 200 })
          );
          cardIconScaleValue.value = withSequence(
            withTiming(40, { duration: 400 }),
            withTiming(40, { duration: 700 }),
            withTiming(0, { duration: 300 })
          );
        }}
        activeOpacity={1}
      >
        <Animated.View style={[styles.button, buttonStyle]}>
          <Animated.View
            style={[styles.bgOverlay, overlayStyle]}
          ></Animated.View>
          <Animated.View style={[styles.cardView, cardStyles]}>
            <Image
              source={require("../assets/8.png")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="cover"
            />
          </Animated.View>
          <Animated.View style={[styles.cardView, checkStyle]}>
            <Image
              source={require("../assets/23.png")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="cover"
            />
          </Animated.View>
          {/* <ReText
              style={{ color: "white", fontSize: 16, fontWeight: "700" }}
              text={formattedPrice}
            /> */}
          <Animated.View
            style={[
              { position: "absolute", alignSelf: "center" },
              firstTextStyle,
            ]}
          >
            <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>
              1-tap buy
            </Text>
          </Animated.View>
          <Animated.View
            style={[
              { position: "absolute", alignSelf: "center" },
              secondTextStyle,
            ]}
          >
            <Text style={{ color: "#2A2D3A", fontSize: 16, fontWeight: "700" }}>
              Yeeeey!
            </Text>
          </Animated.View>
          <Animated.View
            style={[
              { position: "absolute", alignSelf: "center" },
              thirdTextStyle,
            ]}
          >
            <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>
              View the Receipt
            </Text>
          </Animated.View>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  cardView: { height: 28, width: 28, position: "absolute", left: "30r%" },
  button: {
    height: 72,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    borderColor: "#5447B1",
    borderWidth: 1,
  },
  bgOverlay: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: "#5447B1",
  },
});
