import { function_new_generic } from "./function_new_generic.mjs";

export async function function_new_args(function_name, args) {
    let args_split = args.split(',');
    let args_joined = args_split.join(', ');
    await function_new_generic(function_name, args_joined, '');
}


