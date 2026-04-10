// app/auth/ama_helpers/helper1.tsx
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type HelperStep1Props = {
  next: () => void;
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
};

export default function HelperStep1({ next, formData, setFormData }: HelperStep1Props) {
  const router = useRouter();

  const [phone, setPhone] = useState(formData.phone || "");
  const [otp, setOtp] = useState(formData.otp || "");

  const handleNext = () => {
    if (!phone || !otp) {
      Alert.alert("Error", "Phone and OTP required");
      return;
    }

    setFormData({
      ...formData,
      phone,
      otp,
    });

    next();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Phone Verification</Text>

      <TextInput
        placeholder="Phone Number"
        value={phone}
        onChangeText={setPhone}
        style={styles.input}
        keyboardType="phone-pad"
      />

      <TextInput
        placeholder="OTP"
        value={otp}
        onChangeText={setOtp}
        style={styles.input}
        keyboardType="number-pad"
      />

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
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

  button: {
    backgroundColor: "#3b82f6",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  label: {
    fontWeight: "600",
    marginBottom: 10,
    color: "#374151",
  },

  serviceBox: {
    padding: 14,
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: "#fff",
  },

  serviceBoxSelected: {
    backgroundColor: "#3b82f6",
    borderColor: "#3b82f6",
  },

  serviceText: {
    color: "#111827",
  },

  serviceTextSelected: {
    color: "#fff",
    fontWeight: "bold",
  },
});