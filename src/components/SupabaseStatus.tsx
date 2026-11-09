import { useEffect, useState } from 'react';
import { supabaseStatusService } from '@/services';
import { Card } from './primitives/Card';
import { Stack } from './primitives/Stack';
import { Text } from './primitives/Text';

type StatusState =
  | { kind: 'checking' }
  | { kind: 'connected'; profileCount: number }
  | { kind: 'not-connected' };

export function SupabaseStatus() {
  const [status, setStatus] = useState<StatusState>({ kind: 'checking' });

  useEffect(() => {
    let isActive = true;
    supabaseStatusService
      .getProfileCount()
      .then((profileCount) => {
        if (isActive) setStatus({ kind: 'connected', profileCount });
      })
      .catch(() => {
        if (isActive) setStatus({ kind: 'not-connected' });
      });
    return () => {
      isActive = false;
    };
  }, []);

  return (
    <Card>
      <Stack gap="sm" padding="md">
        <Text weight="medium" color="muted">Supabase status</Text>
        {status.kind === 'checking' && (
          <Text size="lg" weight="semibold" color="muted" testID="supabase-status">
            Checking connection…
          </Text>
        )}
        {status.kind === 'connected' && (
          <Text size="lg" weight="semibold" color="success" testID="supabase-status">
            {`Connected (${status.profileCount} profiles)`}
          </Text>
        )}
        {status.kind === 'not-connected' && (
          <Text size="lg" weight="semibold" color="danger" testID="supabase-status">
            Not connected
          </Text>
        )}
      </Stack>
    </Card>
  );
}