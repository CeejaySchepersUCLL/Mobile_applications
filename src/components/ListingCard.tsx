import type { Listing } from '@/types';
import { Badge } from './primitives/Badge';
import { Card } from './primitives/Card';
import { Stack } from './primitives/Stack';
import { Text } from './primitives/Text';

interface ListingCardProps {
  listing: Listing;
  onPress?: () => void;
}

export function ListingCard({ listing, onPress }: ListingCardProps) {
  return (
    <Card onPress={onPress} testID={`listing-card-${listing.id}`}>
      <Stack gap="sm" padding="md">
        <Text size="lg" weight="bold">{listing.title}</Text>
        <Text size="sm">{listing.category}</Text>
        <Text numberOfLines={2}>{listing.description}</Text>
        <Badge
          label={listing.isAvailable ? 'Available' : 'Lent Out'}
          variant={listing.isAvailable ? 'success' : 'warning'}
        />
      </Stack>
    </Card>
  );
}