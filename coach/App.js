import { StyleSheet, Text, View } from "react-native";

import BarNavigation from "./navigation/BarNavigator";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <BarNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
