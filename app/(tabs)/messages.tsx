import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const chats = [
  { id: "1", name: "Mary Cleaner", lastMessage: "I’ll arrive at 10am" },
  { id: "2", name: "John Services", lastMessage: "Booking confirmed 👍" },
];

export default function Messages() {
  return (
    <View style={styles.container}>
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.chatItem}>
            <View style={styles.avatar} />
            <View style={styles.chatText}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.message}>{item.lastMessage}</Text>
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
    backgroundColor: "#f8fafc",
    marginTop: 40,
  },
  chatItem: {
    flexDirection: "row",
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#e2e8f0",
  },
  avatar: {
    width: 50,
    height: 50,
    backgroundColor: "#cbd5f5",
    borderRadius: 25,
    marginRight: 15,
  },
  chatText: {
    justifyContent: "center",
  },
  name: {
    fontWeight: "bold",
  },
  message: {
    color: "#64748b",
  },
});
