import { Pressable, StyleSheet, View } from 'react-native';
import { Text } from './Text';
import { theme } from '@/theme';

export interface SegmentOption<T extends string> {
  value: T;
  label: string;
  testID: string;
}

interface SegmentedControlProps<T extends string> {
  options: SegmentOption<T>[];
  value: T;
  onChange: (value: T) => void;
}

export function SegmentedControl<T extends string>({
                                                     options,
                                                     value,
                                                     onChange,
                                                   }: SegmentedControlProps<T>) {
  return (
    <View style={styles.container}>
      {options.map((option) => {
        const isActive = option.value === value;
        return (
          <Pressable
            key={option.value}
            onPress={() => onChange(option.value)}
            accessibilityRole="button"
            accessibilityState={{ selected: isActive }}
            style={[styles.segment, isActive && styles.segmentActive]}
            testID={option.testID}
          >
            <Text
              size="lg"
              weight={isActive ? 'bold' : 'semibold'}
              color={isActive ? 'inverse' : 'primary'}
            >
              {option.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1.5,
    borderColor: theme.color.primary,
    borderRadius: theme.radius.control,
    backgroundColor: theme.color.white,
    overflow: 'hidden',
  },
  segment: {
    flex: 1,
    minHeight: theme.touch.min,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: theme.space.sm,
  },
  segmentActive: { backgroundColor: theme.color.primary },
});