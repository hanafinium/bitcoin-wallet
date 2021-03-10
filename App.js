import React from "react";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./components/HomeScreen";
import SettingsScreen from "./components/SettingsScreen";

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <>
      <StatusBar style="light" backgroundColor="#00217A" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color }) => {
              let icon;
              if (route.name === "Home") {
                icon = "md-home";
              } else if (route.name === "Settings") {
                icon = "md-settings";
              }
              return <Ionicons name={icon} color={color} size={28} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "#00217A",
            inactiveTintColor: "gray",
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
