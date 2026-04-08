// app/auth/_layout.tsx
import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Login Flow */}
      <Stack.Screen name="login" />
      <Stack.Screen name="register" />

      {/* Registration Flow (your ama_clients pages) */}
      <Stack.Screen name="ama_clients/client1" />
      <Stack.Screen name="ama_clients/client2" />
      <Stack.Screen name="ama_clients/client3" />
      <Stack.Screen name="ama_clients/client4" />
    </Stack>
  );
}
