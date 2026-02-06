import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Tab = createMaterialTopTabNavigator();

export default function ForYou() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "#ffffff",
          },
          tabBarActiveTintColor: "#2563eb",
          tabBarInactiveTintColor: "#6b7280",
          tabBarIndicatorStyle: {
            backgroundColor: "#2563eb",
            height: 3,
          },
          tabBarLabelStyle: {
            fontWeight: "bold",
            fontSize: 14,
          },
        }}
      >
        <Tab.Screen name="Liked" component={Liked} />
        <Tab.Screen name="Featured" component={Featured} />
        <Tab.Screen name="Top" component={Top} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

function Liked() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Hi there from Liked</Text>
    </View>
  );
}

function Featured() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Hi there from Featured</Text>
    </View>
  );
}

function Top() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Hi there from Top</Text>
    </View>
  );
}
