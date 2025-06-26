import { list_join_space } from "./list_join_space.mjs";
import { list_take } from "./list_take.mjs";
import { string_split_space } from "./string_split_space.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function facebook_data_messages_date_get(message) {
  let when = object_property_get(message, "when");
  let s = string_split_space(when);
  let s3 = list_take(s, 3);
  let s3j = list_join_space(s3);
  let v2 = s3j;
  return v2;
}
