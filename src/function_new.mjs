import { function_new_generic } from "./function_new_generic.mjs";

export async function function_new(function_name) {
    await function_new_generic(function_name, '');
}