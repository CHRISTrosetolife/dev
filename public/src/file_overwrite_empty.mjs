import { file_overwrite } from "./file_overwrite.mjs";
export async function file_overwrite_empty(p) {
  return await file_overwrite(p, "");
}
