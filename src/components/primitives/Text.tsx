import { Text as RNText, StyleSheet } from 'react-native';
import { theme } from '../../theme';

type TextColor = 'default' | 'muted' | 'primary' | 'danger' | 'inverse';
type TextAlign = 'left' | 'center' | 'right';

interface TextProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  color?: TextColor;
  align?: TextAlign;
  numberOfLines?: number;
  testID?: string;
}

export function Text({
  children,
  size = 'md',
  weight = 'normal',
  color = 'default',
  align = 'left',
  numberOfLines,
  testID,
}: TextProps) {
  return (
    <RNText
      style={[
        styles.base,
        styles[size],
        styles[weight],
        colorStyles[color],
        alignStyles[align],
      ]}
      numberOfLines={numberOfLines}
      testID={testID}
    >
      {children}
    </RNText>
  );
}

const styles = StyleSheet.create({
  base: { color: theme.color.ink },
  sm: { fontSize: 12, lineHeight: 16 },
  md: { fontSize: 14, lineHeight: 20 },
  lg: { fontSize: 16, lineHeight: 24 },
  xl: { fontSize: 20, lineHeight: 28 },
  normal: { fontWeight: '400' },
  medium: { fontWeight: '500' },
  semibold: { fontWeight: '600' },
  bold: { fontWeight: '700' },
  colorDefault: { color: theme.color.ink },
  colorMuted: { color: theme.color.slate },
  colorPrimary: { color: theme.color.primary },
  colorDanger: { color: theme.color.danger },
  colorInverse: { color: theme.color.white },
  alignLeft: { textAlign: 'left' },
  alignCenter: { textAlign: 'center' },
  alignRight: { textAlign: 'right' },
});

const colorStyles: Record<TextColor, object> = {
    default: styles.colorDefault, muted: styles.colorMuted, primary: styles.colorPrimary,
    danger: styles.colorDanger, inverse: styles.colorInverse,
};

const alignStyles: Record<TextAlign, object> = {
    left: styles.alignLeft, center: styles.alignCenter, right: styles.alignRight,
};