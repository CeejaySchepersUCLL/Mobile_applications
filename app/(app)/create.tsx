import { Screen } from "@/components/primitives/Screen";
import { Stack } from "@/components/primitives/Stack";
import { Text } from "@/components/primitives/Text";

export default function CreateScreen() {
  return (
    <Screen>
      <Stack gap='lg'>
        <Text size='xl' weight='bold' testID='create-title'>
          Create
        </Text>
      </Stack>
    </Screen>
  );
}