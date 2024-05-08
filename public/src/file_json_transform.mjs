import {file_write_json} from "./file_write_json.mjs";
import {file_read_json} from "./file_read_json.mjs";
export async function file_json_transform(lambda, file_path, args) {
    let ast = await file_read_json(file_path);
    let result = await lambda(ast, ...args);
    await file_write_json(file_path, ast);
    return result;
}
