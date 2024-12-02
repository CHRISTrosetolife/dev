import { string_combine } from "./string_combine.mjs";
export function file_name_json(name) {
  return string_combine(name, ".json");
}
