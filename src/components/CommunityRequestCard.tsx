import type { CommunityRequest } from '@/types';
import { Avatar } from './primitives/Avatar';
import { Card } from './primitives/Card';
import { Row } from './primitives/Row';
import { Stack } from './primitives/Stack';
import { Text } from './primitives/Text';
import { StyledButton } from './StyledButton';

interface CommunityRequestCardProps {
  request: CommunityRequest;
  onHaveThis: () => void;
}

export function CommunityRequestCard({ request, onHaveThis }: CommunityRequestCardProps) {
  return (
    <Card testID={`request-card-${request.id}`}>
      <Stack gap="md" padding="md">
        <Row gap="md">
          <Avatar name={request.requester.name} uri={request.requester.avatarUrl} />
          <Stack>
            <Text weight="semibold">{request.requester.name}</Text>
            <Text color="muted">{request.requester.building ?? ''}</Text>
          </Stack>
        </Row>
        <Text size="lg" weight="semibold">{request.title}</Text>
        <Text>{request.description}</Text>
        <Text color="muted">{`${request.startDate} – ${request.endDate}`}</Text>
        <StyledButton
          label="I have this"
          onPress={onHaveThis}
          testID={`have-this-${request.id}`}
        />
      </Stack>
    </Card>
  );
}