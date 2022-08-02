import { StyleSheet, Text, View } from "react-native";

import React from "react";

const ExcerciseDetailScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>ExcersiceDetailScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ExcerciseDetailScreen;
