import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import type { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { Text } from './Text';
import { theme } from '@/theme';
import { dateToIso, isoToDate } from '@/utils/dates';
import type { DateFieldProps } from './DateField.types';



export function DateField({ label, value, onChange, error, minimumDate, testID }: DateFieldProps) {
  const [isOpen, setIsOpen] = useState(false);
  const hasError = value !== undefined;

  const handleChange = (event: DateTimePickerEvent, date?: Date) => {
    setIsOpen(false);
    if (event.type === 'set' && date !== undefined) {
      onChange(dateToIso(date));
    }
  };

  return (
    <View style={styles.container}>
      <Text weight="medium" color="muted">{label}</Text>
      <Pressable
        onPress={() => setIsOpen(true)}
        accessibilityRole="button"
        accessibilityLabel={label}
        style={[styles.field, hasError && styles.fieldError]}
        testID={testID}
      >
        <Text size="lg" color={value === '' ? 'muted' : 'default'}>
          {value === '' ? 'Select Date' : value}
        </Text>
      </Pressable>
      {isOpen && (
        <DateTimePicker
          value={value === '' ? new Date() : isoToDate(value)}
          mode="date"
          minimumDate={minimumDate === undefined ? undefined :isoToDate(minimumDate)}
          onChange={handleChange}
        />
      )}
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
  field: {
    minHeight: theme.touch.control,
    paddingHorizontal: 14,
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: theme.color.border,
    borderRadius: theme.radius.control ,
    backgroundColor: theme.color.white,
  },
  fieldError: { borderWidth: 2, borderColor: theme.color.danger },
});