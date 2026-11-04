import type { CommunityRequest } from '@/types';
import { DUMMY_PROFILES } from './dummyProfiles';

export interface CommunityRequestService {
  getCommunityRequests: () => Promise<CommunityRequest[]>;
}

// Hardcoded data until the database is connected.
const DUMMY_COMMUNITY_REQUESTS: CommunityRequest[] = [
  {
    id: 'request-1',
    requester: DUMMY_PROFILES.sara,
    title: 'Needs a ladder',
    description: 'Need it to paint the hallway. Any size works.',
    startDate: '2026-11-01',
    endDate: '2026-11-02',
  },
  {
    id: 'request-2',
    requester: DUMMY_PROFILES.tom,
    title: 'Needs a carpet cleaner',
    description: 'One day is enough. I can pick it up.',
    startDate: '2026-11-07',
    endDate: '2026-11-07',
  },
  {
    id: 'request-3',
    requester: DUMMY_PROFILES.mia,
    title: 'Needs a drill',
    description: 'Hanging shelves on Saturday.',
    startDate: '2026-11-14',
    endDate: '2026-11-15',
  },
];

export const communityRequestService: CommunityRequestService = {
  getCommunityRequests: async () => DUMMY_COMMUNITY_REQUESTS,
};