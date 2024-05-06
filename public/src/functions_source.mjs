import { function_names } from "./function_names.mjs";

export async function functions_source() {
    let names = await function_names()
    return names;
}
