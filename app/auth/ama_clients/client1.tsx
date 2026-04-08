// app/auth/ama_clients/client1.tsx
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useAuth } from "../../../context/AuthContext";

export default function Client1() {
  const router = useRouter();
  const { setRegisterData } = useAuth();

  const [phone, setPhone] = useState("");

  const handleNext = () => {
    if (!phone) {
      Alert.alert("Error", "Enter phone number");
      return;
    }

    setRegisterData((prev) => ({ ...prev, phone }));
    router.push("/auth/ama_clients/client2");
  };

  return (
    <View style={{
      flex: 1,
      backgroundColor: "#f9fafb", // light background
      justifyContent: "center",
      padding: 20,
    }}>
      <Text style={{
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#111827"
      }}>Enter Your Phone</Text>

      <TextInput
        value={phone}
        onChangeText={setPhone}
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
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}