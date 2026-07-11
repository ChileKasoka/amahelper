import { Ionicons } from "@expo/vector-icons";
import { FlatList, StyleSheet, Text, View } from "react-native";

const appointments = [
  {
    id: "1",
    client: "Mary Banda",
    service: "House Cleaning",
    time: "10:00 AM",
    location: "Kabulonga",
    status: "Pending",
  },

  {
    id: "2",
    client: "John Phiri",
    service: "Laundry Service",
    time: "02:00 PM",
    location: "Lusaka East",
    status: "Completed",
  },

  {
    id: "3",
    client: "Sarah Zulu",
    service: "Deep Cleaning",
    time: "04:30 PM",
    location: "Woodlands",
    status: "Upcoming",
  },
];

export default function Appointments() {
  return (
    <View style={styles.container}>
      {/* Header */}

      <View style={styles.header}>
        <Text style={styles.title}>Appointments</Text>

        <Text style={styles.subtitle}>
          Manage client bookings and schedules
        </Text>
      </View>

      {/* Summary */}

      <View style={styles.summaryContainer}>
        <View style={styles.summaryCard}>
          <Ionicons name="calendar-outline" size={28} color="#7c3aed" />

          <Text style={styles.summaryNumber}>12</Text>

          <Text style={styles.summaryLabel}>Today</Text>
        </View>

        <View style={styles.summaryCard}>
          <Ionicons name="time-outline" size={28} color="#2563eb" />

          <Text style={styles.summaryNumber}>5</Text>

          <Text style={styles.summaryLabel}>Pending</Text>
        </View>

        <View style={styles.summaryCard}>
          <Ionicons name="checkmark-circle-outline" size={28} color="#16a34a" />

          <Text style={styles.summaryNumber}>7</Text>

          <Text style={styles.summaryLabel}>Completed</Text>
        </View>
      </View>

      {/* Appointment List */}

      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>{item.client.charAt(0)}</Text>
              </View>

              <View style={{ flex: 1 }}>
                <Text style={styles.name}>{item.client}</Text>

                <Text style={styles.service}>{item.service}</Text>
              </View>

              <View
                style={[
                  styles.status,
                  item.status === "Completed" && styles.completed,

                  item.status === "Upcoming" && styles.upcoming,
                ]}
              >
                <Text style={styles.statusText}>{item.status}</Text>
              </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.infoRow}>
              <Ionicons name="time-outline" size={18} color="#64748b" />

              <Text style={styles.infoText}>{item.time}</Text>
            </View>

            <View style={styles.infoRow}>
              <Ionicons name="location-outline" size={18} color="#64748b" />

              <Text style={styles.infoText}>{item.location}</Text>
            </View>
          </View>
        )}
      />
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
    marginBottom: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#0f172a",
  },

  subtitle: {
    marginTop: 5,
    color: "#64748b",
    fontSize: 15,
  },

  summaryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  summaryCard: {
    backgroundColor: "#fff",
    width: "31%",
    padding: 15,
    borderRadius: 18,
    alignItems: "center",
  },

  summaryNumber: {
    fontSize: 22,
    fontWeight: "800",
    marginTop: 8,
    color: "#0f172a",
  },

  summaryLabel: {
    fontSize: 13,
    color: "#64748b",
    marginTop: 4,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 18,
    marginBottom: 15,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },

  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#ede9fe",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  avatarText: {
    fontSize: 20,
    fontWeight: "800",
    color: "#7c3aed",
  },

  name: {
    fontSize: 17,
    fontWeight: "700",
    color: "#0f172a",
  },

  service: {
    color: "#64748b",
    marginTop: 3,
  },

  status: {
    backgroundColor: "#fef3c7",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },

  completed: {
    backgroundColor: "#dcfce7",
  },

  upcoming: {
    backgroundColor: "#dbeafe",
  },

  statusText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#334155",
  },

  divider: {
    height: 1,
    backgroundColor: "#e2e8f0",
    marginVertical: 15,
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  infoText: {
    marginLeft: 10,
    color: "#475569",
    fontSize: 14,
  },
});
