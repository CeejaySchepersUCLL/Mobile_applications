import { View, StyleSheet } from 'react-native';
import { theme } from '@/theme';

type Gap = 'none' | 'sm' | 'md' | 'lg';
type Align = 'flex-start' | 'center' | 'flex-end' | 'stretch';
type Justify = 'flex-start' | 'center' | 'flex-end' | 'space-between';

interface StackProps {
  children: React.ReactNode;
  gap?: Gap;
  align?: Align;
  justify?: Justify;
  padding?: Gap;
  grow?: boolean;
}

export function Stack({
  children,
  gap = 'none',
  align = 'stretch',
  justify = 'flex-start',
  padding = 'none',
  grow = false,
}: StackProps) {
  return (
    <View
      style={[
        styles.base,
        gapStyles[gap],
        paddingStyles[padding],
        alignStyles[align],
        justifyStyles[justify],
        grow && styles.grow,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  base: { flexDirection: 'column' },
  grow: { flex: 1 },
  gapNone: { gap: 0 },
  gapSm: { gap: theme.space.sm },
  gapMd: { gap: theme.space.md},
  gapLg: { gap: theme.space.lg },
  paddingNone: { padding: 0 },
  paddingSm: { padding: theme.space.sm },
  paddingMd: { padding: theme.space.md },
  paddingLg: { padding: theme.space.lg },
  alignStart: { alignItems: 'flex-start' },
  alignCenter: { alignItems: 'center' },
  alignEnd: { alignItems: 'flex-end' },
  alignStretch: { alignItems: 'stretch' },
  justifyStart: { justifyContent: 'flex-start' },
  justifyCenter: { justifyContent: 'center' },
  justifyEnd: { justifyContent: 'flex-end' },
  justifyBetween: { justifyContent: 'space-between' },
});

const gapStyles : Record<Gap, object> = {
    none: styles.gapNone, sm: styles.gapSm, md: styles.gapMd, lg: styles.gapLg,
};

const paddingStyles : Record<Gap, object> = {
    none: styles.paddingNone, sm: styles.paddingSm, md: styles.paddingMd, lg: styles.paddingLg,
};

const alignStyles: Record<Align, object> = {
    'flex-start': styles.alignStart, 'center': styles.alignCenter,
    'flex-end': styles.alignEnd, 'stretch': styles.alignStretch,
};

const justifyStyles: Record<Justify, object> = {
    'flex-start': styles.justifyStart, 'center': styles.justifyCenter,
    'flex-end': styles.justifyEnd, 'space-between': styles.justifyBetween,
};