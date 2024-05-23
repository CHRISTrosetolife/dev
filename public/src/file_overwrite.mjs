import { file_overwrite_generic } from "./file_overwrite_generic.mjs";
export async function file_overwrite(file_name, data) {
  const encoding = "utf-8";
  return await file_overwrite_generic(file_name, data, encoding);
}
