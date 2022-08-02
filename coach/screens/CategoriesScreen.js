import { Button, StyleSheet, Text, View } from "react-native";

import React from "react";

const CategoriesScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Welcome User</Text>
      <Button
        style={styles.button}
        title="Ir a mi rutina"
        onPress={() => {
          navigation.navigate("Rutine");
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
  },
});

export default CategoriesScreen;
