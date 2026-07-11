import { useAuth } from "@/context/AuthContext";
import { Ionicons } from "@expo/vector-icons";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

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
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>Company Profile</Text>

      {/* Profile Header */}
      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Ionicons name="business-outline" size={45} color="#fff" />
        </View>

        <Text style={styles.companyName}>
          {user?.firstName || "Company Admin"}
        </Text>

        <Text style={styles.role}>Company Administrator</Text>
      </View>

      {/* Account Information */}

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Account Information</Text>

        <View style={styles.row}>
          <Ionicons name="mail-outline" size={22} color="#7c3aed" />

          <View>
            <Text style={styles.label}>Email</Text>

            <Text style={styles.value}>{user?.email || "Not provided"}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <Ionicons name="call-outline" size={22} color="#7c3aed" />

          <View>
            <Text style={styles.label}>Phone</Text>

            <Text style={styles.value}>{user?.phone || "Not provided"}</Text>
          </View>
        </View>
      </View>

      {/* Company Management */}

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Company Management</Text>

        <TouchableOpacity style={styles.option}>
          <Ionicons name="settings-outline" size={22} color="#64748b" />

          <Text style={styles.optionText}>Company Settings</Text>

          <Ionicons name="chevron-forward" size={20} color="#94a3b8" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Ionicons name="help-circle-outline" size={22} color="#64748b" />

          <Text style={styles.optionText}>Help & Support</Text>

          <Ionicons name="chevron-forward" size={20} color="#94a3b8" />
        </TouchableOpacity>
      </View>

      {/* Logout */}

      <TouchableOpacity style={styles.logout} onPress={handleLogout}>
        <Ionicons name="log-out-outline" size={22} color="#fff" />

        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      {/* Extra spacing for Android navigation + floating tabs */}

      <View style={{ height: 120 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#0f172a",
    marginBottom: 20,
  },

  profileCard: {
    backgroundColor: "#fff",
    borderRadius: 22,
    padding: 25,
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#7c3aed",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },

  companyName: {
    fontSize: 22,
    fontWeight: "800",
    color: "#0f172a",
  },

  role: {
    color: "#64748b",
    marginTop: 5,
  },

  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 18,
    marginTop: 20,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "800",
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
    fontSize: 13,
    color: "#64748b",
  },

  value: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0f172a",
    marginTop: 3,
  },

  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    gap: 15,
  },

  optionText: {
    flex: 1,
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
    fontWeight: "800",
  },
});
