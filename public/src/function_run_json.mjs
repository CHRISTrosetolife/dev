import { function_run } from "./function_run.mjs";
import { json_from } from "./json_from.mjs";

export async function function_run_json(function_name, args_json_string) {
    let {args} = json_from(args_json_string)
    return await function_run(function_name,args)
}
