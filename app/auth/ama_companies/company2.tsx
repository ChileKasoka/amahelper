// app/auth/ama_companies/company2.tsx
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

interface CompanyStep2Props {
  next: () => void;
  back: () => void;
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

export default function CompanyStep2({ next, back, formData, setFormData }: CompanyStep2Props) {
  const [adminFirstName, setAdminFirstName] = useState(formData.adminFirstName || "");
  const [adminLastName, setAdminLastName] = useState(formData.adminLastName || "");
  const [adminEmail, setAdminEmail] = useState(formData.adminEmail || "");
  const [adminPassword, setAdminPassword] = useState(formData.adminPassword || "");
  const [adminPhone, setAdminPhone] = useState(formData.adminPhone || "");
  const [adminNrc, setAdminNrc] = useState(formData.adminNrc || "");

  const handleNext = () => {
    if (!adminFirstName || !adminLastName || !adminEmail || !adminPassword) {
      alert("Please fill all required fields");
      return;
    }

    setFormData({
      ...formData,
      adminFirstName,
      adminLastName,
      adminEmail,
      adminPassword,
      adminPhone,
      adminNrc,
    });

    next();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Admin Information</Text>

      <TextInput
        placeholder="First Name"
        value={adminFirstName}
        onChangeText={setAdminFirstName}
        style={styles.input}
      />
      <TextInput
        placeholder="Last Name"
        value={adminLastName}
        onChangeText={setAdminLastName}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={adminEmail}
        onChangeText={setAdminEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={adminPassword}
        secureTextEntry
        onChangeText={setAdminPassword}
        style={styles.input}
      />
      <TextInput
        placeholder="Phone"
        value={adminPhone}
        onChangeText={setAdminPhone}
        style={styles.input}
      />
      <TextInput
        placeholder="NRC"
        value={adminNrc}
        onChangeText={setAdminNrc}
        style={styles.input}
      />

      <TouchableOpacity
        style={[styles.button, styles.backButton]}
        onPress={back}
      >
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Continue</Text>
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
  title: { fontSize: 24, fontWeight: "700", marginBottom: 20, color: "#111827" },
  input: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
    padding: 14,
    marginBottom: 15,
    backgroundColor: "#fff",
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
    marginBottom: 10,
  },
  buttonText: { color: "#fff", fontWeight: "700", fontSize: 16 },
});