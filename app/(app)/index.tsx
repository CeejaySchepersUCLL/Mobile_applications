import { useEffect, useState } from 'react';
import { useAuthStore } from '@/state/useAuthStore';
import { communityRequestService, listingService } from '@/services';
import type { CommunityRequest, Listing } from '@/types';
import { Screen } from '@/components/primitives/Screen';
import { Stack } from '@/components/primitives/Stack';
import { Text } from '@/components/primitives/Text';
import { SegmentedControl } from '@/components/primitives/SegmentedControl';
import type { SegmentOption } from '@/components/primitives/SegmentedControl';
import { ListingCard } from '@/components/ListingCard';
import { CommunityRequestCard } from '@/components/CommunityRequestCard';

type HomeMode = 'listings' | 'requests';

const MODE_OPTIONS: SegmentOption<HomeMode>[] = [
  { value: 'listings', label: 'Items to Borrow', testID: 'home-toggle-listings' },
  { value: 'requests', label: 'Community Requests', testID: 'home-toggle-requests' },
];

export default function HomeScreen() {
  const { user } = useAuthStore();
  const [mode, setMode] = useState<HomeMode>('listings');
  const [listings, setListings] = useState<Listing[]>([]);
  const [requests, setRequests] = useState<CommunityRequest[]>([]);

  useEffect(() => {
    listingService.getListings().then(setListings);
    communityRequestService.getCommunityRequests().then(setRequests);
  }, []);

  return (
    <Screen padding="lg">
      <Stack gap="lg">
        <Text size="xl" weight="bold" testID="home-title">
          {user !== undefined ? `Welcome, ${user.name}` : 'Welcome'}
        </Text>
        <SegmentedControl options={MODE_OPTIONS} value={mode} onChange={setMode} />
        {mode === 'listings'
          ? listings.map((listing) => <ListingCard key={listing.id} listing={listing} />)
          : requests.map((request) => (
            <CommunityRequestCard
              key={request.id}
              request={request}
              onHaveThis={() => {}} // The offer flow comes in a later step.
            />
          ))}
      </Stack>
    </Screen>
  );
}