import { file_new } from './file_new.mjs';

export async function function_new(function_name, args) {
    let split = args.split(',');
    let contents = `
export function ${function_name}(${split.join(', ')}) {

}`
    await file_new(`./src/${function_name}`, contents);
}