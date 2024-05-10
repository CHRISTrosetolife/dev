import { js_code_statement } from "./js_code_statement.mjs";
import { string_combine } from "./string_combine.mjs";
export function js_code_import_path(import_path, import_name) {
  let import_path_combined = string_combine(import_path, import_name);
  let import_code = js_code_statement(
    `import { ${import_name} } from "${import_path_combined}.mjs"`,
  );
  return import_code;
}
