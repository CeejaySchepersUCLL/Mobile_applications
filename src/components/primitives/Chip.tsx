import { Pressable, StyleSheet } from 'react-native';
import { Text } from './Text';
import { theme } from '@/theme';

interface ChipProps {
  label: string;
  onPress: () => void;
  selected: boolean;
  testID: string;
}

export function Chip({ label, onPress, selected=false, testID }: ChipProps) {
  return (
    <Pressable
    onPress={onPress}
    accessibilityRole="button"
    accessibilityState={{ selected }}
    style={[styles.base, selected && styles.selected]}
    testID={testID}
    >
      <Text weight="semibold" color={selected ? 'primary' : 'muted'}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    minHeight: theme.touch.min,
    paddingHorizontal: theme.space.lg,
    borderRadius: theme.radius.pill,
    borderWidth: 1.5,
    borderColor: theme.color.border,
    backgroundColor: theme.color.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selected: {
    backgroundColor: theme.color.primarySoft,
    borderColor: theme.color.primary,
  },
});
