import { StyleSheet, View } from 'react-native';
import type { CSSProperties } from 'react';
import { Text } from './Text';
import { theme } from '@/theme';
import type { DateFieldProps } from './DateField.types';

export function DateField({ label, value, onChange, error, minimumDate, testID }: DateFieldProps) {
  const hasError = error !== undefined;

  return (
    <View style={styles.container}>
      <Text weight="medium" color="muted">{label}</Text>
      <input
        type="date"
        value={value}
        min={minimumDate}
        onChange={(event) => onChange(event.target.value)}
        aria-label={label}
        data-testid={testID}
        style={StyleSheet.flatten([styles.input, hasError && styles.inputError]) as CSSProperties}
      />
      {hasError && (
        <Text color="danger" testID={testID !== undefined ? `${testID}-error` : undefined}>
          {error}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: theme.space.xs },
  input: {
    minHeight: theme.touch.control,
    paddingLeft: 14,
    paddingRight: 14,
    borderWidth: 1.5,
    borderStyle: 'solid',
    borderColor: theme.color.border,
    borderRadius: theme.radius.control,
    backgroundColor: theme.color.white,
    color: theme.color.ink,
    fontSize: 16,
  },
  inputError: { borderWidth: 2, borderColor: theme.color.danger },
});