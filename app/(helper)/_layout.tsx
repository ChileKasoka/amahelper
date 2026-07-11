import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function HelperLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        // Active icon/text
        tabBarActiveTintColor: "#16a34a",

        // Inactive
        tabBarInactiveTintColor: "#64748b",

        // Tab styling
        tabBarStyle: {
          backgroundColor: "#ffffff",
          height: 75,

          // Android safe spacing
          paddingBottom: 10,
          paddingTop: 8,

          borderTopWidth: 0,

          elevation: 10,

          shadowColor: "#000",
          shadowOpacity: 0.08,
          shadowRadius: 10,
          shadowOffset: {
            width: 0,
            height: -3,
          },
        },

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >
      {/* Dashboard */}

      <Tabs.Screen
        name="index"
        options={{
          title: "Home",

          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />

      {/* Available Jobs */}

      <Tabs.Screen
        name="jobs"
        options={{
          title: "Jobs",

          tabBarIcon: ({ color, size }) => (
            <Ionicons name="briefcase-outline" size={size} color={color} />
          ),
        }}
      />

      {/* Schedule */}

      <Tabs.Screen
        name="calendar"
        options={{
          title: "Schedule",

          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" size={size} color={color} />
          ),
        }}
      />

      {/* Earnings */}

      <Tabs.Screen
        name="earnings"
        options={{
          title: "Earnings",

          tabBarIcon: ({ color, size }) => (
            <Ionicons name="wallet-outline" size={size} color={color} />
          ),
        }}
      />

      {/* Profile */}

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",

          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
