import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

const schedule = [
  {
    id: "1",
    time: "09:00 AM",
    client: "Mary Banda",
    service: "House Cleaning",
    location: "Lusaka",
    status: "Confirmed",
  },
  {
    id: "2",
    time: "02:00 PM",
    client: "John Phiri",
    service: "Laundry Service",
    location: "Kabulonga",
    status: "Pending",
  },
];

export default function CalendarScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {/* Header */}

        <Text style={styles.title}>My Schedule</Text>

        <Text style={styles.subtitle}>Manage your upcoming cleaning jobs</Text>

        {/* Today Summary */}

        <View style={styles.summaryCard}>
          <View style={styles.summaryItem}>
            <Ionicons name="calendar-outline" size={28} color="#16a34a" />

            <Text style={styles.summaryNumber}>2</Text>

            <Text style={styles.summaryLabel}>Jobs Today</Text>
          </View>

          <View style={styles.summaryItem}>
            <Ionicons name="time-outline" size={28} color="#16a34a" />

            <Text style={styles.summaryNumber}>5h</Text>

            <Text style={styles.summaryLabel}>Working Time</Text>
          </View>

          <View style={styles.summaryItem}>
            <Ionicons name="cash-outline" size={28} color="#16a34a" />

            <Text style={styles.summaryNumber}>K350</Text>

            <Text style={styles.summaryLabel}>Expected</Text>
          </View>
        </View>

        {/* Schedule */}

        <Text style={styles.sectionTitle}>Upcoming Jobs</Text>

        {schedule.map((item) => (
          <TouchableOpacity key={item.id} style={styles.jobCard}>
            <View style={styles.timeBox}>
              <Text style={styles.time}>{item.time}</Text>
            </View>

            <View style={styles.jobDetails}>
              <Text style={styles.client}>{item.client}</Text>

              <Text style={styles.service}>{item.service}</Text>

              <View style={styles.locationRow}>
                <Ionicons name="location-outline" size={16} color="#64748b" />

                <Text style={styles.location}>{item.location}</Text>
              </View>
            </View>

            <View
              style={[
                styles.status,
                item.status === "Confirmed" ? styles.confirmed : styles.pending,
              ]}
            >
              <Text
                style={
                  item.status === "Confirmed"
                    ? styles.confirmedText
                    : styles.pendingText
                }
              >
                {item.status}
              </Text>
            </View>
          </TouchableOpacity>
        ))}

        {/* Availability */}

        <View style={styles.availabilityCard}>
          <Ionicons name="checkmark-circle-outline" size={25} color="#16a34a" />

          <View>
            <Text style={styles.availabilityTitle}>You are Available</Text>

            <Text style={styles.availabilityText}>
              Clients can request your services
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },

  container: {
    padding: 20,
    paddingBottom: 120,
  },

  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#0f172a",
  },

  subtitle: {
    marginTop: 5,
    color: "#64748b",
    marginBottom: 20,
  },

  summaryCard: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 20,

    flexDirection: "row",
    justifyContent: "space-between",

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },

  summaryItem: {
    alignItems: "center",
  },

  summaryNumber: {
    fontSize: 20,
    fontWeight: "800",
    marginTop: 8,
    color: "#0f172a",
  },

  summaryLabel: {
    fontSize: 12,
    color: "#64748b",
    marginTop: 4,
  },

  sectionTitle: {
    marginTop: 25,
    fontSize: 20,
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: 15,
  },

  jobCard: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 15,

    flexDirection: "row",
    alignItems: "center",

    marginBottom: 15,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },

  timeBox: {
    backgroundColor: "#dcfce7",
    padding: 12,
    borderRadius: 12,
  },

  time: {
    fontWeight: "700",
    color: "#15803d",
  },

  jobDetails: {
    flex: 1,
    marginLeft: 15,
  },

  client: {
    fontSize: 17,
    fontWeight: "700",
    color: "#0f172a",
  },

  service: {
    marginTop: 4,
    color: "#475569",
  },

  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    gap: 4,
  },

  location: {
    fontSize: 13,
    color: "#64748b",
  },

  status: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
  },

  confirmed: {
    backgroundColor: "#dcfce7",
  },

  pending: {
    backgroundColor: "#fef3c7",
  },

  confirmedText: {
    color: "#15803d",
    fontSize: 12,
    fontWeight: "700",
  },

  pendingText: {
    color: "#92400e",
    fontSize: 12,
    fontWeight: "700",
  },

  availabilityCard: {
    marginTop: 20,
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 18,

    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },

  availabilityTitle: {
    fontWeight: "700",
    fontSize: 16,
    color: "#0f172a",
  },

  availabilityText: {
    color: "#64748b",
    marginTop: 4,
  },
});
