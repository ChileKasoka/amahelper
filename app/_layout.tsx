// app/_layout.tsx

import { useColorScheme } from "@/hooks/use-color-scheme";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { AuthProvider } from "../context/AuthContext";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
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
          <Stack.Screen
            name="auth"
            options={{
              headerShown: false,
            }}
          />

          {/* Client Application */}
          <Stack.Screen
            name="(client)"
            options={{
              headerShown: false,
            }}
          />

          {/* Cleaner / Helper Application */}
          <Stack.Screen
            name="(helper)"
            options={{
              headerShown: false,
            }}
          />

          {/* Company Admin Application */}
          <Stack.Screen
            name="(company)"
            options={{
              headerShown: false,
            }}
          />

          {/* Supplier Application */}
          <Stack.Screen
            name="(supplier)"
            options={{
              headerShown: false,
            }}
          />

          {/* Existing screens */}
          <Stack.Screen
            name="splash"
            options={{
              headerShown: false,
            }}
          />

          {/* Keep existing tabs if still used */}
          <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: false,
            }}
          />

          {/* Modal */}
          <Stack.Screen
            name="modal"
            options={{
              presentation: "modal",
              title: "Modal",
            }}
          />

          {/* Job Details */}
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
  );
}
