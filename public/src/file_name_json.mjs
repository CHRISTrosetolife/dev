import { string_combine } from "./string_combine.mjs";
export function file_name_json(without_extension) {
  return string_combine(without_extension, ".json");
}
