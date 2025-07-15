import { file_read_json } from "./file_read_json.mjs";
export async function crypto_key() {
  let v = await file_read_json();
  return v;
}
