import { useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { registerUser } from "../../../api/auth";
import { useAuth } from "../../../context/AuthContext";

export default function RegisterAddress() {
  const { registerData, clearRegisterData } = useAuth();

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");

  const handleSubmit = async () => {
    if (
      !registerData.phone ||
      !registerData.otp ||
      !registerData.firstName ||
      !registerData.lastName ||
      !registerData.email ||
      !registerData.nrc ||
      !registerData.password
    ) {
      Alert.alert(
        "Error",
        "Missing registration data. Please restart registration."
      );
      return;
    }

    if (!address || !city || !province) {
      Alert.alert("Error", "Please fill all address fields");
      return;
    }

    const payload = {
      phone: registerData.phone,
      otp: registerData.otp,
      firstName: registerData.firstName,
      lastName: registerData.lastName,
      email: registerData.email,
      nrc: registerData.nrc,
      password: registerData.password,

      address,
      city,
      province,

      userType: "CLIENT",
      role: "CLIENT",
    };

    try {
      await registerUser(payload);

      clearRegisterData();

      Alert.alert("Success", "Registration Complete");
    } catch (err) {
      Alert.alert("Error", "Registration failed");
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.title}>Address Details</Text>

          <TextInput
            placeholder="Address"
            value={address}
            onChangeText={setAddress}
            style={styles.input}
            placeholderTextColor="#6b7280"
          />

          <TextInput
            placeholder="City"
            value={city}
            onChangeText={setCity}
            style={styles.input}
            placeholderTextColor="#6b7280"
          />

          <TextInput
            placeholder="Province"
            value={province}
            onChangeText={setProvince}
            style={styles.input}
            placeholderTextColor="#6b7280"
          />

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit Registration</Text>
          </TouchableOpacity>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5", // light theme background
  },
  scrollContainer: {
    padding: 20,
    flexGrow: 1,
    justifyContent: "center",
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
    padding: 12,
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
});