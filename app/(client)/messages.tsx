import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function Messages() {
  return (
    <View style={styles.container}>
      {/* Header */}

      <View style={styles.header}>
        <Text style={styles.title}>Messages</Text>

        <Text style={styles.subtitle}>
          Chat with helpers and manage your bookings
        </Text>
      </View>

      {/* Empty State */}

      <View style={styles.emptyCard}>
        <View style={styles.iconCircle}>
          <Ionicons name="chatbubbles-outline" size={45} color="#2563eb" />
        </View>

        <Text style={styles.emptyTitle}>No conversations yet</Text>

        <Text style={styles.emptyText}>
          Your conversations with helpers will appear here. Start by booking a
          helper or replying to requests.
        </Text>

        <TouchableOpacity style={styles.button}>
          <Ionicons name="search-outline" size={20} color="#fff" />

          <Text style={styles.buttonText}>Find Helpers</Text>
        </TouchableOpacity>
      </View>

      {/* Recent Messages Placeholder */}

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Messages</Text>

        <View style={styles.messageCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>?</Text>
          </View>

          <View>
            <Text style={styles.messageTitle}>No messages</Text>

            <Text style={styles.messageSubtitle}>
              New conversations will appear here
            </Text>
          </View>
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

  header: {
    marginBottom: 25,
  },

  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#0f172a",
  },

  subtitle: {
    marginTop: 6,
    fontSize: 14,
    color: "#64748b",
  },

  emptyCard: {
    backgroundColor: "#fff",
    borderRadius: 22,
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
  },

  iconCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#eff6ff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },

  emptyTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#0f172a",
  },

  emptyText: {
    textAlign: "center",
    color: "#64748b",
    lineHeight: 22,
    marginTop: 10,
  },

  button: {
    marginTop: 25,
    backgroundColor: "#2563eb",
    paddingHorizontal: 25,
    paddingVertical: 14,
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },

  section: {
    marginTop: 30,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: 15,
  },

  messageCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 18,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#e2e8f0",
    alignItems: "center",
    justifyContent: "center",
  },

  avatarText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#64748b",
  },

  messageTitle: {
    fontWeight: "700",
    fontSize: 16,
    color: "#0f172a",
  },

  messageSubtitle: {
    marginTop: 3,
    color: "#64748b",
  },
});
