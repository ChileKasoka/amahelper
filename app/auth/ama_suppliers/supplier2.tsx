import { useState } from "react";
import {
    Alert,
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SupplierFormData } from "./supplier1";

type SupplierStep2Props = {
  back: () => void;
  formData: SupplierFormData;
  setFormData: React.Dispatch<React.SetStateAction<SupplierFormData>>;
  onSubmit: () => void;
  loading?: boolean;
};

export default function SupplierStep2({
  back,
  formData,
  setFormData,
  onSubmit,
  loading = false,
}: SupplierStep2Props) {
  const [tpin, setTpin] = useState(formData.tpin || "");
  const [registrationNumber, setRegistrationNumber] = useState(
    formData.registrationNumber || "",
  );

  const [address, setAddress] = useState(formData.address || "");
  const [city, setCity] = useState(formData.city || "");
  const [province, setProvince] = useState(formData.province || "");
  const [postalCode, setPostalCode] = useState(formData.postalCode || "");

  const [latitude, setLatitude] = useState(formData.latitude || "");
  const [longitude, setLongitude] = useState(formData.longitude || "");

  const [category, setCategory] = useState(formData.category || "");
  const [productsSupplied, setProductsSupplied] = useState(
    formData.productsSupplied || "",
  );
  const [notes, setNotes] = useState(formData.notes || "");
  const [isActive, setIsActive] = useState(
    formData.isActive !== undefined ? formData.isActive : true,
  );

  const handleSubmit = () => {
    if (!address || !city || !province || !category) {
      Alert.alert(
        "Error",
        "Address, city, province, and category are required",
      );
      return;
    }

    setFormData((prev) => ({
      ...prev,
      tpin,
      registrationNumber,
      address,
      city,
      province,
      postalCode,
      latitude,
      longitude,
      category,
      productsSupplied,
      isActive,
      notes,
    }));

    onSubmit();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Supplier - Additional Details</Text>

      <TextInput
        placeholder="TPIN"
        value={tpin}
        onChangeText={setTpin}
        style={styles.input}
      />

      <TextInput
        placeholder="Registration Number"
        value={registrationNumber}
        onChangeText={setRegistrationNumber}
        style={styles.input}
      />

      <TextInput
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
        style={styles.input}
      />

      <TextInput
        placeholder="City"
        value={city}
        onChangeText={setCity}
        style={styles.input}
      />

      <TextInput
        placeholder="Province"
        value={province}
        onChangeText={setProvince}
        style={styles.input}
      />

      <TextInput
        placeholder="Postal Code"
        value={postalCode}
        onChangeText={setPostalCode}
        style={styles.input}
      />

      <TextInput
        placeholder="Latitude"
        value={latitude}
        onChangeText={setLatitude}
        keyboardType="numeric"
        style={styles.input}
      />

      <TextInput
        placeholder="Longitude"
        value={longitude}
        onChangeText={setLongitude}
        keyboardType="numeric"
        style={styles.input}
      />

      <TextInput
        placeholder="Category (e.g. Cleaning Materials, Electricals, Food)"
        value={category}
        onChangeText={setCategory}
        style={styles.input}
      />

      <TextInput
        placeholder="Products Supplied"
        value={productsSupplied}
        onChangeText={setProductsSupplied}
        style={[styles.input, { minHeight: 90, textAlignVertical: "top" }]}
        multiline
      />

      <TextInput
        placeholder="Notes"
        value={notes}
        onChangeText={setNotes}
        style={[styles.input, { minHeight: 90, textAlignVertical: "top" }]}
        multiline
      />

      <View style={styles.switchRow}>
        <Text style={styles.switchLabel}>Supplier Active</Text>
        <Switch value={isActive} onValueChange={setIsActive} />
      </View>

      <TouchableOpacity
        style={[styles.button, loading && { opacity: 0.7 }]}
        onPress={handleSubmit}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? "Submitting..." : "Create Supplier"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.secondaryButton]}
        onPress={back}
      >
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
  switchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    paddingVertical: 8,
  },
  switchLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },
  button: {
    backgroundColor: "#3b82f6",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  secondaryButton: {
    backgroundColor: "#6b7280",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});
