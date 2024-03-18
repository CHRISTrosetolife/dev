import { function_name_to_path } from "./function_name_to_path.mjs";
import { file_line_prepend } from "./file_line_prepend.mjs";

export async function function_import_add(function_name, import_name) {
    let function_path = function_name_to_path(function_name);
    let import_code = `import { ${import_name} } from "./${import_name}.mjs";`
    await file_line_prepend(function_path, import_code)
}