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

export default function ProfileScreen() {
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
            {user?.firstName || "Helper"} {user?.lastName || ""}
          </Text>

          <Text style={styles.role}>Cleaner / Helper</Text>
        </View>

        {/* Personal Information */}

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Personal Information</Text>

          <View style={styles.infoRow}>
            <Ionicons name="mail-outline" size={22} color="#16a34a" />

            <View>
              <Text style={styles.label}>Email</Text>

              <Text style={styles.value}>{user?.email || "Not provided"}</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="call-outline" size={22} color="#16a34a" />

            <View>
              <Text style={styles.label}>Phone</Text>

              <Text style={styles.value}>{user?.phone || "Not provided"}</Text>
            </View>
          </View>
        </View>

        {/* Helper Information */}

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Helper Account</Text>

          <TouchableOpacity style={styles.option}>
            <Ionicons name="briefcase-outline" size={22} color="#64748b" />

            <Text style={styles.optionText}>My Services</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <Ionicons name="calendar-outline" size={22} color="#64748b" />

            <Text style={styles.optionText}>Availability</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <Ionicons name="settings-outline" size={22} color="#64748b" />

            <Text style={styles.optionText}>Settings</Text>
          </TouchableOpacity>
        </View>

        {/* Edit Profile */}

        <TouchableOpacity style={styles.editButton}>
          <Ionicons name="create-outline" size={22} color="#fff" />

          <Text style={styles.editText}>Edit Profile</Text>
        </TouchableOpacity>

        {/* Logout */}

        <TouchableOpacity style={styles.logout} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={22} color="#dc2626" />

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
    paddingBottom: 120,
  },

  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#0f172a",
    marginBottom: 20,
  },

  profileCard: {
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 22,
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#16a34a",
    justifyContent: "center",
    alignItems: "center",
  },

  avatarText: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "800",
  },

  name: {
    marginTop: 18,
    fontSize: 23,
    fontWeight: "800",
    color: "#0f172a",
  },

  role: {
    marginTop: 6,
    color: "#64748b",
  },

  card: {
    marginTop: 20,
    backgroundColor: "#fff",
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
    marginBottom: 18,
    color: "#0f172a",
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    marginBottom: 18,
  },

  label: {
    fontSize: 13,
    color: "#64748b",
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
    gap: 15,
    paddingVertical: 14,
  },

  optionText: {
    fontSize: 16,
    color: "#334155",
  },

  editButton: {
    marginTop: 25,
    backgroundColor: "#16a34a",
    padding: 16,
    borderRadius: 15,

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },

  editText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },

  logout: {
    marginTop: 15,
    padding: 16,
    borderRadius: 15,

    borderWidth: 1,
    borderColor: "#dc2626",

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },

  logoutText: {
    color: "#dc2626",
    fontWeight: "700",
    fontSize: 16,
  },
});
