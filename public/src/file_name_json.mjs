import { string_combine } from "./string_combine.mjs";
export function file_name_json(key_encoded) {
  return string_combine(key_encoded, ".json");
}
