import { IdName } from "../base";

export interface ManuscriptCommentData {
  id: number;
  name: string;
  position: string;
  date: string;
  content: string;
}

export interface ManuscriptData {
  id: number;
  category_name: string;
  type: IdName;
  title: string;
  content: string;
  creator_name: string;
  created_on: string;
  status: string;
  reviewers: IdName[];
  attachments: IdName[];
  comments: ManuscriptCommentData[];
}

export interface ManuscriptViewResponse {
  rows: ManuscriptData;
}
