import { Image, StyleSheet } from 'react-native';
import type { ImageStyle } from 'react-native';

type LogoSize = 'sm' | 'lg';

interface LogoProps {
  size?: LogoSize;
  testID?: string;
}

export function Logo({ size = 'sm', testID = 'app-logo' }: LogoProps) {
  return (
    <Image
      source={require('../../../assets/favicon.png')}
      resizeMode="contain"
      accessibilityLabel="LendIt logo"
      style={sizeStyles[size]}
      testID={testID}
    />
  );
}

const styles = StyleSheet.create({
  sm: { width: 40, height: 40 },
  lg: { width: 96, height: 96 },
});

const sizeStyles: Record<LogoSize, ImageStyle> = {
  sm: styles.sm,
  lg: styles.lg,
};