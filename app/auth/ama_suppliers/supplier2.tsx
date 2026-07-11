import React from "react";
import { ScrollView, Text, TextInput, TouchableOpacity } from "react-native";

import LocationPicker from "../../../components/LocationPicker";

const SupplierStep2: React.FC<any> = ({
  next,
  back,
  formData,
  setFormData,
}) => {
  const updateField = (field: string, value: string) => {
    setFormData((prev: any) => ({
      ...prev,
      [field]: value,
    }));
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
        Supplier Details
      </Text>

      <TextInput
        placeholder="Phone"
        value={formData.phone || ""}
        onChangeText={(text) => updateField("phone", text)}
        style={styles.input}
      />

      <TextInput
        placeholder="Alternative Phone"
        value={formData.alternativePhone || ""}
        onChangeText={(text) => updateField("alternativePhone", text)}
        style={styles.input}
      />

      <TextInput
        placeholder="Business Email"
        keyboardType="email-address"
        value={formData.email || ""}
        onChangeText={(text) => updateField("email", text)}
        style={styles.input}
      />

      <TextInput
        placeholder="Business Password"
        secureTextEntry
        value={formData.password || ""}
        onChangeText={(text) => updateField("password", text)}
        style={styles.input}
      />

      <TextInput
        placeholder="TPIN"
        value={formData.tpin || ""}
        onChangeText={(text) => updateField("tpin", text)}
        style={styles.input}
      />

      <TextInput
        placeholder="Supplier Registration Number"
        value={formData.supplierRegistrationNumber || ""}
        onChangeText={(text) => updateField("supplierRegistrationNumber", text)}
        style={styles.input}
      />

      <TextInput
        placeholder="Address"
        value={formData.address || ""}
        onChangeText={(text) => updateField("address", text)}
        style={styles.input}
      />

      <TextInput
        placeholder="City"
        value={formData.city || ""}
        onChangeText={(text) => updateField("city", text)}
        style={styles.input}
      />

      <TextInput
        placeholder="Province"
        value={formData.province || ""}
        onChangeText={(text) => updateField("province", text)}
        style={styles.input}
      />

      <TextInput
        placeholder="Postal Code"
        value={formData.postalCode || ""}
        onChangeText={(text) => updateField("postalCode", text)}
        style={styles.input}
      />

      <Text
        style={{
          fontSize: 18,
          fontWeight: "700",
          marginBottom: 10,
        }}
      >
        Supplier Location
      </Text>

      <LocationPicker
        latitude={formData.latitude}
        longitude={formData.longitude}
        onLocationSelected={(location) => {
          setFormData((prev: any) => ({
            ...prev,

            latitude: location.latitude,

            longitude: location.longitude,
          }));
        }}
      />

      <TextInput
        placeholder="Category"
        value={formData.category || ""}
        onChangeText={(text) => updateField("category", text)}
        style={styles.input}
      />

      <TextInput
        placeholder="Products Supplied"
        value={formData.productsSupplied || ""}
        onChangeText={(text) => updateField("productsSupplied", text)}
        style={styles.input}
      />

      <TextInput
        placeholder="Notes"
        value={formData.notes || ""}
        onChangeText={(text) => updateField("notes", text)}
        style={styles.input}
      />

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

export default SupplierStep2;
