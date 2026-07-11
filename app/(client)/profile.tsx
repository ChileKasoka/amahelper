import React from "react";
import {
    Alert,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import { useAuth } from "@/context/AuthContext";
import { Ionicons } from "@expo/vector-icons";

export default function Profile() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Logout",
        style: "destructive",
        onPress: logout,
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {/* Header */}

        <Text style={styles.title}>Profile</Text>

        {/* Profile Card */}

        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {user?.firstName?.charAt(0)}
              {user?.lastName?.charAt(0)}
            </Text>
          </View>

          <Text style={styles.name}>
            {user?.firstName} {user?.lastName}
          </Text>

          <Text style={styles.role}>{user?.userType || "Client Account"}</Text>
        </View>

        {/* Personal Information */}

        <View style={styles.infoCard}>
          <Text style={styles.sectionTitle}>Personal Information</Text>

          <View style={styles.row}>
            <Ionicons name="mail-outline" size={22} color="#2563eb" />

            <View>
              <Text style={styles.label}>Email</Text>

              <Text style={styles.value}>{user?.email || "Not provided"}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <Ionicons name="call-outline" size={22} color="#2563eb" />

            <View>
              <Text style={styles.label}>Phone</Text>

              <Text style={styles.value}>{user?.phone || "Not provided"}</Text>
            </View>
          </View>
        </View>

        {/* Account Settings */}

        <View style={styles.infoCard}>
          <Text style={styles.sectionTitle}>Account</Text>

          <TouchableOpacity style={styles.option}>
            <Ionicons name="settings-outline" size={22} color="#64748b" />

            <Text style={styles.optionText}>Settings</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <Ionicons name="help-circle-outline" size={22} color="#64748b" />

            <Text style={styles.optionText}>Help & Support</Text>
          </TouchableOpacity>
        </View>

        {/* Logout */}

        <TouchableOpacity onPress={handleLogout} style={styles.logout}>
          <Ionicons name="log-out-outline" size={22} color="#fff" />

          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },

  container: {
    padding: 20,
    paddingBottom: 120, // space above tab bar
  },

  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#0f172a",
    marginBottom: 20,
  },

  profileCard: {
    backgroundColor: "#ffffff",
    borderRadius: 22,
    padding: 25,
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },

    elevation: 4,
  },

  avatar: {
    width: 95,
    height: 95,
    borderRadius: 50,
    backgroundColor: "#2563eb",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },

  avatarText: {
    color: "#fff",
    fontSize: 34,
    fontWeight: "800",
  },

  name: {
    fontSize: 22,
    fontWeight: "700",
    color: "#0f172a",
  },

  role: {
    marginTop: 6,
    color: "#64748b",
    fontSize: 14,
  },

  infoCard: {
    backgroundColor: "#fff",
    marginTop: 20,
    padding: 20,
    borderRadius: 18,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: 15,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    marginBottom: 18,
  },

  label: {
    color: "#64748b",
    fontSize: 13,
  },

  value: {
    marginTop: 3,
    fontSize: 16,
    fontWeight: "600",
    color: "#0f172a",
  },

  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    gap: 15,
  },

  optionText: {
    fontSize: 16,
    color: "#334155",
  },

  logout: {
    marginTop: 25,
    backgroundColor: "#dc2626",
    padding: 16,
    borderRadius: 15,

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },

  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
