import React from "react";
import { Text, TouchableHighlight, StyleSheet } from "react-native";

function SettingsLang({ navigation }) {
  const LANG = ["English", "Spanish"];
  return (
    <>
      {LANG.map((lng, index) => {
        return (
          <TouchableHighlight
            key={index}
            onPress={() => {
              navigation.navigate("Settings");
            }}
          >
            <Text style={styles.menuButton}>{lng}</Text>
          </TouchableHighlight>
        );
      })}
    </>
  );
}

const styles = StyleSheet.create({
  menuButton: {
    fontSize: 18,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#dddddd",
    backgroundColor: "#fff",
    padding: 10,
  },
});
export default SettingsLang;
