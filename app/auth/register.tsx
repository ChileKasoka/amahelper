// app/auth/register.tsx

import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// API
import { registerUser } from "@/api/auth";

// CLIENT
import ClientStep1 from "./ama_clients/client1";
import ClientStep2 from "./ama_clients/client2";
import ClientStep3 from "./ama_clients/client3";
import ClientStep4 from "./ama_clients/client4";

// HELPER
import HelperStep1 from "./ama_helpers/helper1";
import HelperStep2 from "./ama_helpers/helper2";
import HelperStep3 from "./ama_helpers/helper3";

// COMPANY
import CompanyStep1 from "./ama_companies/company1";
import CompanyStep2 from "./ama_companies/company2";
import CompanyStep3 from "./ama_companies/company3";

// SUPPLIER
import SupplierStep1 from "./ama_suppliers/supplier1";
import SupplierStep2 from "./ama_suppliers/supplier2";
import SupplierStep3 from "./ama_suppliers/supplier3";

type UserType = "CLIENT" | "CLEANER" | "COMPANY_ADMIN" | "SUPPLIER";

export default function Register() {
  const router = useRouter();

  const [userType, setUserType] = useState<UserType | null>(null);

  const [step, setStep] = useState(1);

  const [loading, setLoading] = useState(false);

  const [clientData, setClientData] = useState<any>({});

  const [helperData, setHelperData] = useState<any>({});

  const [companyData, setCompanyData] = useState<any>({});

  const [supplierData, setSupplierData] = useState<any>({});

  const next = () => {
    setStep((prev) => prev + 1);
  };

  const back = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  // ================= COMPANY SUBMIT =================

  const submitCompany = async () => {
    try {
      setLoading(true);

      const payload = {
        ...companyData,

        userType: "COMPANY_ADMIN",

        role: "ADMIN",
      };

      console.log("COMPANY REGISTER:", JSON.stringify(payload, null, 2));

      const response = await registerUser(payload);

      console.log("REGISTER SUCCESS:", response);

      Alert.alert("Success", "Company account created successfully", [
        {
          text: "Login",
          onPress: () => {
            router.replace("/auth/login");
          },
        },
      ]);
    } catch (error: any) {
      console.log("REGISTER ERROR", error);

      Alert.alert("Registration Failed", error.message);
    } finally {
      setLoading(false);
    }
  };

  const renderStep = () => {
    // ================= ACCOUNT TYPE =================

    if (!userType) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Create Account</Text>

          <Text style={styles.subtitle}>
            Choose how you want to use the platform
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setUserType("CLIENT");
              setStep(1);
            }}
          >
            <Text style={styles.buttonText}>Hire a Helper</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setUserType("CLEANER");
              setStep(1);
            }}
          >
            <Text style={styles.buttonText}>Work as Helper</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setUserType("COMPANY_ADMIN");
              setStep(1);
            }}
          >
            <Text style={styles.buttonText}>Register Company</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setUserType("SUPPLIER");
              setStep(1);
            }}
          >
            <Text style={styles.buttonText}>Become Supplier</Text>
          </TouchableOpacity>
        </View>
      );
    }

    // ================= CLIENT =================

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
            />
          );
      }
    }

    // ================= CLEANER =================

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
              back={back}
              formData={helperData}
              setFormData={setHelperData}
            />
          );
      }
    }

    // ================= COMPANY =================

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
              setFormData={setCompanyData}
              onSubmit={submitCompany}
              loading={loading}
            />
          );
      }
    }

    // ================= SUPPLIER =================

    if (userType === "SUPPLIER") {
      switch (step) {
        case 1:
          return (
            <SupplierStep1
              next={next}
              back={back}
              formData={supplierData}
              setFormData={setSupplierData}
            />
          );

        case 2:
          return (
            <SupplierStep2
              next={next}
              back={back}
              formData={supplierData}
              setFormData={setSupplierData}
            />
          );

        case 3:
          return (
            <SupplierStep3
              back={back}
              formData={supplierData}
              setFormData={setSupplierData}
            />
          );
      }
    }

    return null;
  };

  return (
    <KeyboardAvoidingView
      style={styles.wrapper}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {renderStep()}

      <TouchableOpacity onPress={() => router.replace("/auth/login")}>
        <Text style={styles.link}>Already have an account? Login</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#0f172a",
    marginBottom: 10,
  },

  subtitle: {
    color: "#64748b",
    marginBottom: 30,
  },

  button: {
    width: "90%",
    backgroundColor: "#2563eb",
    padding: 16,
    borderRadius: 14,
    marginVertical: 8,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "700",
    textAlign: "center",
    fontSize: 16,
  },

  link: {
    textAlign: "center",
    margin: 20,
    color: "#2563eb",
    fontWeight: "600",
  },
});
