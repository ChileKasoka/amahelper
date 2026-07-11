import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Jobs() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find Helpers</Text>

      <View style={styles.card}>
        <View style={styles.iconContainer}>
          <Ionicons name="search-outline" size={45} color="#2563eb" />
        </View>

        <Text style={styles.cardTitle}>Need help at home?</Text>

        <Text style={styles.description}>
          Search available helpers, view their services, and choose someone that
          matches your needs.
        </Text>

        <TouchableOpacity style={styles.button}>
          <Ionicons name="people-outline" size={22} color="#fff" />

          <Text style={styles.buttonText}>Search Helpers</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoCard}>
        <Ionicons name="shield-checkmark-outline" size={25} color="#16a34a" />

        <View style={{ flex: 1 }}>
          <Text style={styles.infoTitle}>Trusted Helpers</Text>

          <Text style={styles.infoText}>
            Browse verified helpers and find the right person for your request.
          </Text>
        </View>
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
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    elevation: 3,
  },

  iconContainer: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#eff6ff",
    justifyContent: "center",
    alignItems: "center",
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
    marginTop: 15,
  },

  description: {
    textAlign: "center",
    color: "#64748b",
    lineHeight: 22,
    marginTop: 10,
  },

  button: {
    backgroundColor: "#2563eb",
    marginTop: 25,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },

  infoCard: {
    backgroundColor: "#fff",
    marginTop: 20,
    padding: 18,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    elevation: 2,
  },

  infoTitle: {
    fontWeight: "700",
    fontSize: 16,
    color: "#111827",
  },

  infoText: {
    color: "#64748b",
    marginTop: 5,
    lineHeight: 18,
  },
});
