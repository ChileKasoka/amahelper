import { FlatList, StyleSheet, Text, View } from "react-native";

const hires = [
  {
    id: "1",
    name: "Mary Cleaner",
    service: "House Cleaning",
    date: "2 Apr, 10:00 AM",
    status: "Ongoing",
  },
  {
    id: "2",
    name: "John Services",
    service: "Office Cleaning",
    date: "30 Mar, 2:00 PM",
    status: "Completed",
  },
  {
    id: "3",
    name: "Sparkle Team",
    service: "Deep Cleaning",
    date: "5 Apr, 9:00 AM",
    status: "Pending",
  },
];

export default function Hires() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Hires</Text>

      <FlatList
        data={hires}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.row}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={[styles.status, getStatusStyle(item.status)]}>
                {item.status}
              </Text>
            </View>

            <Text style={styles.service}>{item.service}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
        )}
      />
    </View>
  );
}

function getStatusStyle(status: string) {
  switch (status) {
    case "Completed":
      return { color: "#16a34a" }; // green
    case "Ongoing":
      return { color: "#2563eb" }; // blue
    case "Pending":
      return { color: "#f59e0b" }; // yellow
    default:
      return { color: "#64748b" };
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    padding: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  service: {
    marginTop: 5,
    color: "#475569",
  },
  date: {
    marginTop: 5,
    color: "#64748b",
    fontSize: 12,
  },
  status: {
    fontWeight: "bold",
  },
});
