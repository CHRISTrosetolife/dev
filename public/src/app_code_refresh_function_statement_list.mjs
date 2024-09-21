import { each_index } from "./each_index.mjs";
import { app_code_refresh_function_statement } from "./app_code_refresh_function_statement.mjs";
export function app_code_refresh_function_statement_list(list, parent, root) {
  each_index(list, (item) => {
    app_code_refresh_function_statement(parent, root, item, false);
  });
}
