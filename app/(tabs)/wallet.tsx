import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Wallet() {
  return (
    <View style={styles.container}>
      {/* Balance Card */}
      <View style={styles.card}>
        <Text style={styles.label}>Wallet Balance</Text>
        <Text style={styles.balance}>K 0.00</Text>
      </View>

      {/* Actions */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Deposit</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonOutline}>
          <Text style={styles.buttonOutlineText}>Withdraw</Text>
        </TouchableOpacity>
      </View>

      {/* Transactions */}
      <View style={styles.transactions}>
        <Text style={styles.sectionTitle}>Recent Transactions</Text>

        <View style={styles.transactionItem}>
          <Text>Cleaning Service</Text>
          <Text style={styles.amount}>- K 150</Text>
        </View>

        <View style={styles.transactionItem}>
          <Text>Wallet Top-up</Text>
          <Text style={styles.amountPositive}>+ K 200</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8fafc",
    marginTop: 40,
  },
  card: {
    backgroundColor: "#0f172a",
    padding: 20,
    borderRadius: 15,
  },
  label: {
    color: "#cbd5f5",
    marginBottom: 5,
  },
  balance: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },
  actions: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#0f172a",
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
  },
  buttonOutline: {
    borderWidth: 1,
    borderColor: "#0f172a",
    padding: 15,
    borderRadius: 10,
    flex: 1,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  buttonOutlineText: {
    textAlign: "center",
    color: "#0f172a",
  },
  transactions: {
    marginTop: 30,
  },
  sectionTitle: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  amount: {
    color: "red",
  },
  amountPositive: {
    color: "green",
  },
});
