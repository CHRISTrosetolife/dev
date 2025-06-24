import { data_get } from "./data_get.mjs";
export async function data_identifiers() {
  let v = await data_get("identifiers");
  return v;
}
