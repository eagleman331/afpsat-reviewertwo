import { Stack } from 'expo-router';

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen name="RecruitHome" options={{ headerShown: false }} />
      <Stack.Screen name="RecruitDetails" options={{ headerShown: false }} />
    </Stack>
  );
}
