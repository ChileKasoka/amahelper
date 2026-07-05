import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { registerUser } from "../../../api/auth";
import { StepProps } from "../../../types/registration";

const servicesList = [
  "House Cleaning",
  "Office Cleaning",
  "Window Cleaning",
  "Deep Cleaning",
];

const HelperStep3: React.FC<StepProps> = ({ back, formData, setFormData }) => {
  const [loading, setLoading] = useState(false);

  const toggleService = (service: string) => {
    const current = formData.services || [];

    const updated = current.includes(service)
      ? current.filter((s: string) => s !== service)
      : [...current, service];

    setFormData((prev: any) => ({
      ...prev,
      services: updated,
    }));
  };

  // ✅ FINAL SUBMIT (LIKE CLIENT STEP 4)
  const handleSubmit = async () => {
    const {
      firstName,
      lastName,
      email,
      password,
      nrc,
      phone,
      gender,
      employmentType,
      services,
      address,
      baseSalary,
      commissionRate,
    } = formData;

    // validation
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !nrc ||
      !gender ||
      !employmentType ||
      !address ||
      !services?.length
    ) {
      Alert.alert("Error", "Please fill all required fields");
      return;
    }

    const payload = {
      firstName,
      lastName,
      email,
      password,
      phone,
      nrc,
      gender,
      employmentType,
      services,
      address,
      baseSalary,
      commissionRate,

      userType: "CLEANER",
      role: "CLEANER",
    };

    try {
      setLoading(true);

      console.log("HELPER REGISTER PAYLOAD:", payload);

      const res = await registerUser(payload as any);

      Alert.alert("Success", "Cleaner registered successfully!");

      // reset form
      setFormData({});
    } catch (err: any) {
      console.error("HELPER REGISTER ERROR:", err);

      Alert.alert(
        "Registration Failed",
        err?.message || "Something went wrong",
      );
    } finally {
      setLoading(false);
    }
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
          color: "#111827",
        }}
      >
        Cleaner Details
      </Text>

      {/* ADDRESS */}
      <TextInput
        placeholder="Address"
        value={formData.address || ""}
        onChangeText={(text) =>
          setFormData((prev: any) => ({ ...prev, address: text }))
        }
        style={{
          borderWidth: 1,
          borderColor: "#d1d5db",
          padding: 14,
          borderRadius: 8,
          marginBottom: 15,
          backgroundColor: "#fff",
        }}
      />

      {/* GENDER */}
      <TextInput
        placeholder="Gender (MALE / FEMALE)"
        value={formData.gender || ""}
        onChangeText={(text) =>
          setFormData((prev: any) => ({ ...prev, gender: text }))
        }
        style={{
          borderWidth: 1,
          borderColor: "#d1d5db",
          padding: 14,
          borderRadius: 8,
          marginBottom: 15,
          backgroundColor: "#fff",
        }}
      />

      {/* EMPLOYMENT TYPE */}
      <TextInput
        placeholder="Employment Type (FULL_TIME / PART_TIME)"
        value={formData.employmentType || ""}
        onChangeText={(text) =>
          setFormData((prev: any) => ({
            ...prev,
            employmentType: text,
          }))
        }
        style={{
          borderWidth: 1,
          borderColor: "#d1d5db",
          padding: 14,
          borderRadius: 8,
          marginBottom: 15,
          backgroundColor: "#fff",
        }}
      />

      {/* BASE SALARY */}
      <TextInput
        placeholder="Base Salary (optional)"
        keyboardType="numeric"
        value={formData.baseSalary?.toString() || ""}
        onChangeText={(text) =>
          setFormData((prev: any) => ({
            ...prev,
            baseSalary: text ? Number(text) : undefined,
          }))
        }
        style={{
          borderWidth: 1,
          borderColor: "#d1d5db",
          padding: 14,
          borderRadius: 8,
          marginBottom: 15,
          backgroundColor: "#fff",
        }}
      />

      {/* COMMISSION */}
      <TextInput
        placeholder="Commission Rate (optional)"
        keyboardType="numeric"
        value={formData.commissionRate?.toString() || ""}
        onChangeText={(text) =>
          setFormData((prev: any) => ({
            ...prev,
            commissionRate: text ? Number(text) : undefined,
          }))
        }
        style={{
          borderWidth: 1,
          borderColor: "#d1d5db",
          padding: 14,
          borderRadius: 8,
          marginBottom: 15,
          backgroundColor: "#fff",
        }}
      />

      {/* SERVICES */}
      <Text style={{ fontWeight: "700", marginBottom: 10 }}>Services</Text>

      {servicesList.map((service) => (
        <TouchableOpacity
          key={service}
          onPress={() => toggleService(service)}
          style={{
            padding: 14,
            borderWidth: 1,
            borderColor: "#d1d5db",
            borderRadius: 8,
            marginBottom: 10,
            backgroundColor: formData.services?.includes(service)
              ? "#3b82f6"
              : "#fff",
          }}
        >
          <Text
            style={{
              color: formData.services?.includes(service) ? "#fff" : "#111827",
              fontWeight: "600",
            }}
          >
            {service}
          </Text>
        </TouchableOpacity>
      ))}

      {/* SUBMIT BUTTON */}
      <TouchableOpacity
        onPress={handleSubmit}
        disabled={loading}
        style={{
          backgroundColor: loading ? "#93c5fd" : "#3b82f6",
          padding: 15,
          borderRadius: 8,
          alignItems: "center",
          marginTop: 20,
        }}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={{ color: "#fff", fontWeight: "700" }}>Submit</Text>
        )}
      </TouchableOpacity>

      {/* BACK */}
      <TouchableOpacity
        onPress={() => back?.()}
        style={{
          backgroundColor: "#6b7280",
          padding: 15,
          borderRadius: 8,
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "700" }}>Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default HelperStep3;
