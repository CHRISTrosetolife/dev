import { list_take_soft } from "./list_take_soft.mjs";
import { list_unique_json } from "./list_unique_json.mjs";
import { list_add_beginning } from "./list_add_beginning.mjs";
export function list_beginning_unique_take(
  questions_recent_stored,
  recent_new,
  questions_recent_limit,
) {
  list_add_beginning(questions_recent_stored, recent_new);
  questions_recent_stored = list_unique_json(questions_recent_stored);
  questions_recent_stored = list_take_soft(
    questions_recent_stored,
    questions_recent_limit,
  );
  return questions_recent_stored;
}
