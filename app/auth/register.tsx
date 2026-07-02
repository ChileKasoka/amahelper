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
  TouchableOpacity,
  View,
} from "react-native";

// Import step components
import ClientStep1 from "./ama_clients/client1";
import ClientStep2 from "./ama_clients/client2";
import ClientStep3 from "./ama_clients/client3";
import ClientStep4 from "./ama_clients/client4";

import HelperStep1 from "./ama_helpers/helper1";
import HelperStep2 from "./ama_helpers/helper2";
import HelperStep3 from "./ama_helpers/helper3";

import CompanyStep1 from "./ama_companies/company1";
import CompanyStep2 from "./ama_companies/company2";
import CompanyStep3 from "./ama_companies/company3";

type UserType = "CLIENT" | "CLEANER" | "COMPANY_ADMIN";

export default function Register() {
  const router = useRouter();
  const [userType, setUserType] = useState<UserType | null>(null);
  const [step, setStep] = useState<number>(1);
  const [loading, setLoading] = useState(false);

  // Shared form data per type
  const [clientData, setClientData] = useState<any>({});
  const [helperData, setHelperData] = useState<any>({});
  const [companyData, setCompanyData] = useState<any>({});

  const next = () => setStep((prev) => prev + 1);
  const back = () => setStep((prev) => Math.max(prev - 1, 1));

  // API call
  const registerUser = async (data: any) => {
    try {
      const response = await fetch("http://192.168.1.177:8080/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const err = await response.text();
        throw new Error(err || "Registration failed");
      }

      const result = await response.json();
      return result; // JWT token
    } catch (err: any) {
      throw new Error(err.message || "Network error");
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      let payload: any = {};
      if (userType === "CLIENT")
        payload = { ...clientData, userType, role: "CLIENT" };
      if (userType === "CLEANER")
        payload = { ...helperData, userType, role: "CLEANER" };
      if (userType === "COMPANY_ADMIN")
        payload = { ...companyData, userType, role: "COMPANY_ADMIN" };

      const result = await registerUser(payload);
      await AsyncStorage.setItem("jwtToken", result.token);

      Alert.alert("Success", "Registration completed");
      router.replace("/(tabs)/home");
    } catch (err: any) {
      Alert.alert("Error", err.message);
    } finally {
      setLoading(false);
    }
  };

  // Step rendering
  const renderStep = () => {
    if (!userType) {
      // User type selection screen
      return (
        <View style={{ alignItems: "center" }}>
          <Text style={styles.title}>Select Account Type</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setUserType("CLIENT")}
          >
            <Text style={styles.buttonText}>Hire Helper</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setUserType("CLEANER")}
          >
            <Text style={styles.buttonText}>Work as Helper</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setUserType("COMPANY_ADMIN")}
          >
            <Text style={styles.buttonText}>Company</Text>
          </TouchableOpacity>
        </View>
      );
    }

    // Render steps per user type
    if (userType === "CLIENT") {
      switch (step) {
        case 1:
          return (
            <ClientStep1
              next={next}
              formData={clientData}
              setFormData={setClientData}
            />
          );
        case 2:
          return (
            <ClientStep2
              next={next}
              back={back}
              formData={clientData}
              setFormData={setClientData}
            />
          );
        case 3:
          return (
            <ClientStep3
              next={next}
              back={back}
              formData={clientData}
              setFormData={setClientData}
            />
          );
        case 4:
          return (
            <ClientStep4
              back={back}
              formData={clientData}
              setFormData={setClientData}
              onSubmit={handleSubmit}
              loading={loading}
            />
          );
      }
    }

    if (userType === "CLEANER") {
      switch (step) {
        case 1:
          return (
            <HelperStep1
              next={next}
              formData={helperData}
              setFormData={setHelperData}
            />
          );
        case 2:
          return (
            <HelperStep2
              next={next}
              back={back}
              formData={helperData}
              setFormData={setHelperData}
            />
          );
        case 3:
          return (
            <HelperStep3
              next={next}
              back={back}
              formData={helperData}
              setFormData={helperData}
              onSubmit={handleSubmit}
              loading={loading}
            />
          );
      }
    }

    if (userType === "COMPANY_ADMIN") {
      switch (step) {
        case 1:
          return (
            <CompanyStep1
              next={next}
              formData={companyData}
              setFormData={setCompanyData}
            />
          );
        case 2:
          return (
            <CompanyStep2
              next={next}
              back={back}
              formData={companyData}
              setFormData={setCompanyData}
            />
          );
        case 3:
          return (
            <CompanyStep3
              back={back}
              formData={companyData}
              setFormData={companyData}
              onSubmit={handleSubmit}
              loading={loading}
            />
          );
      }
    }

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
  button: {
    backgroundColor: "#3b82f6",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 5,
  },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  linkText: {
    textAlign: "center",
    marginTop: 20,
    color: "#3b82f6",
    fontWeight: "500",
  },
});
