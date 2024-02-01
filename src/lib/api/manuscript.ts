"use server";

import { unstable_noStore as noStore } from "next/cache";
import { get, post } from "./";
import {
  GET_MANUSCRIPT_LIST_URL,
  GET_MANUSCRIPT_VIEW_URL,
  APPROVE_MANUSCRIPT_URL,
} from "@/const/endPoints";
import { ManuscriptListResponse } from "@/@types/manuscripts/list";
import {
  ManuscriptViewResponse,
  AddManuscriptParams,
} from "@/@types/manuscripts/view";

export async function getManuscriptList(): Promise<ManuscriptListResponse> {
  noStore();

  try {
    const data = await get<ManuscriptListResponse>(GET_MANUSCRIPT_LIST_URL);
    return data;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch manuscript data.");
  }
}

export async function getManuscriptDetail(
  id: number | string
): Promise<ManuscriptViewResponse> {
  noStore();

  try {
    const data = await get<ManuscriptViewResponse, { id: string | number }>(
      GET_MANUSCRIPT_VIEW_URL,
      {
        id: id,
      }
    );
    return data;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch manuscript data.");
  }
}

export async function approveManuscript(params: { id: string | number }) {
  noStore();

  try {
    const data = await post("https://gst.com", params);
    console.log("data ==> ", data);
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to approve manuscript.");
  }
}
