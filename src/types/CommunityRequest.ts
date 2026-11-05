import type { Profile } from './Profile';

export interface CommunityRequestDraft {
  title: string;
  description: string;
  startDate:string;
  endDate:string;
}


export interface CommunityRequest {
  id: string;
  requester: Profile;
  title: string;
  description: string;
  startDate:string;
  endDate:string;
}