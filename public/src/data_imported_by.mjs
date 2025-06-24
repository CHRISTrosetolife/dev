import { data_get } from "./data_get.mjs";
export async function data_imported_by() {
  let v = await data_get("literal_strings");
  return v;
}
