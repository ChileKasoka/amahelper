import React from "react";
import {
  Alert,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { StepProps } from "../../../types/registration";

const HelperStep2: React.FC<StepProps> = ({
  next,
  back,
  formData,
  setFormData,
}) => {
  const handleNext = () => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.nrc ||
      !formData.password
    ) {
      Alert.alert("Error", "Fill all fields");
      return;
    }

    next?.();
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#f5f5f5",
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 20,
          color: "#111827",
        }}
      >
        Personal Details
      </Text>

      <TextInput
        placeholder="First Name"
        value={formData.firstName || ""}
        onChangeText={(text) =>
          setFormData((prev: any) => ({
            ...prev,
            firstName: text,
          }))
        }
        style={{
          borderWidth: 1,
          borderColor: "#d1d5db",
          borderRadius: 8,
          padding: 14,
          marginBottom: 15,
          backgroundColor: "#fff",
        }}
      />

      <TextInput
        placeholder="Last Name"
        value={formData.lastName || ""}
        onChangeText={(text) =>
          setFormData((prev: any) => ({
            ...prev,
            lastName: text,
          }))
        }
        style={{
          borderWidth: 1,
          borderColor: "#d1d5db",
          borderRadius: 8,
          padding: 14,
          marginBottom: 15,
          backgroundColor: "#fff",
        }}
      />

      <TextInput
        placeholder="Email"
        value={formData.email || ""}
        onChangeText={(text) =>
          setFormData((prev: any) => ({
            ...prev,
            email: text,
          }))
        }
        keyboardType="email-address"
        style={{
          borderWidth: 1,
          borderColor: "#d1d5db",
          borderRadius: 8,
          padding: 14,
          marginBottom: 15,
          backgroundColor: "#fff",
        }}
      />

      <TextInput
        placeholder="NRC"
        value={formData.nrc || ""}
        onChangeText={(text) =>
          setFormData((prev: any) => ({
            ...prev,
            nrc: text,
          }))
        }
        style={{
          borderWidth: 1,
          borderColor: "#d1d5db",
          borderRadius: 8,
          padding: 14,
          marginBottom: 15,
          backgroundColor: "#fff",
        }}
      />

      <TextInput
        placeholder="Password"
        value={formData.password || ""}
        onChangeText={(text) =>
          setFormData((prev: any) => ({
            ...prev,
            password: text,
          }))
        }
        secureTextEntry
        style={{
          borderWidth: 1,
          borderColor: "#d1d5db",
          borderRadius: 8,
          padding: 14,
          marginBottom: 15,
          backgroundColor: "#fff",
        }}
      />

      <TouchableOpacity
        onPress={handleNext}
        style={{
          backgroundColor: "#3b82f6",
          padding: 15,
          borderRadius: 8,
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>Continue</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={back}
        style={{
          backgroundColor: "#6b7280",
          padding: 15,
          borderRadius: 8,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default HelperStep2;
