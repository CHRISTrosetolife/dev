import {string_replace} from './string_replace.mjs';
export function string_replace_multiple(input, froms, to) {
  for (let from of froms) {
    input = string_replace(input, from, to);
  }
  return input;
}
