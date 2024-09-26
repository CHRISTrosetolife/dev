import { each_object_values } from "./each_object_values.mjs";
import { app_memorize_button_keyboard_stylize } from "./app_memorize_button_keyboard_stylize.mjs";
export function app_memorize_keyboard_reset(context) {
  let o = context.keyboard_buttons;
  let lambda = (keyboard_button) => {
    app_memorize_button_keyboard_stylize(context, keyboard_button);
  };
  each_object_values(o, lambda);
}
