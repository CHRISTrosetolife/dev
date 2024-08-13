import { storage_local_set } from "./storage_local_set.mjs";
import { app_language_refresh_quiz } from "./app_language_refresh_quiz.mjs";
import { app_language_atoms_slice } from "./app_language_atoms_slice.mjs";
import { list_first } from "./list_first.mjs";
import { app_language_quiz_settings } from "./app_language_quiz_settings.mjs";
export async function app_language_quizzes_start(context, chunk_sizes) {
  let { app_fn, group } = context;
  let atoms = app_language_atoms_slice(app_fn, group);
  let settings_choices = app_language_quiz_settings(atoms, chunk_sizes);
  storage_local_set(context.app_fn, "quiz_settings_choices", settings_choices);
  storage_local_set(
    context.app_fn,
    "quiz_settings",
    list_first(settings_choices),
  );
  await app_language_refresh_quiz(context);
}
