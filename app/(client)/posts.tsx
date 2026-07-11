import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Posts() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Requests</Text>

      <View style={styles.card}>
        <Ionicons name="document-text-outline" size={45} color="#16a34a" />

        <Text style={styles.cardTitle}>Create your first request</Text>

        <Text style={styles.description}>
          Post a cleaning request and connect with available helpers.
        </Text>

        <TouchableOpacity style={styles.button}>
          <Ionicons name="add" size={22} color="#fff" />

          <Text style={styles.buttonText}>Create New Request</Text>
        </TouchableOpacity>
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
    fontSize: 26,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 25,
  },

  card: {
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 20,
    alignItems: "center",
    elevation: 3,
  },

  cardTitle: {
    fontSize: 19,
    fontWeight: "700",
    marginTop: 15,
    color: "#111827",
  },

  description: {
    color: "#64748b",
    textAlign: "center",
    marginTop: 10,
    lineHeight: 20,
  },

  button: {
    backgroundColor: "#16a34a",
    marginTop: 25,
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});
