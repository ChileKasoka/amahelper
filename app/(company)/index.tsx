import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function CompanyDashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Company Dashboard</Text>

      <Text style={styles.subtitle}>Manage your cleaning business</Text>

      <View style={styles.card}>
        <Ionicons name="people-outline" size={30} color="#7c3aed" />

        <Text style={styles.number}>25</Text>

        <Text>Active Helpers</Text>
      </View>

      <View style={styles.card}>
        <Ionicons name="calendar-outline" size={30} color="#7c3aed" />

        <Text style={styles.number}>12</Text>

        <Text>Today's Appointments</Text>
      </View>

      <View style={styles.card}>
        <Ionicons name="cash-outline" size={30} color="#7c3aed" />

        <Text style={styles.number}>K5,400</Text>

        <Text>Monthly Revenue</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "800",
  },

  subtitle: {
    color: "#64748b",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 20,
    marginBottom: 15,
  },

  number: {
    fontSize: 28,
    fontWeight: "800",
    marginVertical: 5,
  },
});
