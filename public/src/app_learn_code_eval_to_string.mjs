import { app_learn_code_eval_messages_to_string } from "./app_learn_code_eval_messages_to_string.mjs";
import { app_learn_code_eval } from "./app_learn_code_eval.mjs";
export function app_learn_code_eval_to_string(source) {
  let messages = app_learn_code_eval(source);
  let joined = app_learn_code_eval_messages_to_string(messages);
  return joined;
}
