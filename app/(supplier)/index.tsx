import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SupplierDashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Supplier Dashboard</Text>

      <Text style={styles.subtitle}>Manage products and orders</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Products</Text>

        <Text>Manage supplied items</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Orders</Text>

        <Text>Track customer requests</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Business Profile</Text>

        <Text>Update supplier information</Text>
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
