import { lesson_new_name } from "./lesson_new_name.mjs";
import { lesson_new_modules_add } from "./lesson_new_modules_add.mjs";
import { function_copy } from "./function_copy.mjs";
export async function lesson_new(previous, name) {
  if (false) {
    let lesson_name = lesson_new_name(name);
  }
  await function_copy(previous, name);
  await lesson_new_modules_add(name);
}
