import { Ionicons } from "@expo/vector-icons";
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const jobs = [
  {
    id: "1",
    title: "House Cleaning",
    location: "Lusaka",
    time: "09:00 AM",
    payment: "K150",
  },
  {
    id: "2",
    title: "Laundry Service",
    location: "Kabulonga",
    time: "02:00 PM",
    payment: "K80",
  },
];

export default function JobsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Jobs</Text>

      <Text style={styles.subtitle}>Find cleaning work near you</Text>

      <FlatList
        data={jobs}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.header}>
              <View style={styles.iconBox}>
                <Ionicons name="sparkles-outline" size={28} color="#16a34a" />
              </View>

              <View>
                <Text style={styles.jobTitle}>{item.title}</Text>

                <Text style={styles.location}>📍 {item.location}</Text>
              </View>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.info}>🕒 {item.time}</Text>

              <Text style={styles.money}>{item.payment}</Text>
            </View>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Accept Job</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f5f9",
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#0f172a",
  },

  subtitle: {
    marginTop: 5,
    color: "#64748b",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 20,
    marginBottom: 15,
    elevation: 3,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },

  iconBox: {
    width: 55,
    height: 55,
    borderRadius: 15,
    backgroundColor: "#dcfce7",
    alignItems: "center",
    justifyContent: "center",
  },

  jobTitle: {
    fontSize: 18,
    fontWeight: "700",
  },

  location: {
    marginTop: 5,
    color: "#64748b",
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },

  info: {
    color: "#475569",
    fontSize: 15,
  },

  money: {
    fontSize: 18,
    fontWeight: "800",
    color: "#16a34a",
  },

  button: {
    marginTop: 20,
    backgroundColor: "#16a34a",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});
