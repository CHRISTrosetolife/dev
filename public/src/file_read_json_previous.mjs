import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { file_read_json } from "./file_read_json.mjs";
export async function file_read_json_previous(previous_name) {
  return await file_read_json(
    string_combine_multiple(["../", previous_name, ".json"]),
  );
}
