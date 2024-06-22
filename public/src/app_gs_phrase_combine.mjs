import { list_filter } from "./list_filter.mjs";
import { list_join_space } from "./list_join_space.mjs";
export function app_gs_phrase_combine() {
  return list_join_space(list_filter());
}
