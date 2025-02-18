export function js_declaration_to_body(e) {
  let { body: body_outer } = e;
  let { body: body_inner } = body_outer;
  return body_inner;
}
