import { data_get } from "./data_get.mjs";
export async function data_importing() {
  let v = await data_get("importing");
  return v;
}
