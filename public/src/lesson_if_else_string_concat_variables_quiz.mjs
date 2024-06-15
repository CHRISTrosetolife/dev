import { list_shuffle } from "./list_shuffle.mjs";
import { list_last } from "./list_last.mjs";
import { string_delimit } from "./string_delimit.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_code_log_join_plus } from "./app_learn_code_log_join_plus.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_add } from "./list_add.mjs";
import { identity } from "./identity.mjs";
import { list_sort_string } from "./list_sort_string.mjs";
import { app_learn_code_random_identifiers } from "./app_learn_code_random_identifiers.mjs";
import { list_take } from "./list_take.mjs";
import { add_1 } from "./add_1.mjs";
import { js_code_statement_let_assign_multiple } from "./js_code_statement_let_assign_multiple.mjs";
export function lesson_if_else_string_concat_variables_quiz(variable_count) {
  let strings = app_learn_code_random_identifiers(add_1(variable_count));
  list_sort_string(strings, identity);
  let mapped = list_map(strings, string_delimit);
  let mapped_taken = list_take(mapped, variable_count);
  let names = app_learn_code_random_identifiers(variable_count);
  let parts = [list_last(mapped)];
  for (let name of names) {
    list_add(parts, name);
  }
  list_shuffle(parts);
  let lines = [];
  list_add(lines, js_code_statement_let_assign_multiple(names, mapped_taken));
  list_add(lines, app_learn_code_log_join_plus(parts));
  return list_join_newline(lines);
}
