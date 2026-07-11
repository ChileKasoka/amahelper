import { StyleSheet, Text, View } from "react-native";

export default function HelperDashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subtitle}>Helper Dashboard</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Today's Jobs</Text>
        <Text>0 Assigned</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Upcoming Bookings</Text>
        <Text>0 Upcoming</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Current Balance</Text>
        <Text>K0.00</Text>
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
    fontWeight: "bold",
  },
  subtitle: {
    color: "#64748b",
    marginBottom: 25,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 18,
    marginBottom: 15,
    elevation: 2,
  },
  cardTitle: {
    fontWeight: "700",
    marginBottom: 5,
  },
});
