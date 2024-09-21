import { app_code_refresh_function_statement } from "./app_code_refresh_function_statement.mjs";
import { each } from "./each.mjs";
export function app_code_refresh_function_statement_list(list, parent, root) {
  each(list, (item) => {
    app_code_refresh_function_statement(parent, root, item, false);
  });
}
