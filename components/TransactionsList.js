import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import trxs from "../data";
import Transaction from "./Transaction";

function TransactionsList() {
  return (
    <ScrollView style={styles.trxs}>
      {trxs.map((trx, index) => {
        return <Transaction info={trx} key={index} />;
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  trxs: {
    backgroundColor: "#ececec",
  },
});

export default TransactionsList;
