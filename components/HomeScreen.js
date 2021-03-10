import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import TransactionsList from "./TransactionsList";

function HomeScreen() {
  return (
    <>
      <View style={styles.sectionContainer}>
        <Text style={{ fontSize: 24, fontWeight: "100" }}>Balance</Text>
        <Text style={styles.sectionTitle}>0.1342 BTC</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Send" color="#00217A" />
        </View>
        <View style={styles.button}>
          <Button title="Receive" color="#00217A" />
        </View>
      </View>
      <View style={styles.transactions}>
        <Text
          style={{
            fontSize: 22,
            color: "#00217A",
            marginTop: 20,
            marginBottom: 10,
          }}
        >
          Transactions
        </Text>
        <TransactionsList />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 0.5,
    marginTop: 35,
    paddingHorizontal: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: "600",
    color: "black",
  },
  buttonContainer: {
    marginHorizontal: 40,
    marginVertical: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  button: {
    width: "38%",
  },
  transactions: {
    flex: 1.5,
    marginHorizontal: 5,
  },
});
export default HomeScreen;
