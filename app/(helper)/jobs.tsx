import { FlatList, StyleSheet, Text, View } from "react-native";

const jobs = [
  {
    id: "1",
    title: "House Cleaning",
    location: "Lusaka",
  },
  {
    id: "2",
    title: "Laundry Service",
    location: "Kabulonga",
  },
];

export default function JobsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Jobs</Text>

      <FlatList
        data={jobs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.job}>{item.title}</Text>
            <Text>{item.location}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8fafc",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
  },
  job: {
    fontWeight: "700",
    fontSize: 16,
  },
});
