import { Pressable, StyleSheet, View } from 'react-native';
import { Icon } from './Icon';
import type {IoniconsName} from "./Icon";
import { Text } from './Text';
import { theme } from '@/theme';

interface NavItemProps {
  label: string;
  icon: IoniconsName;
  onPress: () => void;
  active?: boolean;
  accent?: boolean;
  testID?: string;
}

export function NavItem({
  label,
  icon,
  onPress,
  active = false,
  accent = false,
  testID,
}: NavItemProps) {
  const iconColor = active ? theme.color.primary : theme.color.slate;
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityState={{ selected: active }}
      style={styles.base}
      testID={testID}
    >
      { accent ? (
        <View style={styles.accentCircle}>
          <Icon name={icon} size={28} color={theme.color.ink} />
        </View>
      ) : (
        <>
          <Icon name={icon} size={24} color={iconColor}/>
          <Text
            size="md"
            weight={active ? 'bold' : 'normal'}
            color={active ? 'primary' : 'muted'}
          >
            {label}
          </Text>
        </>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    minHeight: 56,
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.space.xs,
  },
  accentCircle: {
    width: 48,
    height: 48,
    borderRadius: theme.radius.pill,
    backgroundColor: theme.color.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
