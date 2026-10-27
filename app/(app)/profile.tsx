import { useAuthStore } from '@/state/useAuthStore';
import { Screen } from '@/components/primitives';
import { Stack } from '@/components/primitives';
import { Text } from '@/components/primitives';
import { StyledButton } from '@/components/StyledButton';

export default function ProfileScreen() {
  const { user, logout } = useAuthStore();

  return (
    <Screen padding='lg'>
      <Stack gap='lg'>
        <Text size='xl' weight='bold' testID='profile-title'>Profile</Text>
        <Text testID='profile-name'>{user !== undefined ? user.name : ''}</Text>
        <Text color='muted' testID='profile-email'>{user !== undefined ? user.email : ''}</Text>
        <StyledButton label='Log out' onPress={logout} variant='secondary' testID='logout-button'/>
      </Stack>
    </Screen>
  )
}