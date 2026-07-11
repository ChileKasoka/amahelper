import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function CompanyLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarActiveTintColor: "#7c3aed",

        tabBarInactiveTintColor: "#64748b",

        tabBarStyle: {
          backgroundColor: "#ffffff",
          height: 70,
          paddingBottom: 8,
          paddingTop: 8,
          borderTopWidth: 0,
          elevation: 10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",

          tabBarIcon: ({ color, size }) => (
            <Ionicons name="grid-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="appointments"
        options={{
          title: "Appointments",

          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="helpers"
        options={{
          title: "Helpers",

          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="jobs"
        options={{
          title: "Jobs",

          tabBarIcon: ({ color, size }) => (
            <Ionicons name="briefcase-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="more"
        options={{
          title: "More",

          tabBarIcon: ({ color, size }) => (
            <Ionicons name="menu-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
