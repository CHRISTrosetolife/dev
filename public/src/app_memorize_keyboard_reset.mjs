import { app_memorize_button_keyboard_stylize } from "./app_memorize_button_keyboard_stylize.mjs";
import { object_values } from "./object_values.mjs";
import { each } from "./each.mjs";
export function app_memorize_keyboard_reset(context) {
  each(object_values(context.keyboard_buttons), (keyboard_button) => {
    app_memorize_button_keyboard_stylize(context, keyboard_button);
  });
}
