import {Avatar, Card, Row, Stack, Text} from "@/components/primitives";


interface ProfileHeaderProps {
  name: string;
  email: string;
}

export function ProfileHeader({ name, email }: ProfileHeaderProps) {
  return (
    <Card>
      <Stack padding="md">
        <Row gap="md">
          <Avatar name={name}  size="lg"/>
          <Stack>
            <Text size="lg" weight="semibold" testID="profile-name">{name}</Text>
            <Text color="muted" testID="profile-email">{email}</Text>
          </Stack>
        </Row>
      </Stack>
    </Card>
  );
}