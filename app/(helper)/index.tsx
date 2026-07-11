import { Ionicons } from "@expo/vector-icons";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HelperDashboard() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        paddingBottom: 100,
      }}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Welcome 👋</Text>

          <Text style={styles.title}>Helper Dashboard</Text>

          <Text style={styles.subtitle}>Manage your cleaning jobs easily</Text>
        </View>

        <View style={styles.avatar}>
          <Ionicons name="person" size={30} color="#16a34a" />
        </View>
      </View>

      {/* Today's Work */}

      <View style={styles.highlightCard}>
        <View style={styles.iconCircle}>
          <Ionicons name="briefcase-outline" size={30} color="#16a34a" />
        </View>

        <View>
          <Text style={styles.cardTitle}>Today's Jobs</Text>

          <Text style={styles.bigNumber}>0 Jobs</Text>

          <Text style={styles.smallText}>No assigned jobs today</Text>
        </View>
      </View>

      {/* Stats */}

      <View style={styles.row}>
        <View style={styles.statCard}>
          <Ionicons name="calendar-outline" size={25} color="#2563eb" />

          <Text style={styles.statNumber}>0</Text>

          <Text style={styles.statLabel}>Upcoming</Text>
        </View>

        <View style={styles.statCard}>
          <Ionicons name="cash-outline" size={25} color="#16a34a" />

          <Text style={styles.statNumber}>K0</Text>

          <Text style={styles.statLabel}>Earnings</Text>
        </View>
      </View>

      {/* Quick Actions */}

      <Text style={styles.sectionTitle}>Quick Actions</Text>

      <TouchableOpacity style={styles.actionCard}>
        <Ionicons name="search-outline" size={28} color="#16a34a" />

        <View>
          <Text style={styles.actionTitle}>Find New Jobs</Text>

          <Text style={styles.actionText}>
            View available cleaning requests
          </Text>
        </View>

        <Ionicons name="chevron-forward" size={22} color="#94a3b8" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionCard}>
        <Ionicons name="time-outline" size={28} color="#2563eb" />

        <View>
          <Text style={styles.actionTitle}>My Schedule</Text>

          <Text style={styles.actionText}>Check your upcoming work</Text>
        </View>

        <Ionicons name="chevron-forward" size={22} color="#94a3b8" />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f5f9",
    padding: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },

  greeting: {
    fontSize: 16,
    color: "#64748b",
  },

  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#0f172a",
  },

  subtitle: {
    marginTop: 5,
    color: "#64748b",
  },

  avatar: {
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: "#dcfce7",
    justifyContent: "center",
    alignItems: "center",
  },

  highlightCard: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 22,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    elevation: 3,
  },

  iconCircle: {
    width: 65,
    height: 65,
    borderRadius: 35,
    backgroundColor: "#dcfce7",
    alignItems: "center",
    justifyContent: "center",
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#475569",
  },

  bigNumber: {
    fontSize: 28,
    fontWeight: "800",
    marginTop: 5,
  },

  smallText: {
    color: "#64748b",
    marginTop: 3,
  },

  row: {
    flexDirection: "row",
    gap: 15,
    marginTop: 20,
  },

  statCard: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 20,
    borderRadius: 20,
  },

  statNumber: {
    fontSize: 24,
    fontWeight: "800",
    marginTop: 10,
  },

  statLabel: {
    color: "#64748b",
    marginTop: 5,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "800",
    marginTop: 30,
    marginBottom: 15,
  },

  actionCard: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 18,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },

  actionTitle: {
    fontSize: 16,
    fontWeight: "700",
  },

  actionText: {
    color: "#64748b",
    marginTop: 4,
  },
});
