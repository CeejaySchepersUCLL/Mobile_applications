import type { User } from '@/types';

const DUMMY_PASSWORD = 'LendIt-demo-1';
const DUMMY_USER: User = {
    id: 'dummy-user-1',
    email: 'demo@lendit.be',
    name: 'Demo Student',
    token: 'dummy-token'
};

export async function login(_email: string, _password: string): Promise<User> {
//   throw new Error('Not yet implemented — connect your Supabase auth here');
    const isValid =
    _email.trim().toLowerCase() === DUMMY_USER.email && _password === DUMMY_PASSWORD;
    if (!isValid) {
        throw new Error('Invalid email or password');
    }
    return DUMMY_USER
}

export async function logout(): Promise<void> {
  // throw new Error('Not yet implemented — connect your Supabase auth here');
  // Nothing to invalidate server-side while the data is dummy.
}
