import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { router } from 'expo-router';
import { useAuthStore } from '@/state/useAuthStore';
import { InputField } from '@/components/primitives';
import { StyledButton } from '@/components/StyledButton';
import { Stack } from '@/components/primitives';
import { Text } from '@/components/primitives';
import { Validators } from '@/utils/validators';
import { Logo } from '@/components/primitives/Logo';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState<string | undefined>(undefined);
  const { login, isLoading } = useAuthStore();

  const handleLogin = async () => {
    const nextEmailError = Validators.validateEmail(email);
    const nextPasswordError = Validators.validatePassword(password);
    setEmailError(nextEmailError);
    setPasswordError(nextPasswordError);
    if (nextEmailError !== undefined || nextPasswordError !== undefined) return;

    try {
      await login(email, password);
      router.replace('/');
    } catch {
      setPasswordError('Wrong email or password');
    }
  };

  return (
    <View style={styles.container}>
      <Stack gap="lg" padding="lg">
        <Stack align="center" gap="md">
          <Logo size="lg" />
          <Text size="xl" weight="bold" align="center">Welcome back</Text>
        </Stack>
        <InputField
          label="Email"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            setEmailError(undefined);
          }}
          placeholder="you@example.com"
          testID="email-input"
          error={emailError}
        />
        <InputField
          label="Password"
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            setPasswordError(undefined);
          }}
          secureTextEntry
          testID="password-input"
          error={passwordError}
        />
        <StyledButton
          label="Log in"
          onPress={handleLogin}
          isLoading={isLoading}
          testID="login-button"
        />
      </Stack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
