import React from "react";
import { ScrollView, Text, TextInput, TouchableOpacity } from "react-native";

import { StepProps } from "../../../types/registration";

const SupplierStep2: React.FC<StepProps> = ({
  next,
  back,
  formData,
  setFormData,
}) => {
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
        Supplier Details
      </Text>

      {[
        ["phone", "Phone"],
        ["alternativePhone", "Alternative Phone"],
        ["email", "Business Email"],
        ["password", "Business Password"],
        ["tpin", "TPIN"],
        ["supplierRegistrationNumber", "Supplier Registration Number"],
        ["address", "Address"],
        ["city", "City"],
        ["province", "Province"],
        ["postalCode", "Postal Code"],
        ["latitude", "Latitude"],
        ["longitude", "Longitude"],
        ["category", "Category"],
        ["productsSupplied", "Products Supplied"],
        ["notes", "Notes"],
      ].map(([field, label]) => (
        <TextInput
          key={field}
          placeholder={label}
          value={formData[field] || ""}
          onChangeText={(text) =>
            setFormData((prev: any) => ({
              ...prev,

              [field]: text,
            }))
          }
          style={styles.input}
        />
      ))}

      <TouchableOpacity style={styles.button} onPress={() => next?.()}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton} onPress={back}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
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

export default SupplierStep2;
