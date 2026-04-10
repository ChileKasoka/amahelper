// app/auth/ama_helpers/helper3.tsx
import { useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

type HelperStep3Props = {
  next: () => void;
  back: () => void;
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  onSubmit?: () => void;
  loading?: boolean;
};

const servicesList = [
  "House Cleaning",
  "Office Cleaning",
  "Window Cleaning",
  "Deep Cleaning",
];

export default function HelperStep3({
  next,
  back,
  formData,
  setFormData,
}: HelperStep3Props) {
  const [services, setServices] = useState<string[]>(formData.services || []);
  const [address, setAddress] = useState(formData.address || "");
  const [gender, setGender] = useState(formData.gender || "");
  const [employmentType, setEmploymentType] = useState(
    formData.employmentType || "FULL_TIME",
  );
  const [baseSalary, setBaseSalary] = useState(
    formData.baseSalary?.toString() || "",
  );
  const [commissionRate, setCommissionRate] = useState(
    formData.commissionRate?.toString() || "",
  );

  const toggleService = (service: string) => {
    setServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service],
    );
  };

  const handleNext = () => {
    if (!address || !gender) {
      Alert.alert("Error", "Please fill required fields");
      return;
    }

    setFormData({
      ...formData,
      address,
      gender,
      employmentType,
      baseSalary: Number(baseSalary),
      commissionRate: Number(commissionRate),
      services,
    });

    next();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cleaner Details</Text>

      <TextInput
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
        style={styles.input}
      />

      <TextInput
        placeholder="Gender (MALE/FEMALE)"
        value={gender}
        onChangeText={setGender}
        style={styles.input}
      />

      <TextInput
        placeholder="Employment Type (FULL_TIME/PART_TIME)"
        value={employmentType}
        onChangeText={setEmploymentType}
        style={styles.input}
      />

      <TextInput
        placeholder="Base Salary"
        value={baseSalary}
        onChangeText={setBaseSalary}
        keyboardType="numeric"
        style={styles.input}
      />

      <TextInput
        placeholder="Commission Rate (%)"
        value={commissionRate}
        onChangeText={setCommissionRate}
        keyboardType="numeric"
        style={styles.input}
      />

      <Text style={styles.label}>Services</Text>
      {servicesList.map((service) => (
        <TouchableOpacity
          key={service}
          onPress={() => toggleService(service)}
          style={[
            styles.serviceBox,
            services.includes(service) && styles.serviceBoxSelected,
          ]}
        >
          <Text
            style={[
              styles.serviceText,
              services.includes(service) && styles.serviceTextSelected,
            ]}
          >
            {service}
          </Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#6b7280", marginTop: 10 }]}
        onPress={back}
      >
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f9fafb",
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
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
    fontWeight: "700",
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
    fontWeight: "700",
  },
});
