import { html_hr } from "./html_hr.mjs";
import { each_index } from "./each_index.mjs";
import { app_code_refresh_function_statement } from "./app_code_refresh_function_statement.mjs";
export function app_code_refresh_function_statement_list(list, parent, root) {
  each_index(list, (item, index) => {
    if (index >= 1) {
      html_hr(parent);
    }
    app_code_refresh_function_statement(parent, root, item, false);
  });
}
