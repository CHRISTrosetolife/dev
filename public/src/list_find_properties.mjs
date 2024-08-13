import { list_single_message } from "./list_single_message.mjs";
import { list_filter_properties } from "./list_filter_properties.mjs";
import { json_to } from "./json_to.mjs";
export function list_find_properties(list, matcher) {
  let matches = list_filter_properties(list, matcher);
  let match = list_single_message(matches, () =>
    json_to({
      matcher,
    }),
  );
  return match;
}
