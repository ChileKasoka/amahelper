import { StyleSheet, Text, View } from "react-native";

export default function EarningsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Earnings</Text>

      <View style={styles.card}>
        <Text style={styles.amount}>K0.00</Text>
        <Text>Total Earnings</Text>
      </View>

      <View style={styles.card}>
        <Text>No payment history yet.</Text>
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
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
  },
  amount: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#16a34a",
  },
});
