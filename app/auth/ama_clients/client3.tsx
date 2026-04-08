import { useRouter } from "expo-router";
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
import { useAuth } from "../../../context/AuthContext";

export default function RegisterDetails() {
  const router = useRouter();
  const { registerData, setRegisterData } = useAuth();

  const [firstName, setFirstName] = useState(registerData.firstName || "");
  const [lastName, setLastName] = useState(registerData.lastName || "");
  const [email, setEmail] = useState(registerData.email || "");
  const [nrc, setNrc] = useState(registerData.nrc || "");
  const [password, setPassword] = useState(registerData.password || "");

  const handleNext = () => {
    if (!firstName || !lastName || !email || !nrc || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    setRegisterData({
      ...registerData,
      firstName,
      lastName,
      email,
      nrc,
      password,
    });

    router.push("/auth/ama_clients/client4");
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
          <Text style={styles.title}>Personal & Security Details</Text>

          <TextInput
            placeholder="First Name"
            value={firstName}
            onChangeText={setFirstName}
            style={styles.input}
            placeholderTextColor="#6b7280"
          />
          <TextInput
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
            style={styles.input}
            placeholderTextColor="#6b7280"
          />
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
            placeholderTextColor="#6b7280"
          />
          <TextInput
            placeholder="NRC"
            value={nrc}
            onChangeText={setNrc}
            style={styles.input}
            placeholderTextColor="#6b7280"
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
            placeholderTextColor="#6b7280"
          />

          <TouchableOpacity style={styles.button} onPress={handleNext}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5", // Light background
  },
  scrollContainer: {
    padding: 20,
    flexGrow: 1,
    justifyContent: "center",
    backgroundColor: "#f5f5f5", // Ensure ScrollView is light too
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