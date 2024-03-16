import path from 'path';
let {argv} = process;
let remaining = argv.slice(2);
let first = remaining[0];
let args = remaining.slice(1);
let src = 'src';
let extension = 'mjs';
let extension_marker = '.';
let first_with_extension = [first,extension_marker,extension].join('');
let function_path = path.join([src,first_with_extension])
console.log(function_path);