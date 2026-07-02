import { useState } from "react";
import { Alert, SafeAreaView, StyleSheet, View } from "react-native";
import SupplierStep1, { SupplierFormData } from "./supplier1";
import SupplierStep2 from "./supplier2";

const API_BASE_URL = "http://YOUR_IP_ADDRESS:8080";
// Example:
// const API_BASE_URL = "http://192.168.100.10:8080";

export default function SupplierRegisterScreen() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<SupplierFormData>({
    businessName: "",
    contactPerson: "",
    phone: "",
    alternativePhone: "",
    email: "",

    tpin: "",
    registrationNumber: "",

    address: "",
    city: "",
    province: "",
    postalCode: "",

    latitude: "",
    longitude: "",

    category: "",
    productsSupplied: "",
    isActive: true,
    notes: "",
  });

  const next = () => setStep((prev) => prev + 1);
  const back = () => setStep((prev) => prev - 1);

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const payload = {
        businessName: formData.businessName,
        contactPerson: formData.contactPerson,
        phone: formData.phone,
        alternativePhone: formData.alternativePhone,
        email: formData.email,

        tpin: formData.tpin,
        registrationNumber: formData.registrationNumber,

        address: formData.address,
        city: formData.city,
        province: formData.province,
        postalCode: formData.postalCode,

        latitude: formData.latitude ? Number(formData.latitude) : null,
        longitude: formData.longitude ? Number(formData.longitude) : null,

        category: formData.category,
        productsSupplied: formData.productsSupplied,
        isActive: formData.isActive,
        notes: formData.notes,

        // Include this only if your backend expects it from frontend
        // userId: formData.userId,
      };

      const response = await fetch(`${API_BASE_URL}/api/suppliers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const responseText = await response.text();

      if (!response.ok) {
        throw new Error(responseText || "Failed to create supplier");
      }

      Alert.alert("Success", "Supplier created successfully");

      setFormData({
        businessName: "",
        contactPerson: "",
        phone: "",
        alternativePhone: "",
        email: "",

        tpin: "",
        registrationNumber: "",

        address: "",
        city: "",
        province: "",
        postalCode: "",

        latitude: "",
        longitude: "",

        category: "",
        productsSupplied: "",
        isActive: true,
        notes: "",
      });

      setStep(1);
    } catch (error: any) {
      Alert.alert("Error", error.message || "Failed to create supplier");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {step === 1 && (
          <SupplierStep1
            next={next}
            formData={formData}
            setFormData={setFormData}
          />
        )}

        {step === 2 && (
          <SupplierStep2
            back={back}
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleSubmit}
            loading={loading}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  container: {
    flex: 1,
  },
});
