import { lesson_array_source_get } from "./lesson_array_source_get.mjs";
export function lesson_array_source_get_count(count) {
  let v = lesson_array_source_get(function () {
    return count;
  });
  return v;
}
