import { View, StyleSheet } from 'react-native';
import { Text } from './Text';
import { theme } from '@/theme';

type BadgeVariant = 'default' | 'success' | 'warning' | 'error';
type BadgeTextColor = 'muted' | 'success' | 'warning' | 'danger';

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
}

const TEXT_COLORS: Record<BadgeVariant, BadgeTextColor> = {
  default: 'muted',
  success: 'success',
  warning: 'warning',
  error: 'danger',
};

export function Badge({ label, variant = 'default' }: BadgeProps) {
  return (
    <View style={[styles.base, styles[variant]]}>
      <Text size="sm" color={TEXT_COLORS[variant]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
  },
  default: { backgroundColor: theme.color.border },
  success: { backgroundColor: theme.color.successSoft },
  warning: { backgroundColor: theme.color.warningSoft },
  error: { backgroundColor: theme.color.dangerSoft },
});
