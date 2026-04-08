import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
      {/* Avatar + Name */}
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={40} color="#fff" />
        </View>
        <Text style={styles.name}>Stunna</Text>
        <Text style={styles.email}>stunna@email.com</Text>
      </View>

      {/* Menu Items */}
      <View style={styles.menu}>
        <MenuItem icon="person-outline" label="Edit Profile" />
        <MenuItem icon="location-outline" label="My Addresses" />
        <MenuItem icon="card-outline" label="Payment Methods" />
        <MenuItem icon="notifications-outline" label="Notifications" />
        <MenuItem icon="help-circle-outline" label="Help & Support" />
      </View>

      {/* Logout */}
      <TouchableOpacity style={styles.logout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

function MenuItem({ icon, label }: { icon: any; label: string }) {
  return (
    <TouchableOpacity style={styles.menuItem}>
      <Ionicons name={icon} size={22} color="#0f172a" />
      <Text style={styles.menuText}>{label}</Text>
      <Ionicons name="chevron-forward" size={20} color="#94a3b8" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  header: {
    alignItems: "center",
    padding: 30,
    backgroundColor: "#0f172a",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#1e293b",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  name: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  email: {
    color: "#cbd5f5",
  },
  menu: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: "space-between",
  },
  menuText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  logout: {
    marginTop: 30,
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#ef4444",
  },
  logoutText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
});
