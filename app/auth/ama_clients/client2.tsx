import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useAuth } from "../../../context/AuthContext";

export default function Client3() {
  const router = useRouter();
  const { registerData, setRegisterData } = useAuth();

  const [firstName, setFirstName] = useState(registerData.firstName || "");
  const [lastName, setLastName] = useState(registerData.lastName || "");
  const [email, setEmail] = useState(registerData.email || "");

  const handleNext = () => {
    if (!firstName || !lastName || !email) {
      Alert.alert("Error", "Fill all fields");
      return;
    }

    setRegisterData((prev) => ({
      ...prev,
      firstName,
      lastName,
      email,
    }));

    router.push("/auth/ama_clients/client3");
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#f9fafb" }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
    >
      {/* Tap outside to dismiss keyboard */}
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
            value={firstName}
            onChangeText={setFirstName}
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
            value={lastName}
            onChangeText={setLastName}
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
            value={email}
            onChangeText={setEmail}
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
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}