import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '@/theme';

interface NavProps {
  children: React.ReactNode;
  testID?: string;
}

export function Nav({ children, testID }: NavProps) {
  return (
    <SafeAreaView edges={['bottom']} style={styles.base} testID={testID}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.color.white,
    borderTopWidth: 1,
    borderTopColor: theme.color.border,
  },
});
