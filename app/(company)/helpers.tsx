import { Ionicons } from "@expo/vector-icons";
import { FlatList, StyleSheet, Text, View } from "react-native";

const helpers = [
  {
    id: "1",
    name: "John Cleaner",
    service: "House Cleaning",
    status: "Available",
    jobs: 12,
    location: "Lusaka",
  },

  {
    id: "2",
    name: "Mary Helper",
    service: "Laundry & Ironing",
    status: "Busy",
    jobs: 18,
    location: "Kabulonga",
  },

  {
    id: "3",
    name: "Peter Banda",
    service: "Deep Cleaning",
    status: "Available",
    jobs: 8,
    location: "Woodlands",
  },
];

export default function Helpers() {
  return (
    <View style={styles.container}>
      {/* Header */}

      <View style={styles.header}>
        <Text style={styles.title}>Helpers</Text>

        <Text style={styles.subtitle}>Manage your cleaning team</Text>
      </View>

      {/* Statistics */}

      <View style={styles.stats}>
        <View style={styles.statCard}>
          <Ionicons name="people-outline" size={28} color="#7c3aed" />

          <Text style={styles.statNumber}>24</Text>

          <Text style={styles.statLabel}>Total</Text>
        </View>

        <View style={styles.statCard}>
          <Ionicons name="checkmark-circle-outline" size={28} color="#16a34a" />

          <Text style={styles.statNumber}>18</Text>

          <Text style={styles.statLabel}>Available</Text>
        </View>

        <View style={styles.statCard}>
          <Ionicons name="briefcase-outline" size={28} color="#2563eb" />

          <Text style={styles.statNumber}>6</Text>

          <Text style={styles.statLabel}>Working</Text>
        </View>
      </View>

      {/* Helpers List */}

      <FlatList
        data={helpers}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.top}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>{item.name.charAt(0)}</Text>
              </View>

              <View style={styles.details}>
                <Text style={styles.name}>{item.name}</Text>

                <Text style={styles.service}>{item.service}</Text>
              </View>

              <View
                style={[
                  styles.status,

                  item.status === "Available" ? styles.available : styles.busy,
                ]}
              >
                <Text style={styles.statusText}>{item.status}</Text>
              </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.infoRow}>
              <Ionicons name="location-outline" size={18} color="#64748b" />

              <Text style={styles.info}>{item.location}</Text>
            </View>

            <View style={styles.infoRow}>
              <Ionicons name="briefcase-outline" size={18} color="#64748b" />

              <Text style={styles.info}>{item.jobs} completed jobs</Text>
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
  },

  stats: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  statCard: {
    backgroundColor: "#fff",
    width: "31%",
    padding: 15,
    borderRadius: 18,
    alignItems: "center",
  },

  statNumber: {
    fontSize: 22,
    fontWeight: "800",
    marginTop: 8,
  },

  statLabel: {
    fontSize: 13,
    color: "#64748b",
  },

  card: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 20,
    marginBottom: 15,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },

  top: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 55,
    height: 55,
    borderRadius: 28,
    backgroundColor: "#ede9fe",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  avatarText: {
    fontSize: 22,
    fontWeight: "800",
    color: "#7c3aed",
  },

  details: {
    flex: 1,
  },

  name: {
    fontSize: 18,
    fontWeight: "800",
    color: "#0f172a",
  },

  service: {
    marginTop: 4,
    color: "#64748b",
  },

  status: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  available: {
    backgroundColor: "#dcfce7",
  },

  busy: {
    backgroundColor: "#fee2e2",
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

  info: {
    marginLeft: 10,
    color: "#475569",
  },
});
