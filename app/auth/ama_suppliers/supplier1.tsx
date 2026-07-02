import { useState } from "react";
import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
} from "react-native";

export type SupplierFormData = {
  id?: string;
  userId?: string;

  businessName: string;
  contactPerson: string;
  phone: string;
  alternativePhone: string;
  email: string;

  tpin: string;
  registrationNumber: string;

  address: string;
  city: string;
  province: string;
  postalCode: string;

  latitude: string;
  longitude: string;

  category: string;
  productsSupplied: string;
  isActive: boolean;
  notes: string;
};

type SupplierStep1Props = {
  next: () => void;
  formData: SupplierFormData;
  setFormData: React.Dispatch<React.SetStateAction<SupplierFormData>>;
};

export default function SupplierStep1({
  next,
  formData,
  setFormData,
}: SupplierStep1Props) {
  const [businessName, setBusinessName] = useState(formData.businessName || "");
  const [contactPerson, setContactPerson] = useState(
    formData.contactPerson || "",
  );
  const [phone, setPhone] = useState(formData.phone || "");
  const [alternativePhone, setAlternativePhone] = useState(
    formData.alternativePhone || "",
  );
  const [email, setEmail] = useState(formData.email || "");

  const handleNext = () => {
    if (!businessName || !contactPerson || !phone || !email) {
      Alert.alert("Error", "Please fill all required fields");
      return;
    }

    setFormData((prev) => ({
      ...prev,
      businessName,
      contactPerson,
      phone,
      alternativePhone,
      email,
    }));

    next();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Supplier - Business Details</Text>

      <TextInput
        placeholder="Business Name"
        value={businessName}
        onChangeText={setBusinessName}
        style={styles.input}
      />

      <TextInput
        placeholder="Contact Person"
        value={contactPerson}
        onChangeText={setContactPerson}
        style={styles.input}
      />

      <TextInput
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
        style={styles.input}
      />

      <TextInput
        placeholder="Alternative Phone"
        value={alternativePhone}
        onChangeText={setAlternativePhone}
        keyboardType="phone-pad"
        style={styles.input}
      />

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
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
  button: {
    backgroundColor: "#3b82f6",
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
