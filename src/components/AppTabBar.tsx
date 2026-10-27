import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Nav } from './primitives/Nav';
import { NavItem } from './primitives/NavItem';
import type { IoniconsName} from "./primitives/Icon";

interface TabConfig {
  routeName: string;
  label: string;
  icon: IoniconsName;
  activeIcon: IoniconsName;
  testId: string;
  accent: boolean;
}

const TABS: TabConfig[] = [
  { routeName: 'index', label: 'Home', icon: 'home-outline', activeIcon: 'home', testId: 'nav-home', accent: false },
  { routeName: 'create', label: 'Create', icon: 'add', activeIcon: 'add', testId: 'nav-create', accent: true },
  { routeName: 'profile', label: 'Profile', icon: 'person-outline', activeIcon: 'person', testId: 'nav-profile', accent: false },
];

export function AppTabBar({ state, navigation }: BottomTabBarProps) {
  const activeRouteName = state.routes[state.index]?.name;

  return (
    <Nav testID='bottom-nav'>
      {TABS.map((tab) => {
        const isActive = tab.routeName === activeRouteName;
        return (
          <NavItem
            key={tab.routeName}
            label={tab.label}
            icon={isActive ? tab.activeIcon : tab.icon}
            active={isActive}
            accent={tab.accent}
            testID={tab.testId}
            onPress={() => navigation.navigate(tab.routeName)}
          />
        );
      })}
    </Nav>
  );
}