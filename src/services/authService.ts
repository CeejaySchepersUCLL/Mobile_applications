import type { Profile, User } from '@/types';
import { DUMMY_PROFILES } from './dummyProfiles';

interface DummyAccount {
    email: string;
    password: string;
    profile: Profile;
}

// Hardcoded accounts until Supabase Auth is connected. Every account has a matching
// profile in dummyProfiles.ts. The function signatures stay the same, so only the
// bodies change later.
const DUMMY_PASSWORD = 'LendIt-demo-1';

const DUMMY_ACCOUNTS: DummyAccount[] = [
    { email: 'jan@lendit.be', password: DUMMY_PASSWORD, profile: DUMMY_PROFILES.jan },
    { email: 'mia@lendit.be', password: DUMMY_PASSWORD, profile: DUMMY_PROFILES.mia },
    { email: 'tom@lendit.be', password: DUMMY_PASSWORD, profile: DUMMY_PROFILES.tom },
    { email: 'sara@lendit.be', password: DUMMY_PASSWORD, profile: DUMMY_PROFILES.sara },
];

export async function login(email: string, password: string): Promise<User> {
    const normalizedEmail = email.trim().toLowerCase();
    const account = DUMMY_ACCOUNTS.find(
      (candidate) => candidate.email === normalizedEmail && candidate.password === password,
    );
    if (account === undefined) {
        throw new Error('Invalid email or password');
    }
    return {
        id: account.profile.id,
        email: account.email,
        name: account.profile.name,
        token: `dummy-token-${account.profile.id}`,
    };
}

export async function logout(): Promise<void> {
    // Nothing to invalidate server-side while the data is dummy.
}