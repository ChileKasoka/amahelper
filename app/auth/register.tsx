// app/auth/register.tsx
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function Register() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    nrc: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
    alternativePhone: "",
    notes: "",
  });

  const next = () => setStep((prev) => Math.min(prev + 1, 3));
  const back = () => setStep((prev) => Math.max(prev - 1, 1));

  // ========== API Call ==========
  const registerUser = async (data: any) => {
    try {
      const response = await fetch("http://localhost:8080/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const err = await response.text();
        throw new Error(err || "Registration failed");
      }

      const result = await response.json();
      return result; // should contain JWT token
    } catch (err: any) {
      throw new Error(err.message || "Network error");
    }
  };

  const handleSubmit = async () => {
    if (!formData.address || !formData.city || !formData.province) {
      Alert.alert("Error", "Please fill in all required fields");
      return;
    }

    setLoading(true);
    try {
      const payload = { ...formData, userType: "CLIENT", role: "CLIENT" };
      const result = await registerUser(payload);

      // Store JWT
      await AsyncStorage.setItem("jwtToken", result.token);

      Alert.alert("Success", "Registration completed");
      router.replace("/(tabs)/home");
    } catch (err: any) {
      Alert.alert("Error", err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // ================= STEP COMPONENTS =================
  const Step1 = () => (
    <View>
      <Text style={styles.title}>Personal Information</Text>
      <TextInput
        placeholder="First Name"
        value={formData.firstName}
        onChangeText={(text) => setFormData({ ...formData, firstName: text })}
        style={styles.input}
      />
      <TextInput
        placeholder="Last Name"
        value={formData.lastName}
        onChangeText={(text) => setFormData({ ...formData, lastName: text })}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={next}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );

  const Step2 = () => (
    <View>
      <Text style={styles.title}>Contact Information</Text>
      <TextInput
        placeholder="Email"
        value={formData.email}
        onChangeText={(text) => setFormData({ ...formData, email: text })}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />
      <TextInput
        placeholder="Phone"
        value={formData.phone}
        onChangeText={(text) => setFormData({ ...formData, phone: text })}
        keyboardType="phone-pad"
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={formData.password}
        onChangeText={(text) => setFormData({ ...formData, password: text })}
        secureTextEntry
        style={styles.input}
      />
      <TextInput
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChangeText={(text) =>
          setFormData({ ...formData, confirmPassword: text })
        }
        secureTextEntry
        style={styles.input}
      />
      <TextInput
        placeholder="NRC"
        value={formData.nrc}
        onChangeText={(text) => setFormData({ ...formData, nrc: text })}
        style={styles.input}
      />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity
          style={[styles.button, styles.backButton]}
          onPress={back}
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (!formData.email || !formData.password) {
              Alert.alert("Error", "Please fill in all required fields");
              return;
            }
            if (formData.password !== formData.confirmPassword) {
              Alert.alert("Error", "Passwords do not match");
              return;
            }
            next();
          }}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const Step3 = () => (
    <View>
      <Text style={styles.title}>Address & Details</Text>
      <TextInput
        placeholder="Address"
        value={formData.address}
        onChangeText={(text) => setFormData({ ...formData, address: text })}
        style={styles.input}
      />
      <TextInput
        placeholder="City"
        value={formData.city}
        onChangeText={(text) => setFormData({ ...formData, city: text })}
        style={styles.input}
      />
      <TextInput
        placeholder="Province"
        value={formData.province}
        onChangeText={(text) => setFormData({ ...formData, province: text })}
        style={styles.input}
      />
      <TextInput
        placeholder="Postal Code"
        value={formData.postalCode}
        onChangeText={(text) => setFormData({ ...formData, postalCode: text })}
        style={styles.input}
      />
      <TextInput
        placeholder="Alternative Phone"
        value={formData.alternativePhone}
        onChangeText={(text) =>
          setFormData({ ...formData, alternativePhone: text })
        }
        style={styles.input}
      />
      <TextInput
        placeholder="Notes (optional)"
        value={formData.notes}
        onChangeText={(text) => setFormData({ ...formData, notes: text })}
        style={styles.input}
        multiline
      />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity
          style={[styles.button, styles.backButton]}
          onPress={back}
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit}
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {loading ? "Submitting..." : "Submit"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  // ============ Render steps ============

  const renderStep = () => {
    if (step === 1) return <Step1 />;
    if (step === 2) return <Step2 />;
    if (step === 3) return <Step3 />;
    return null;
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        {renderStep()}

        <TouchableOpacity onPress={() => router.replace("/auth/login")}>
          <Text style={styles.linkText}>Already have an account? Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#f8fafc",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    color: "#0f172a",
  },
  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  button: {
    backgroundColor: "#3b82f6",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    flex: 1,
    margin: 5,
  },
  backButton: { backgroundColor: "#64748b" },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  linkText: {
    textAlign: "center",
    marginTop: 20,
    color: "#3b82f6",
    fontWeight: "500",
  },
});
