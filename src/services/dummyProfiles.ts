import type { Profile } from '@/types';

type DummyProfileKey = 'jan' | 'mia' | 'tom' | 'sara';

export const DUMMY_PROFILES: Record<DummyProfileKey, Profile> = {
  jan: { id: 'profile-jan', name: 'Jan Claes', building: 'Building A' },
  mia: { id: 'profile-mia', name: 'Mia Peeters', building: 'Building B' },
  tom: { id: 'profile-tom', name: 'Tom Janssens', building: 'Building A' },
  sara: { id: 'profile-sara', name: 'Sara Peeters', building: 'Building B' },
};