import { list_index_last } from "./list_index_last.mjs";
export function app_language_position_initial(context) {
  return {
    left: 0,
    right: list_index_last(context.group),
  };
}
