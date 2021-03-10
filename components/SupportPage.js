import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import Settings from "./Settings";

function SupportPage({ navigation }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <View style={{ paddingHorizontal: 5, paddingVertical: 10 }}>
      <View>
        <Text style={{ fontSize: 16, marginVertical: 5 }}>Email Address</Text>
        <TextInput
          style={{
            height: 40,
            backgroundColor: "#fff",
            borderWidth: 1,
            borderColor: "#E2E3E7",
            borderRadius: 5,
          }}
          onChangeText={(mail) => setEmail(mail)}
        />
      </View>
      <View>
        <Text style={{ fontSize: 16, marginVertical: 5 }}>Message</Text>
        <TextInput
          style={{
            height: 100,
            textAlignVertical: "top",
            backgroundColor: "#fff",
            borderWidth: 1,
            borderColor: "#E2E3E7",
            borderRadius: 5,
          }}
          multiline={true}
          maxLength={300}
          onChangeText={(msg) => setMessage(msg)}
        />
      </View>
      <View style={{ marginTop: 25 }}>
        <Button
          title="Send"
          onPress={() => {
            Alert.alert(
              "Confirmation",
              "Thanks for getting in touch. We will get back to you as soon as possible",
              [{ text: "Ok", onPress: () => navigation.navigate(Settings) }]
            );
          }}
        />
      </View>
    </View>
  );
}

export default SupportPage;
