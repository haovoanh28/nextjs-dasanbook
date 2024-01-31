import { IdNamePair, PaginationResponse } from "../base";

export interface ManuscriptListItemData {
  id: string;
  category_name: string;
  type: IdNamePair;
  title: string;
  creator_name: string;
  created_on: string;
  status: string;
  reviewers: IdNamePair[];
}

export interface ManuscriptListResponse {
  pagination: PaginationResponse;
  rows: ManuscriptListItemData[];
}
