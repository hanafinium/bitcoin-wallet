import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Settings from "./Settings";
import SettingsLang from "./SettingsLang";
import SupportPage from "./SupportPage";

function SettingsScreen() {
  const SettingsStack = createStackNavigator();
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Settings"
        component={Settings}
        options={{ headerTitleStyle: { alignSelf: "center" } }}
      />
      <SettingsStack.Screen name="Language" component={SettingsLang} />
      <SettingsStack.Screen name="Support" component={SupportPage} />
    </SettingsStack.Navigator>
  );
}

export default SettingsScreen;
