// app/auth/ama_companies/company2.tsx
import React from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

const CompanyStep2 = ({ next, back, formData, setFormData }: any) => {
  const handleNext = () => {
    const { adminFirstName, adminLastName, adminEmail, adminPassword } =
      formData;

    if (!adminFirstName || !adminLastName || !adminEmail || !adminPassword) {
      Alert.alert("Error", "Admin details required (including password)");
      return;
    }

    if (adminPassword.trim().length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters");
      return;
    }

    setFormData({
      ...formData,
      adminPassword: adminPassword.trim(),
    });

    next?.();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Admin Information</Text>

      <TextInput
        placeholder="First Name"
        value={formData.adminFirstName || ""}
        onChangeText={(t) =>
          setFormData((p: any) => ({ ...p, adminFirstName: t }))
        }
        style={styles.input}
      />

      <TextInput
        placeholder="Last Name"
        value={formData.adminLastName || ""}
        onChangeText={(t) =>
          setFormData((p: any) => ({ ...p, adminLastName: t }))
        }
        style={styles.input}
      />

      <TextInput
        placeholder="Email"
        value={formData.adminEmail || ""}
        onChangeText={(t) => setFormData((p: any) => ({ ...p, adminEmail: t }))}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        value={formData.adminPassword || ""}
        onChangeText={(t) =>
          setFormData((p: any) => ({ ...p, adminPassword: t }))
        }
        style={styles.input}
      />

      <TextInput
        placeholder="Phone (optional)"
        value={formData.adminPhone || ""}
        onChangeText={(t) => setFormData((p: any) => ({ ...p, adminPhone: t }))}
        style={styles.input}
      />

      <TextInput
        placeholder="NRC (optional)"
        value={formData.adminNrc || ""}
        onChangeText={(t) => setFormData((p: any) => ({ ...p, adminNrc: t }))}
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton} onPress={back}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CompanyStep2;

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
