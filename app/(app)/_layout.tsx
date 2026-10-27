import {Redirect, Tabs} from 'expo-router';
import { useAuthStore } from '@/state/useAuthStore';
import { AppTabBar } from '@/components/AppTabBar';

export default function AppLayout() {
  // Uncomment when you implement Supabase authentication:
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  if (!isAuthenticated) return <Redirect href="/login" />;

  return (
    <Tabs tabBar={(props) => <AppTabBar {...props} />} screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="details/[id]" options={{ href: null }} />
    </Tabs>
  );
}
