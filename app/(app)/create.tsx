import { useState } from 'react';
import { Screen } from "@/components/primitives/Screen";
import { Stack } from "@/components/primitives/Stack";
import { Text } from "@/components/primitives/Text";
import {SegmentedControl, SegmentOption} from "@/components/primitives/SegmentedControl";
import {ListingForm} from "@/components/ListingForm";
import {CommunityRequestForm} from "@/components/CommunityRequestForm";

type CreateMode = 'listing' | 'request';

const MODE_OPTIONS: SegmentOption<CreateMode>[] = [
  { value: 'listing', label: 'List an item', testID: 'create-toggle-listing' },
  { value: 'request', label: 'Post a Request', testID: 'create-toggle-request' },
]

export default function CreateScreen() {
  const [mode, setMode] = useState<CreateMode>('listing');
  return (
    <Screen padding="lg">
      <Stack gap='lg'>
        <Text size='xl' weight='bold' testID='create-title'>Create</Text>
        <SegmentedControl options={MODE_OPTIONS} value={mode} onChange={setMode} />
        {mode === 'listing' ? (
          <ListingForm onSubmit={() => {}} />
        ) : (
          <CommunityRequestForm onSubmit={() => {}} />
        )}
      </Stack>
    </Screen>
  );
}