import path from 'path';
let {argv} = process;
let remaining = argv.slice(2);
let first = remaining[0];
let args = remaining.slice(1);
let src = 'src';
let extension = 'mjs';
let extension_marker = '.';
let folder_current = '.';
let first_with_extension = [first,extension_marker,extension].join('');
let function_path_second = path.join(folder_current,src,first_with_extension)
let function_path = './' + function_path_second;
async function run() {
    let imported = await import(function_path);
    let imported_function = imported[first];
    let result = await imported_function(...args);
    console.log(result);
}
run();