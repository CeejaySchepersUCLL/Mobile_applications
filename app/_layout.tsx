import { useEffect } from 'react';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useAuthStore } from '@/state/useAuthStore';

export default function RootLayout() {
  useEffect(() => {
    // Read the stored login once, in the browser, then tell the guard it can decide.
    Promise.resolve(useAuthStore.persist.rehydrate()).then(() => {
      useAuthStore.setState({ hasHydrated: true });
    });
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <Slot />
    </SafeAreaProvider>
  );
}