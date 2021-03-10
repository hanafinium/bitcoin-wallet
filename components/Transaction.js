import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Transaction({ info }) {
  return (
    <View style={styles.transaction}>
      <View style={styles.transactionData}>
        <View style={styles.transactionColumn}>
          <Text style={{ fontSize: 16 }}>{info.date}</Text>
          <Text style={{ fontSize: 16, color: "#067507" }}>
            {info.amount} BTC
          </Text>
        </View>
        <View style={styles.transactionColumn}>
          <Text style={{ fontSize: 16 }}>{info.transaction_no}</Text>
          <Text style={{ fontSize: 16, color: "#9DA09D" }}>{info.type}</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  transaction: {
    borderBottomWidth: 1,
    borderBottomColor: "#E2E3E7",
    marginTop: 5,
  },
  transactionData: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
  },
  transactionColumn: {
    alignItems: "flex-start",
    fontSize: 20,
  },
});

export default Transaction;
