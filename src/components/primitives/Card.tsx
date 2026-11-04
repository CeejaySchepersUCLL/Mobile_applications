import { View, Pressable, StyleSheet } from 'react-native';
import { theme } from '@/theme';

interface CardProps {
  children: React.ReactNode;
  onPress?: () => void;
  testID?: string;
}

export function Card({ children, onPress, testID }: CardProps) {
  if (onPress !== undefined) {
    return (
      <Pressable onPress={onPress} accessibilityRole="button" style={styles.base} testID={testID}>
        {children}
      </Pressable>
    );
  }

  return <View style={styles.base} testID={testID}>{children}</View>;
}

const styles = StyleSheet.create({
  base: {
    backgroundColor: theme.color.white,
    borderWidth: 1,
    borderColor: theme.color.border,
    borderRadius: theme.radius.card,
    overflow: 'hidden',
  },
});
