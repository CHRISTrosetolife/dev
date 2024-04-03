import {generate} from 'astring';
export function js_unparse(ast) {
  return generate(ast, {
    indent: '    ',
  });
}
