import type {Listing} from '@/types';
import {ListingCategory} from '@/types';
import {DUMMY_PROFILES} from './dummyProfiles';

export interface ListingService {
  getListings: () => Promise<Listing[]>;
  getListingById: (id: string) => Promise<Listing>;
}

const DUMMY_LISTINGS: Listing[] = [
  {
    id: 'listing-1',
    title: 'Cordless drill',
    description: 'Two batteries included. Good for shelves and light drilling.',
    category: ListingCategory.Tools,
    owner: DUMMY_PROFILES.jan,
    isAvailable: true,
  },
  {
    id: 'listing-2',
    title: 'Camping tent',
    description: 'Fits three people. Comes with pegs and a repair kit.',
    category: ListingCategory.Outdoors,
    owner: DUMMY_PROFILES.mia,
    isAvailable: false,
  },
  {
    id: 'listing-3',
    title: 'Hedge trimmer',
    description: 'Electric, 5 metre cable. Please clean it after use.',
    category: ListingCategory.Gardening,
    owner: DUMMY_PROFILES.tom,
    isAvailable: true,
  },
  {
    id: 'listing-4',
    title: 'Action camera',
    description: 'Waterproof case and two mounts included.',
    category: ListingCategory.Electronics,
    owner: DUMMY_PROFILES.sara,
    isAvailable: true,
  },
];

export const listingService: ListingService = {
  getListings: async () => DUMMY_LISTINGS,

  getListingById: async (id) => {
    const listing = DUMMY_LISTINGS.find((candidate) => candidate.id === id);
    if (listing === undefined) {
      throw new Error(`Listing ${id} not found`);
    }
    return listing;
  },
};
