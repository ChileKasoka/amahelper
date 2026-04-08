import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const jobs = [
  {
    id: "1",
    title: "House Cleaning Needed",
    location: "Lusaka, Kabulonga",
    price: "K 150",
  },
  {
    id: "2",
    title: "Office Cleaning",
    location: "Lusaka, CBD",
    price: "K 300",
  },
  {
    id: "3",
    title: "Deep Cleaning Service",
    location: "Lusaka, Woodlands",
    price: "K 250",
  },
];

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.title}>AmaHelpers</Text>
      <Text style={styles.subtitle}>Find jobs near you</Text>

      {/* Search Bar */}
      <View style={styles.searchBox}>
        <Ionicons name="search" size={20} color="#64748b" />
        <TextInput placeholder="Search jobs..." style={styles.input} />
      </View>

      {/* Jobs List */}
      <FlatList
        data={jobs}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              router.push({
                pathname: "/jobs/[id]",
                params: { id: item.id },
              })
            }
          >
            <Text style={styles.jobTitle}>{item.title}</Text>
            <Text style={styles.location}>{item.location}</Text>

            <View style={styles.row}>
              <Text style={styles.price}>{item.price}</Text>
              <Ionicons name="chevron-forward" size={18} color="#94a3b8" />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#f8fafc",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 40,
  },
  subtitle: {
    color: "#64748b",
    marginBottom: 15,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  input: {
    marginLeft: 10,
    flex: 1,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  location: {
    marginTop: 5,
    color: "#64748b",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    alignItems: "center",
  },
  price: {
    fontWeight: "bold",
    color: "#0f172a",
  },
});
