import { function_names } from "./function_names.mjs";
import { list_map } from "./list_map.mjs";

export async function functions_source() {
    let names = await function_names()
    let mapped = list_map(names, )
    return names;
}
