import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function CompanyDashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Company Dashboard</Text>

      <Text style={styles.subtitle}>Manage your company operations</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Employees</Text>

        <Text>Manage cleaners and staff</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Bookings</Text>

        <Text>Manage customer requests</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Reports</Text>

        <Text>Business analytics</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8fafc",
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
  },

  subtitle: {
    marginVertical: 15,
    color: "#64748b",
  },

  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
  },
});
