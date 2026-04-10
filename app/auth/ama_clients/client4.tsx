// app/auth/ama_clients/client4.tsx
import React, { useState } from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { ClientPayload, registerUser } from "../../../api/auth";
import { StepProps } from "../../../types/registration";

const ClientStep4: React.FC<StepProps> = ({
  back,
  formData,
  setFormData,
}) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    const {
      firstName,
      lastName,
      email,
      password,
      nrc,
      phone,

      address,
      city,
      province,
      postalCode,
      alternativePhone,

      clientType,
      notes,
    } = formData;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !nrc ||
      !address ||
      !city ||
      !province
    ) {
      Alert.alert("Error", "Please fill in all required fields");
      return;
    }

    const payload: ClientPayload = {
      firstName,
      lastName,
      email,
      password,
      phone,

      nrc,

      address,
      city,
      province,
      postalCode,
      alternativePhone,

      clientType,
      notes,

      userType: "CLIENT",
      role: "CLIENT",
    };

    try {
      setLoading(true);

      const response = await registerUser(payload);

      console.log("REGISTER SUCCESS:", response);

      Alert.alert("Success", "Registration completed successfully!");

      setFormData?.({});
    } catch (err: any) {
      console.error("REGISTER ERROR:", err);

      Alert.alert(
        "Registration Failed",
        err?.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
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
            value={formData.address || ""}
            onChangeText={(text) =>
              setFormData?.({ ...formData, address: text })
            }
            style={styles.input}
          />

          <TextInput
            placeholder="City"
            value={formData.city || ""}
            onChangeText={(text) =>
              setFormData?.({ ...formData, city: text })
            }
            style={styles.input}
          />

          <TextInput
            placeholder="Province"
            value={formData.province || ""}
            onChangeText={(text) =>
              setFormData?.({ ...formData, province: text })
            }
            style={styles.input}
          />

          <TextInput
            placeholder="Postal Code (Optional)"
            value={formData.postalCode || ""}
            onChangeText={(text) =>
              setFormData?.({ ...formData, postalCode: text })
            }
            style={styles.input}
          />

          <TextInput
            placeholder="Alternative Phone (Optional)"
            value={formData.alternativePhone || ""}
            onChangeText={(text) =>
              setFormData?.({ ...formData, alternativePhone: text })
            }
            style={styles.input}
            keyboardType="phone-pad"
          />

          <TextInput
            placeholder="Client Type (Optional)"
            value={formData.clientType || ""}
            onChangeText={(text) =>
              setFormData?.({ ...formData, clientType: text })
            }
            style={styles.input}
          />

          <TextInput
            placeholder="Notes (Optional)"
            value={formData.notes || ""}
            onChangeText={(text) =>
              setFormData?.({ ...formData, notes: text })
            }
            style={[styles.input, { height: 90 }]}
            multiline
          />

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity
              onPress={back}
              style={[
                styles.button,
                {
                  backgroundColor: "#6b7280",
                  flex: 1,
                  marginRight: 10,
                },
              ]}
            >
              <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleSubmit}
              style={[styles.button, { flex: 1 }]}
              disabled={loading}
            >
              <Text style={styles.buttonText}>
                {loading ? "Submitting..." : "Submit"}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default ClientStep4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
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