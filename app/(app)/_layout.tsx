import { Redirect, Tabs } from 'expo-router';
import { useAuthStore } from '@/state/useAuthStore';
import { AppTabBar } from '@/components/AppTabBar';

export default function AppLayout() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const hasHydrated = useAuthStore((state) => state.hasHydrated);

  if (!hasHydrated) return null;
  if (!isAuthenticated) return <Redirect href="/login" />;

  return (
    <Tabs tabBar={(props) => <AppTabBar {...props} />} screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="details/[id]" options={{ href: null }} />
    </Tabs>
  );
}