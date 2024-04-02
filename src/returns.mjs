
import function_run from './function_run.mjs';
export async function returns(function_name, expected, args) {
    await function_run(function_name, args)
}