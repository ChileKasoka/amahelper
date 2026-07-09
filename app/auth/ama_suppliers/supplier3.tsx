import React, { useState } from "react";

import {
    ActivityIndicator,
    Alert,
    ScrollView,
    Text,
    TouchableOpacity,
} from "react-native";

import { registerUser } from "../../../api/auth";

import { StepProps } from "../../../types/registration";

const SupplierStep3: React.FC<StepProps> = ({
  back,
  formData,
  setFormData,
}) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    const payload = {
      ...formData,

      latitude: formData.latitude ? Number(formData.latitude) : undefined,

      longitude: formData.longitude ? Number(formData.longitude) : undefined,

      userType: "SUPPLIER",

      role: "ADMIN",
    };

    try {
      setLoading(true);

      console.log("SUPPLIER PAYLOAD", payload);

      await registerUser(payload as any);

      Alert.alert("Success", "Supplier registered successfully");

      setFormData({});
    } catch (error: any) {
      Alert.alert("Error", error.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{
        padding: 20,
        flexGrow: 1,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "700",
          marginBottom: 20,
        }}
      >
        Review Supplier
      </Text>

      <Text>Business: {formData.businessName}</Text>

      <Text>Email: {formData.email}</Text>

      <Text>Category: {formData.category}</Text>

      <Text>Products: {formData.productsSupplied}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Register Supplier</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton} onPress={back}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = {
  button: {
    backgroundColor: "#3b82f6",
    padding: 15,
    borderRadius: 8,
    alignItems: "center" as const,
    marginTop: 20,
  },

  backButton: {
    backgroundColor: "#6b7280",
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
    alignItems: "center" as const,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "700" as const,
  },
};

export default SupplierStep3;
