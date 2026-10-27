import { useAuthStore } from '@/state/useAuthStore';
import { Screen } from '@/components/primitives';
import { Stack } from '@/components/primitives';
import { Text } from '@/components/primitives';
import { EmptyState } from '@/components/primitives';
import {Badge} from "@/components/primitives";

export default function HomeScreen() {
  const { user} = useAuthStore();

  return (
    <Screen padding="lg">
      <Stack gap="lg">
        <Text size="xl" weight="bold">
          {user !== undefined ? `Welcome, ${user.name}` : 'Welcome'}
        </Text>
        <Text>Your items will appear here once you connect Supabase.</Text>
        <Badge label={'Success badge'} variant={"success"} />
        <EmptyState
          title="No items yet"
          description="Implement getItems() in your itemService to load data."
        />
      </Stack>
    </Screen>
  );
}

