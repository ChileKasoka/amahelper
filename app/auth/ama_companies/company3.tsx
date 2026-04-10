// app/auth/ama_companies/company3.tsx
import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";

interface Props {
  back: () => void;
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  onSubmit: () => Promise<void>; // callback for final submission
  loading: boolean;
}

export default function CompanyStep3({ back, formData, setFormData, onSubmit, loading }: Props) {
  const [latitude, setLatitude] = useState<string>(formData.latitude?.toString() || "");
  const [longitude, setLongitude] = useState<string>(formData.longitude?.toString() || "");

  const handleFinalSubmit = () => {
    setFormData({
      ...formData,
      latitude: latitude ? Number(latitude) : undefined,
      longitude: longitude ? Number(longitude) : undefined,
      userType: "COMPANY_ADMIN",
      role: "ADMIN",
    });

    onSubmit();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Review Information</Text>

      <View style={styles.reviewBox}>
        <Text>Company: {formData.companyName}</Text>
        <Text>Email: {formData.companyEmail}</Text>
        <Text>Phone: {formData.companyPhone}</Text>
        <Text>Address: {formData.companyAddress}</Text>
        <Text>
          Admin: {formData.adminFirstName} {formData.adminLastName}
        </Text>
        <Text>Admin Email: {formData.adminEmail}</Text>
      </View>

      <TextInput
        placeholder="Latitude (optional)"
        keyboardType="numeric"
        value={latitude}
        onChangeText={setLatitude}
        style={styles.input}
      />
      <TextInput
        placeholder="Longitude (optional)"
        keyboardType="numeric"
        value={longitude}
        onChangeText={setLongitude}
        style={styles.input}
      />

      <TouchableOpacity
        style={[styles.button, styles.backButton]}
        onPress={back}
      >
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={handleFinalSubmit}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? "Submitting..." : "Register Company"}
        </Text>
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
    color: "#111827",
  },
  reviewBox: {
    padding: 15,
    backgroundColor: "#e5e7eb",
    borderRadius: 8,
    marginBottom: 15,
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
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});