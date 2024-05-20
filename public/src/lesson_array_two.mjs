import { lesson_simple } from "./lesson_simple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { string_combine } from "./string_combine.mjs";
export function lesson_array_two() {
  let description = "array with two items";
  let example_message = string_combine("with an ", description);
  return lesson_simple(
    function () {
      let lines = [];
      return list_join_newline(lines);
    },
    example_before,
    description,
    example_message,
    [],
  );
  function example_before(parent) {}
  function screen1(parent) {
    "in javascript , lists are called `arrays";
  }
}
