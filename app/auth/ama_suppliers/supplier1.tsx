import React from "react";
import {
    Alert,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
} from "react-native";

import { StepProps } from "../../../types/registration";

const SupplierStep1: React.FC<StepProps> = ({
  next,
  back,
  formData,
  setFormData,
}) => {
  const handleNext = () => {
    if (
      !formData.adminFirstName ||
      !formData.adminLastName ||
      !formData.adminEmail ||
      !formData.adminPassword ||
      !formData.adminNrc ||
      !formData.businessName
    ) {
      Alert.alert("Error", "Please fill all required supplier admin fields");

      return;
    }

    next?.();
  };

  return (
    <ScrollView
      contentContainerStyle={{
        padding: 20,
        flexGrow: 1,
        backgroundColor: "#f9fafb",
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "700",
          marginBottom: 20,
        }}
      >
        Supplier Information
      </Text>

      <TextInput
        placeholder="Admin First Name"
        value={formData.adminFirstName || ""}
        onChangeText={(text) =>
          setFormData((prev: any) => ({
            ...prev,
            adminFirstName: text,
          }))
        }
        style={styles.input}
      />

      <TextInput
        placeholder="Admin Last Name"
        value={formData.adminLastName || ""}
        onChangeText={(text) =>
          setFormData((prev: any) => ({
            ...prev,
            adminLastName: text,
          }))
        }
        style={styles.input}
      />

      <TextInput
        placeholder="Admin Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={formData.adminEmail || ""}
        onChangeText={(text) =>
          setFormData((prev: any) => ({
            ...prev,
            adminEmail: text,
          }))
        }
        style={styles.input}
      />

      <TextInput
        placeholder="Admin Password"
        secureTextEntry
        value={formData.adminPassword || ""}
        onChangeText={(text) =>
          setFormData((prev: any) => ({
            ...prev,
            adminPassword: text,
          }))
        }
        style={styles.input}
      />

      <TextInput
        placeholder="Admin Phone"
        keyboardType="phone-pad"
        value={formData.adminPhone || ""}
        onChangeText={(text) =>
          setFormData((prev: any) => ({
            ...prev,
            adminPhone: text,
          }))
        }
        style={styles.input}
      />

      <TextInput
        placeholder="Admin NRC"
        value={formData.adminNrc || ""}
        onChangeText={(text) =>
          setFormData((prev: any) => ({
            ...prev,
            adminNrc: text,
          }))
        }
        style={styles.input}
      />

      <TextInput
        placeholder="Business Name"
        value={formData.businessName || ""}
        onChangeText={(text) =>
          setFormData((prev: any) => ({
            ...prev,
            businessName: text,
          }))
        }
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      {back && (
        <TouchableOpacity style={styles.backButton} onPress={back}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

const styles = {
  input: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
    padding: 14,
    marginBottom: 15,
    backgroundColor: "#fff",
  },

  button: {
    backgroundColor: "#3b82f6",
    padding: 15,
    borderRadius: 8,
    alignItems: "center" as const,
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

export default SupplierStep1;
