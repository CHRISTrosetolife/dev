import { app_language_atoms_slice } from "./app_language_atoms_slice.mjs";
import { list_first } from "./list_first.mjs";
import { app_language_quiz_settings } from "./app_language_quiz_settings.mjs";
export function app_language_quizzes_start(
  app_fn,
  group,
  context,
  chunk_sizes,
  refresh_quiz,
) {
  let a = context;
  let atoms = app_language_atoms_slice(app_fn, group);
  context.settings_choices = app_language_quiz_settings(atoms, chunk_sizes);
  refresh_quiz(list_first(context.settings_choices));
}
