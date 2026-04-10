// app/auth/ama_clients/client2.tsx
import React from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { StepProps } from "../../../types/registration";

const ClientStep2: React.FC<StepProps> = ({
  next,
  back,
  formData,
  setFormData,
}) => {
  const handleNext = () => {
    if (!formData.firstName || !formData.lastName || !formData.email) {
      Alert.alert("Error", "Fill all fields");
      return;
    }
    next?.();
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#f9fafb" }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <ScrollView
          contentContainerStyle={{
            padding: 20,
            flexGrow: 1,
            justifyContent: "center",
          }}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
            Enter Your Details
          </Text>

          <TextInput
            placeholder="First Name"
            value={formData.firstName || ""}
            onChangeText={(text) =>
              setFormData({ ...formData, firstName: text })
            }
            style={{
              borderWidth: 1,
              borderColor: "#d1d5db",
              borderRadius: 8,
              padding: 12,
              marginBottom: 15,
              backgroundColor: "#fff",
            }}
          />

          <TextInput
            placeholder="Last Name"
            value={formData.lastName || ""}
            onChangeText={(text) =>
              setFormData({ ...formData, lastName: text })
            }
            style={{
              borderWidth: 1,
              borderColor: "#d1d5db",
              borderRadius: 8,
              padding: 12,
              marginBottom: 15,
              backgroundColor: "#fff",
            }}
          />

          <TextInput
            placeholder="Email"
            value={formData.email || ""}
            onChangeText={(text) => setFormData({ ...formData, email: text })}
            keyboardType="email-address"
            style={{
              borderWidth: 1,
              borderColor: "#d1d5db",
              borderRadius: 8,
              padding: 12,
              marginBottom: 20,
              backgroundColor: "#fff",
            }}
          />

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity
              onPress={back}
              style={{
                backgroundColor: "#6b7280",
                padding: 15,
                borderRadius: 8,
                alignItems: "center",
                flex: 1,
                marginRight: 10,
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
                Back
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleNext}
              style={{
                backgroundColor: "#3b82f6",
                padding: 15,
                borderRadius: 8,
                alignItems: "center",
                flex: 1,
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
                Continue
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default ClientStep2;
