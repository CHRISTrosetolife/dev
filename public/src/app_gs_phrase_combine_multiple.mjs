import { app_gs_phrase_combine } from "./app_gs_phrase_combine.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
export function app_gs_phrase_combine_multiple(list_of_lists) {
  app_gs_phrase_combine(list_concat_multiple(list_of_lists));
}
