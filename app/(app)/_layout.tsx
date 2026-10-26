import { Redirect, Stack } from 'expo-router';
import { useAuthStore } from '../../src/state/useAuthStore';

export default function AppLayout() {
  // Uncomment when you implement Supabase authentication:
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  if (!isAuthenticated) return <Redirect href="/login" />;

  return <Stack />;
}
