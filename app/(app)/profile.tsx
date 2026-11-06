import { useAuthStore } from '@/state/useAuthStore';
import { Screen } from '@/components/primitives';
import { Stack } from '@/components/primitives';
import { Text } from '@/components/primitives';
import { StyledButton } from '@/components/StyledButton';
import {ProfileHeader} from "@/components/ProfileHeader";

export default function ProfileScreen() {
  const { user, logout } = useAuthStore();

  return (
    <Screen padding='lg'>
      <Stack gap='lg'>
        <Text size='xl' weight='bold' testID='profile-title'>Profile</Text>
        {user !== undefined && <ProfileHeader name={user.name} email={user.email}/> }
        <StyledButton
          label='Log out'
          onPress={logout}
          variant='secondary'
          testID='logout-button'
        />
      </Stack>
    </Screen>
  )
}