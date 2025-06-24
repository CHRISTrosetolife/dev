import { data_get } from "./data_get.mjs";
export async function data_functions() {
  let v = await data_get("functions");
  return v;
}
