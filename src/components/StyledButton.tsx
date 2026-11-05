import { Pressable, StyleSheet } from 'react-native';
import { Spinner } from './primitives/Spinner';
import { Text } from './primitives/Text';
import { theme } from '@/theme';

interface StyledButtonProps {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
  testID?: string;
}

export function StyledButton({
  label,
  onPress,
  variant = 'primary',
  isLoading = false,
  testID,
}: StyledButtonProps) {
  const isPrimary = variant === 'primary';


  return (
    <Pressable
      onPress={onPress}
      disabled={isLoading}
      style={({ pressed }) => [
        styles.base,
        styles[variant],
        pressed && isPrimary && styles.primaryPressed,
        isLoading && styles.disabled]}
      testID={testID}
    >
      {isLoading ? (
        <Spinner size="small" color={isPrimary ? 'inverse' : 'primary'} />
      ) : (
        <Text size="lg" weight="semibold" color={isPrimary ? 'inverse' : 'primary'}>
          {label}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    minHeight:theme.touch.control,
    paddingHorizontal: 20,
    borderRadius: theme.radius.control,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  primary: {
    backgroundColor: theme.color.primary,
    borderColor: theme.color.primary,
  },
  primaryPressed: {
    backgroundColor: theme.color.primaryPressed,
    borderColor: theme.color.primaryPressed,
  },
  secondary: {
    backgroundColor: theme.color.white,
    borderColor: theme.color.primary,
  },
  disabled: { opacity: 0.7 },
});
