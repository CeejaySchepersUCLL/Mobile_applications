import { View, StyleSheet } from 'react-native';
import type { ViewStyle } from 'react-native';
import { theme } from '@/theme';

type Gap = 'none' | 'sm' | 'md' | 'lg';
type Align = 'flex-start' | 'center' | 'flex-end' | 'stretch';
type Justify = 'flex-start' | 'center' | 'flex-end' | 'space-between';


interface RowProps {
  children: React.ReactNode;
  gap?: Gap;
  align?: Align;
  justify?: Justify;
  wrap?: boolean;
}

export function Row({
  children,
  gap = 'none',
  align = 'center',
  justify = 'flex-start',
  wrap = false,
}: RowProps) {
  return (
    <View
      style={[
        styles.base,
        gapStyles[gap],
        alignStyles[align],
        justifyStyles[justify],
        wrap && styles.wrap,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  base: { flexDirection: 'row' },
  wrap: { flexWrap: 'wrap' },
  gapNone: { gap: 0 },
  gapSm: { gap: theme.space.sm },
  gapMd: { gap: theme.space.md },
  gapLg: { gap: theme.space.lg },
  alignStart: { alignItems: 'flex-start' },
  alignCenter: { alignItems: 'center' },
  alignEnd: { alignItems: 'flex-end' },
  alignStretch: { alignItems: 'stretch' },
  justifyStart: { justifyContent: 'flex-start' },
  justifyCenter: { justifyContent: 'center' },
  justifyEnd: { justifyContent: 'flex-end' },
  justifyBetween: { justifyContent: 'space-between' },
});

const gapStyles: Record<Gap, ViewStyle> = {
  none: styles.gapNone, sm: styles.gapSm, md: styles.gapMd, lg: styles.gapLg,
};
const alignStyles: Record<Align, ViewStyle> = {
  'flex-start': styles.alignStart, center: styles.alignCenter,
  'flex-end': styles.alignEnd, stretch: styles.alignStretch,
};
const justifyStyles: Record<Justify, ViewStyle> = {
  'flex-start': styles.justifyStart, center: styles.justifyCenter,
  'flex-end': styles.justifyEnd, 'space-between': styles.justifyBetween,
};
