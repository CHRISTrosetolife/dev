import { string_split_empty } from "./string_split_empty.mjs";
import { list_concat } from "./list_concat.mjs";
export function app_contact_removes() {
  return list_concat(string_split_empty("bdefghmnsw"), [
    "ut",
    "ur",
    "re",
    "res",
    "tur",
    "en",
    "sen",
    "ing",
  ]);
}
