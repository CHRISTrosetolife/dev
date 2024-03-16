let {argv} = process;
let remaining = argv.slice(2);
let first = remaining[0];
let args = remaining.slice(1);
let src = 'src';
let extension = 'mjs';
let extension_marker = '.';
console.log(remaining);