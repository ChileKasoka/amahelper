import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useAuth } from "@/context/AuthContext";

export default function ClientDashboard() {
  const router = useRouter();

  const { user } = useAuth();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}

      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>
            Hello, {user?.firstName || "there"}
          </Text>

          <Text style={styles.subtitle}>Find and hire trusted helpers</Text>
        </View>

        <TouchableOpacity
          style={styles.profileButton}
          onPress={() => router.push("/(client)/profile")}
        >
          <Ionicons name="person" size={24} color="#16a34a" />
        </TouchableOpacity>
      </View>

      {/* Stats */}

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Ionicons name="calendar-outline" size={28} color="#2563eb" />

          <Text style={styles.statNumber}>2</Text>

          <Text style={styles.statLabel}>Bookings</Text>
        </View>

        <View style={styles.statCard}>
          <Ionicons name="chatbubble-outline" size={28} color="#16a34a" />

          <Text style={styles.statNumber}>0</Text>

          <Text style={styles.statLabel}>Messages</Text>
        </View>

        <View style={styles.statCard}>
          <Ionicons name="document-text-outline" size={28} color="#f59e0b" />

          <Text style={styles.statNumber}>1</Text>

          <Text style={styles.statLabel}>Requests</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Quick Actions</Text>

      {/* Search Helpers */}

      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push("/(client)/jobs")}
      >
        <View style={styles.iconBox}>
          <Ionicons name="search-outline" size={28} color="#2563eb" />
        </View>

        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Search Helpers</Text>

          <Text style={styles.cardDescription}>
            Browse available cleaners near you
          </Text>
        </View>

        <Ionicons name="chevron-forward" size={22} color="#94a3b8" />
      </TouchableOpacity>

      {/* Bookings */}

      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push("/(client)/bookings")}
      >
        <View style={[styles.iconBox, { backgroundColor: "#dcfce7" }]}>
          <Ionicons name="calendar-outline" size={28} color="#16a34a" />
        </View>

        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>My Bookings</Text>

          <Text style={styles.cardDescription}>View your service requests</Text>
        </View>

        <Ionicons name="chevron-forward" size={22} color="#94a3b8" />
      </TouchableOpacity>

      {/* Messages */}

      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push("/(client)/messages")}
      >
        <View style={[styles.iconBox, { backgroundColor: "#fef3c7" }]}>
          <Ionicons name="chatbubble-outline" size={28} color="#f59e0b" />
        </View>

        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Messages</Text>

          <Text style={styles.cardDescription}>Chat with helpers</Text>
        </View>

        <Ionicons name="chevron-forward" size={22} color="#94a3b8" />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    padding: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },

  greeting: {
    fontSize: 26,
    fontWeight: "700",
    color: "#111827",
  },

  subtitle: {
    color: "#64748b",
    marginTop: 5,
  },

  profileButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#dcfce7",
    justifyContent: "center",
    alignItems: "center",
  },

  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },

  statCard: {
    backgroundColor: "#fff",
    width: "31%",
    padding: 15,
    borderRadius: 16,
    alignItems: "center",
    elevation: 3,
  },

  statNumber: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 8,
    color: "#111827",
  },

  statLabel: {
    color: "#64748b",
    fontSize: 12,
    marginTop: 4,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 15,
    color: "#111827",
  },

  card: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 18,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
  },

  iconBox: {
    width: 55,
    height: 55,
    borderRadius: 15,
    backgroundColor: "#dbeafe",
    justifyContent: "center",
    alignItems: "center",
  },

  cardContent: {
    flex: 1,
    marginLeft: 15,
  },

  cardTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#111827",
  },

  cardDescription: {
    color: "#64748b",
    marginTop: 4,
  },
});
