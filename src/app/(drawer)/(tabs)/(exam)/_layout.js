import { Stack } from 'expo-router';

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen name="ListExamScreen" options={{ headerShown: false }} />
      <Stack.Screen name="ExamScreen" options={{ headerShown: false }} />
      <Stack.Screen name="ExamResult" options={{ headerShown: false }} />
    </Stack>
  );
}
