import { file_new } from './file_new.mjs';

export function function_new(function_name, args) {
    let split = args.split(',');
    let contents = `
export function ${function_name}(${split.join(', ')}) {

}`
    file_new(`./src/${function_name}`, contents);
}