import { lesson_new_modules_add } from "./lesson_new_modules_add.mjs";
import { function_copy } from "./function_copy.mjs";
import { string_combine } from "./string_combine.mjs";
export async function lesson_new(name, previous) {
  const prefix = "lesson_";
  let lesson_name = string_combine(prefix, name);
  await function_copy(previous, lesson_name);
  await lesson_new_modules_add(lesson_name);
}
