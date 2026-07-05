// app/auth/ama_companies/company1.tsx
import React from "react";
import {
  Alert,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { StepProps } from "../../../types/registration";

const CompanyStep1: React.FC<StepProps> = ({
  next,
  back,
  formData,
  setFormData,
}) => {
  const handleNext = () => {
    const {
      companyName,
      companyType,
      registrationNumber,
      companyEmail,
      companyPhone,
      companyAddress,
    } = formData;

    if (
      !companyName ||
      !companyType ||
      !registrationNumber ||
      !companyEmail ||
      !companyPhone ||
      !companyAddress
    ) {
      Alert.alert("Error", "Please fill in all company fields");
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
          color: "#111827",
        }}
      >
        Company Information
      </Text>

      <TextInput
        placeholder="Company Name"
        value={formData.companyName || ""}
        onChangeText={(text) =>
          setFormData((prev: any) => ({
            ...prev,
            companyName: text,
          }))
        }
        style={{
          borderWidth: 1,
          borderColor: "#d1d5db",
          borderRadius: 8,
          padding: 14,
          marginBottom: 15,
          backgroundColor: "#fff",
          color: "#111827",
        }}
      />

      <TextInput
        placeholder="Company Type (PRIVATE / GOVERNMENT / NGO)"
        value={formData.companyType || ""}
        onChangeText={(text) =>
          setFormData((prev: any) => ({
            ...prev,
            companyType: text.toUpperCase(),
          }))
        }
        style={{
          borderWidth: 1,
          borderColor: "#d1d5db",
          borderRadius: 8,
          padding: 14,
          marginBottom: 15,
          backgroundColor: "#fff",
          color: "#111827",
        }}
      />

      <TextInput
        placeholder="Registration Number"
        value={formData.registrationNumber || ""}
        onChangeText={(text) =>
          setFormData((prev: any) => ({
            ...prev,
            registrationNumber: text,
          }))
        }
        style={{
          borderWidth: 1,
          borderColor: "#d1d5db",
          borderRadius: 8,
          padding: 14,
          marginBottom: 15,
          backgroundColor: "#fff",
          color: "#111827",
        }}
      />

      <TextInput
        placeholder="Company Email"
        value={formData.companyEmail || ""}
        onChangeText={(text) =>
          setFormData((prev: any) => ({
            ...prev,
            companyEmail: text,
          }))
        }
        keyboardType="email-address"
        autoCapitalize="none"
        style={{
          borderWidth: 1,
          borderColor: "#d1d5db",
          borderRadius: 8,
          padding: 14,
          marginBottom: 15,
          backgroundColor: "#fff",
          color: "#111827",
        }}
      />

      <TextInput
        placeholder="Company Phone"
        value={formData.companyPhone || ""}
        onChangeText={(text) =>
          setFormData((prev: any) => ({
            ...prev,
            companyPhone: text,
          }))
        }
        keyboardType="phone-pad"
        style={{
          borderWidth: 1,
          borderColor: "#d1d5db",
          borderRadius: 8,
          padding: 14,
          marginBottom: 15,
          backgroundColor: "#fff",
          color: "#111827",
        }}
      />

      <TextInput
        placeholder="Company Address"
        value={formData.companyAddress || ""}
        onChangeText={(text) =>
          setFormData((prev: any) => ({
            ...prev,
            companyAddress: text,
          }))
        }
        style={{
          borderWidth: 1,
          borderColor: "#d1d5db",
          borderRadius: 8,
          padding: 14,
          marginBottom: 15,
          backgroundColor: "#fff",
          color: "#111827",
        }}
      />

      <TouchableOpacity
        style={{
          backgroundColor: "#3b82f6",
          padding: 15,
          borderRadius: 8,
          alignItems: "center",
          marginTop: 10,
        }}
        onPress={handleNext}
      >
        <Text style={{ color: "#fff", fontWeight: "700", fontSize: 16 }}>
          Continue
        </Text>
      </TouchableOpacity>

      {back && (
        <TouchableOpacity
          style={{
            backgroundColor: "#6b7280",
            padding: 15,
            borderRadius: 8,
            alignItems: "center",
            marginTop: 10,
          }}
          onPress={back}
        >
          <Text style={{ color: "#fff", fontWeight: "700", fontSize: 16 }}>
            Back
          </Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

export default CompanyStep1;
