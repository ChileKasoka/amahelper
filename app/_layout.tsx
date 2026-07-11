import { useColorScheme } from "@/hooks/use-color-scheme";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { AuthProvider } from "../context/AuthContext";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <SafeAreaProvider>
      <AuthProvider>
        <ThemeProvider value={isDark ? DarkTheme : DefaultTheme}>
          <Stack
            screenOptions={{
              headerTintColor: "#fff",
              headerStyle: {
                backgroundColor: isDark ? "#0ea5a4" : "#3b82f6",
              },
            }}
          >
            {/* Authentication */}
            <Stack.Screen name="auth" options={{ headerShown: false }} />

            {/* Client */}
            <Stack.Screen name="(client)" options={{ headerShown: false }} />

            {/* Helper */}
            <Stack.Screen name="(helper)" options={{ headerShown: false }} />

            {/* Company */}
            <Stack.Screen name="(company)" options={{ headerShown: false }} />

            {/* Supplier */}
            <Stack.Screen name="(supplier)" options={{ headerShown: false }} />

            <Stack.Screen name="splash" options={{ headerShown: false }} />

            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

            <Stack.Screen
              name="modal"
              options={{
                presentation: "modal",
                title: "Modal",
              }}
            />

            <Stack.Screen
              name="jobs/[id]"
              options={{
                title: "Job Details",
                headerShown: true,
              }}
            />
          </Stack>

          <StatusBar style="auto" />
        </ThemeProvider>
      </AuthProvider>
    </SafeAreaProvider>
  );
}
