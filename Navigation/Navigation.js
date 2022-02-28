import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import HomeScreen from "../Screen/HomeScreen";
import CardScreen from "../Screen/CardScreen";

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Card" component={CardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
