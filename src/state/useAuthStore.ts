import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { login as loginService, logout as logoutService } from '../services/authService';
import type { User } from '@/types';

interface AuthState {
  user: User | undefined;
  isAuthenticated: boolean;
  isLoading: boolean;
  hasHydrated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: undefined,
      isAuthenticated: false,
      isLoading: false,
      hasHydrated: false,
      login: async (email, password) => {
        set({ isLoading: true });
        try {
          const user = await loginService(email, password);
          set({ user, isAuthenticated: true, isLoading: false });
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },
      logout: async () => {
        await logoutService();
        set({ user: undefined, isAuthenticated: false });
      },
    }),
    {
      name: 'lendit-auth',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ user: state.user, isAuthenticated: state.isAuthenticated }),
      skipHydration: true,
    },
  ),
);
