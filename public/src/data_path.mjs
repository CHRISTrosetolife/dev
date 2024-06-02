import { folder_current_prefix_combine } from "./folder_current_prefix_combine.mjs";
export function data_path() {
  return folder_current_prefix_combine("data.json");
}
