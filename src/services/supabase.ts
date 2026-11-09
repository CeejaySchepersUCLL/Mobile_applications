import { createClient } from '@supabase/supabase-js';

// Expo only inlines EXPO_PUBLIC_ variables that are written out literally like this.
const url = process.env.EXPO_PUBLIC_SUPABASE_URL;
const anonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

if (url === undefined || anonKey === undefined) {
  throw new Error('Missing Supabase environment variables. See .env.example');
}

// Session persistence is off: there is no Supabase login yet, only the connection check.
export const supabase = createClient(url, anonKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});