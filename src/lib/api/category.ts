import {
  GET_CATEGORY_LIST_URL,
  GET_CATEGORY_VIEW_URL,
} from "@/const/endPoints";
import { get } from "./";
import { CategoryListReponse } from "@/@types/category/list";
import { CategoryViewResponse } from "@/@types/category/view";

export async function getCategoryList(): Promise<CategoryListReponse> {
  try {
    const data = await get<CategoryListReponse>(GET_CATEGORY_LIST_URL);
    return data;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to get category list data.");
  }
}

export async function getCategoryDetail(
  id: string | number
): Promise<CategoryViewResponse> {
  try {
    const data = await get<CategoryViewResponse, { id: string | number }>(
      GET_CATEGORY_VIEW_URL,
      { id: id }
    );
    return data;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to get category detail data.");
  }
}
