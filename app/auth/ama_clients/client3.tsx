// app/auth/ama_clients/client3.tsx
import React from "react";
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
  View,
} from "react-native";

interface FormData {
  firstName?: string;
  lastName?: string;
  email?: string;
  nrc?: string;
  password?: string;
}

interface Step3Props {
  formData: FormData;
  setFormData: (data: FormData) => void;
  next: () => void;
  back?: () => void;
}

const ClientStep3: React.FC<Step3Props> = ({ formData, setFormData, next, back }) => {
  const handleNext = () => {
    const { firstName, lastName, email, nrc, password } = formData;
    if (!firstName || !lastName || !email || !nrc || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    next();
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
          <Text style={styles.title}>Personal & Security Details</Text>

          <TextInput
            placeholder="First Name"
            value={formData.firstName || ""}
            onChangeText={(text) => setFormData({ ...formData, firstName: text })}
            style={styles.input}
          />
          <TextInput
            placeholder="Last Name"
            value={formData.lastName || ""}
            onChangeText={(text) => setFormData({ ...formData, lastName: text })}
            style={styles.input}
          />
          <TextInput
            placeholder="Email"
            value={formData.email || ""}
            onChangeText={(text) => setFormData({ ...formData, email: text })}
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
          />
          <TextInput
            placeholder="NRC"
            value={formData.nrc || ""}
            onChangeText={(text) => setFormData({ ...formData, nrc: text })}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            value={formData.password || ""}
            onChangeText={(text) => setFormData({ ...formData, password: text })}
            secureTextEntry
            style={styles.input}
          />

          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            {back && (
              <TouchableOpacity onPress={back} style={[styles.button, { backgroundColor: "#6b7280", flex: 1, marginRight: 10 }]}>
                <Text style={styles.buttonText}>Back</Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity onPress={handleNext} style={[styles.button, { flex: 1 }]}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default ClientStep3;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5" },
  scrollContainer: { padding: 20, flexGrow: 1, justifyContent: "center", backgroundColor: "#f5f5f5" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20, color: "#111827" },
  input: { borderWidth: 1, borderColor: "#d1d5db", borderRadius: 8, padding: 12, marginBottom: 15, backgroundColor: "#fff", color: "#111827" },
  button: { backgroundColor: "#3b82f6", padding: 15, borderRadius: 8, alignItems: "center", marginTop: 10 },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});