import { file_new } from './file_new.mjs';

export async function function_new_args(function_name, args) {
    let args_split = args.split(',');
    let contents = `
export function ${function_name}(${args_split.join(', ')}) {

}`
    await file_new(`./src/${function_name}`, contents);
}