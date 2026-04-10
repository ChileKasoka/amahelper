// app/auth/ama_companies/company1.tsx
import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

interface CompanyStep1Props {
  next: () => void;
  back?: () => void;
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

export default function CompanyStep1({ next, back, formData, setFormData }: CompanyStep1Props) {
  const [companyName, setCompanyName] = useState(formData.companyName || "");
  const [companyType, setCompanyType] = useState(formData.companyType || "");
  const [registrationNumber, setRegistrationNumber] = useState(formData.registrationNumber || "");
  const [companyEmail, setCompanyEmail] = useState(formData.companyEmail || "");
  const [companyPhone, setCompanyPhone] = useState(formData.companyPhone || "");
  const [companyAddress, setCompanyAddress] = useState(formData.companyAddress || "");

  const handleNext = () => {
    if (!companyName || !companyType || !registrationNumber || !companyEmail || !companyPhone || !companyAddress) {
      alert("Please fill in all fields");
      return;
    }

    setFormData({
      ...formData,
      companyName,
      companyType: companyType as "PRIVATE" | "GOVERNMENT" | "NGO",
      registrationNumber,
      companyEmail,
      companyPhone,
      companyAddress,
    });

    next();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Company Information</Text>

      <TextInput
        placeholder="Company Name"
        value={companyName}
        onChangeText={setCompanyName}
        style={styles.input}
      />
      <TextInput
        placeholder="Company Type (PRIVATE/GOVERNMENT/NGO)"
        value={companyType}
        onChangeText={setCompanyType}
        style={styles.input}
      />
      <TextInput
        placeholder="Registration Number"
        value={registrationNumber}
        onChangeText={setRegistrationNumber}
        style={styles.input}
      />
      <TextInput
        placeholder="Company Email"
        value={companyEmail}
        onChangeText={setCompanyEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Company Phone"
        value={companyPhone}
        onChangeText={setCompanyPhone}
        style={styles.input}
      />
      <TextInput
        placeholder="Company Address"
        value={companyAddress}
        onChangeText={setCompanyAddress}
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      {back && (
        <TouchableOpacity style={[styles.button, styles.backButton]} onPress={back}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flexGrow: 1, backgroundColor: "#f9fafb" },
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
  },
  buttonText: { color: "#fff", fontWeight: "700", fontSize: 16 },
});