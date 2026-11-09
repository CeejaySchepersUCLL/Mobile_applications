import { supabase } from './supabase';

export interface SupabaseStatusService {
  getProfileCount: () => Promise<number>;
}

export const supabaseStatusService: SupabaseStatusService = {
  getProfileCount: async () => {
    const { count, error } = await supabase
      .from('profiles')
      .select('id', { count: 'exact', head: true });
    if (error) {
      throw new Error(error.message);
    }
    return count ?? 0;
  },
};