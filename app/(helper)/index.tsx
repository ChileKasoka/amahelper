import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HelperDashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Helper Dashboard</Text>

      <Text style={styles.subtitle}>Manage jobs and services</Text>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>Available Jobs</Text>

        <Text>View cleaning requests near you</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>My Jobs</Text>

        <Text>Track accepted jobs</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>Earnings</Text>

        <Text>View payments and commissions</Text>
      </TouchableOpacity>
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
    marginBottom: 15,
    borderRadius: 12,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
  },
});
