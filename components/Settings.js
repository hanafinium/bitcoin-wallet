import React, { useState } from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";

function Settings({ navigation }) {
  const [language, setLanguage] = useState("English");
  return (
    <>
      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontSize: 20, margin: 5 }}>Set Language</Text>
        <TouchableHighlight
          onPress={() => navigation.navigate("Language")}
          underlayColor="#DFE0DE"
        >
          <View>
            <Text style={styles.menuButton}>{language}</Text>
          </View>
        </TouchableHighlight>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontSize: 20, margin: 5 }}>Support</Text>
        <TouchableHighlight
          onPress={() => navigation.navigate("Support")}
          underlayColor="#DFE0DE"
        >
          <View>
            <Text style={styles.menuButton}>Contact Us</Text>
          </View>
        </TouchableHighlight>
      </View>
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
export default Settings;
