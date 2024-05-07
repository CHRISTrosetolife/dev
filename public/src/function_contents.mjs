import {list_adder_async} from "./list_adder_async.mjs";
import {promise_all} from "./promise_all.mjs";
import {file_read} from "./file_read.mjs";
import {list_map} from "./list_map.mjs";
import {function_paths} from "./function_paths.mjs";
export async function function_contents() {
    let paths = await function_paths();
    let mapped = list_map(paths, async file_path => {
        return {
            file_path,
            contents: await file_read(file_path)
        };
    });
    return await promise_all(mapped);
}
