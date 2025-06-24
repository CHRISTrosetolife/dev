import { data_get } from "./data_get.mjs";
export async function data_identifiers() {
  let property_name = "identifiers";
  let v = await data_get(property_name);
  return v;
}
