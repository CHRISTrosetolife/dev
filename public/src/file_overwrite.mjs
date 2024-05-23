import { file_overwrite_generic } from "./file_overwrite_generic.mjs";
export async function file_overwrite(file_name, data) {
  return await file_overwrite_generic(file_name, data, "utf-8");
}
