import type { Listing } from '@/types';
import { Card } from './primitives/Card';
import { Stack } from './primitives/Stack';
import { Text } from './primitives/Text';

interface ListingCardProps {
  listing: Listing;
  onPress: () => void;
}

export function ListingCard({ listing, onPress }: ListingCardProps) {
  return (
    <Card onPress={onPress}>
      <Stack gap="sm" padding="md">
        <Text size="lg" weight="bold">{listing.title}</Text>
        <Text size="sm">{listing.category}</Text>
        <Text numberOfLines={2}>{listing.description}</Text>
      </Stack>
    </Card>
  );
}