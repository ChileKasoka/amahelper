import { Ionicons } from "@expo/vector-icons";
import { FlatList, StyleSheet, Text, View } from "react-native";

const bookings = [
  {
    id: "1",
    helper: "John Cleaner",
    service: "House Cleaning",
    status: "Pending",
    date: "12 July 2026",
  },

  {
    id: "2",
    helper: "Mary Helper",
    service: "Laundry",
    status: "Completed",
    date: "05 July 2026",
  },
];

export default function Bookings() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "#16a34a";

      case "Pending":
        return "#f59e0b";

      default:
        return "#64748b";
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Bookings</Text>

      <FlatList
        data={bookings}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.header}>
              <View style={styles.avatar}>
                <Ionicons name="person-outline" size={25} color="#16a34a" />
              </View>

              <View style={{ flex: 1 }}>
                <Text style={styles.name}>{item.helper}</Text>

                <Text style={styles.service}>{item.service}</Text>
              </View>

              <View
                style={[
                  styles.status,
                  {
                    backgroundColor: `${getStatusColor(item.status)}20`,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.statusText,
                    {
                      color: getStatusColor(item.status),
                    },
                  ]}
                >
                  {item.status}
                </Text>
              </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.dateRow}>
              <Ionicons name="calendar-outline" size={18} color="#64748b" />

              <Text style={styles.date}>{item.date}</Text>
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

  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 25,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 18,
    marginBottom: 15,
    elevation: 3,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  avatar: {
    width: 55,
    height: 55,
    borderRadius: 28,
    backgroundColor: "#dcfce7",
    justifyContent: "center",
    alignItems: "center",
  },

  name: {
    fontSize: 17,
    fontWeight: "700",
    color: "#111827",
  },

  service: {
    color: "#64748b",
    marginTop: 4,
  },

  status: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  statusText: {
    fontSize: 12,
    fontWeight: "700",
  },

  divider: {
    height: 1,
    backgroundColor: "#e5e7eb",
    marginVertical: 15,
  },

  dateRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  date: {
    color: "#64748b",
    fontSize: 14,
  },
});
