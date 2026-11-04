import type { Profile } from './Profile';


export enum ListingCategory {
  Tools = 'tools',
  Gardening = 'gardening',
  Outdoors = 'outdoors',
  Electronics = 'electronics',
}

export interface Listing {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  category: ListingCategory;
  owner: Profile;
  isAvailable: boolean;
}
