import { ScrollView, View, StyleSheet } from 'react-native';
import type { ViewStyle } from 'react-native';
import { theme } from '@/theme';
import React from "react";

type Padding = 'none' | 'sm' | 'md' | 'lg';

interface ScreenProps {
  children: React.ReactNode;
  padding?: Padding;
  scrollable?: boolean;
}

export function Screen({ children, padding = 'md', scrollable = true }: ScreenProps) {
  if (!scrollable) {
    return (
      <View style={[styles.container, paddingStyles[padding]]}>
        {children}
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={[styles.content, paddingStyles[padding]]}
    >
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: { flex: 1, backgroundColor: theme.color.mist },
  container: { flex: 1, backgroundColor: theme.color.mist },
  content: { flexGrow: 1 },
  paddingNone: { padding: 0 },
  paddingSm: { padding: theme.space.sm },
  paddingMd: { padding: theme.space.md },
  paddingLg: { padding: theme.space.lg },
});

const paddingStyles: Record<Padding, ViewStyle> = {
  none: styles.paddingNone,
  sm: styles.paddingSm,
  md: styles.paddingMd,
  lg: styles.paddingLg,
};