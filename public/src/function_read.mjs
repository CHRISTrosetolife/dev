import { file_read } from "./file_read.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";

export async function function_read(function_name) {
    let function_path = function_name_to_path(function_name);
    return await file_read(function_path)
}