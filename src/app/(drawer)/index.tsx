import { Redirect, Stack } from 'expo-router';

export default function Home() {
  return (
       <Redirect href="/(drawer)/(tabs)/(home)/HomeScreen" />
  );
}