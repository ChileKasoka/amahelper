// app/auth/ama_companies/company3.tsx
import React from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface Props {
  back: () => void;
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  onSubmit: () => Promise<void>;
  loading: boolean;
}

export default function CompanyStep3({
  back,
  formData,
  setFormData,
  onSubmit,
  loading,
}: Props) {
  const handleFinalSubmit = async () => {
    if (!formData.latitude || !formData.longitude) {
      // optional validation only
    }

    if (
      !formData.companyName ||
      !formData.adminEmail ||
      !formData.adminPassword
    ) {
      Alert.alert("Error", "Missing required company/admin fields");
      return;
    }

    setFormData((prev: any) => ({
      ...prev,

      // backend required final flags
      userType: "COMPANY_ADMIN",
      role: "ADMIN",

      // ensure numbers are correct
      latitude: prev.latitude ? Number(prev.latitude) : undefined,
      longitude: prev.longitude ? Number(prev.longitude) : undefined,
    }));

    await onSubmit();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Review & Submit</Text>

      {/* COMPANY SUMMARY */}
      <View style={styles.reviewBox}>
        <Text style={styles.label}>Company Details</Text>
        <Text>Name: {formData.companyName}</Text>
        <Text>Type: {formData.companyType}</Text>
        <Text>Email: {formData.companyEmail}</Text>
        <Text>Phone: {formData.companyPhone}</Text>
        <Text>Address: {formData.companyAddress}</Text>
        <Text>Registration: {formData.registrationNumber}</Text>
      </View>

      {/* ADMIN SUMMARY */}
      <View style={styles.reviewBox}>
        <Text style={styles.label}>Admin Details</Text>
        <Text>
          Name: {formData.adminFirstName} {formData.adminLastName}
        </Text>
        <Text>Email: {formData.adminEmail}</Text>
        <Text>Phone: {formData.adminPhone || "N/A"}</Text>
        <Text>NRC: {formData.adminNrc || "N/A"}</Text>
      </View>

      {/* OPTIONAL COORDINATES */}
      <TextInput
        placeholder="Latitude (optional)"
        keyboardType="numeric"
        value={formData.latitude?.toString() || ""}
        onChangeText={(text) =>
          setFormData((prev: any) => ({
            ...prev,
            latitude: text,
          }))
        }
        style={styles.input}
      />

      <TextInput
        placeholder="Longitude (optional)"
        keyboardType="numeric"
        value={formData.longitude?.toString() || ""}
        onChangeText={(text) =>
          setFormData((prev: any) => ({
            ...prev,
            longitude: text,
          }))
        }
        style={styles.input}
      />

      {/* BUTTONS */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleFinalSubmit}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? "Submitting..." : "Register Company"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton} onPress={back}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
    backgroundColor: "#f9fafb",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
    color: "#111827",
  },
  input: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
    padding: 14,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  reviewBox: {
    padding: 15,
    backgroundColor: "#e5e7eb",
    borderRadius: 8,
    marginBottom: 15,
  },
  label: {
    fontWeight: "700",
    marginBottom: 8,
    color: "#111827",
  },
  button: {
    backgroundColor: "#3b82f6",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  backButton: {
    backgroundColor: "#6b7280",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});
