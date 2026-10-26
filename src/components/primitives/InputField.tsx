import { useState } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import type { TextStyle } from 'react-native';
import { Text } from './Text';
import { theme } from '../../theme';

interface InputFieldProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  error?: string;
  testID?: string;
}

export function InputField({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  error,
  testID,
}: InputFieldProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const hasError = error !== undefined;
  return (
    <View style={styles.container}>
      <Text weight="medium" color="muted">
        {label}
      </Text>
      <View
        style={[
          styles.field,
          isFocused && styles.fieldFocused,
          hasError && styles.fieldError,
        ]}
      >
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={theme.color.slate}
          secureTextEntry={secureTextEntry && !isPasswordVisible}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={styles.input}
          testID={testID}
          autoCapitalize="none"
        />
        {secureTextEntry && (
          <Pressable
            onPress={() => setIsPasswordVisible((visible) => !visible)}
            accessibilityRole="button"
            accessibilityLabel={isPasswordVisible ? 'Hide password' : 'Show password'}
            style={styles.toggle}
            testID={testID !== undefined ? `&{testID}-toggle` : undefined}
          >
            <Text weight="semibold" color="primary" >
              {isPasswordVisible? 'Hide' : 'Show'}
            </Text>
          </Pressable>
          )}
      </View>
      {hasError &&
        <Text
          color="danger"
          testID={testID !== undefined ? `${testID}-error` : undefined}
        >
          {error}
        </Text>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: theme.space.xs },
  field: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: theme.touch.control,
    borderWidth: 1.5,
    borderColor: theme.color.border,
    borderRadius: theme.radius.control,
    backgroundColor: theme.color.white,
    paddingLeft: 14,
  },
  fieldFocused: { borderWidth: 2, borderColor: theme.color.primary },
  fieldError: { borderWidth: 2, borderColor: theme.color.danger },
  input: {
    flex: 1,
    minHeight: theme.touch.control,
    fontSize: 16,
    color: theme.color.ink,
     // `as TextStyle`: outlineStyle is a web-only property that React Native's
     // style types don't include, so the cast is needed to pass type checking.
    outlineStyle: 'none',
  } as TextStyle,
//   },
  toggle: {
    minWidth: theme.touch.min,
    minHeight: theme.touch.min,
    paddingHorizontal: theme.space.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
