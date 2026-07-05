import React from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { StepProps } from "../../../types/registration";

const HelperStep1: React.FC<StepProps> = ({ next, formData, setFormData }) => {
  const handleNext = () => {
    if (!formData.phone) {
      Alert.alert("Error", "Phone number required");
      return;
    }

    // guard against next being undefined
    next?.();
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f9fafb",
        justifyContent: "center",
        padding: 20,
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
        Enter Your Phone
      </Text>

      <TextInput
        value={formData.phone || ""}
        onChangeText={(text) =>
          setFormData((prev: any) => ({
            ...prev,
            phone: text,
          }))
        }
        placeholder="097XXXXXXX"
        keyboardType="phone-pad"
        style={{
          borderWidth: 1,
          borderColor: "#d1d5db",
          borderRadius: 8,
          padding: 12,
          marginBottom: 20,
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
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HelperStep1;
