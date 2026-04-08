// app/jobs/[jobId].tsx
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function JobDetails() {
  const { jobId } = useLocalSearchParams(); // ✅ updated

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Job Details</Text>
      <Text style={styles.text}>Job ID: {jobId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
  },
});
