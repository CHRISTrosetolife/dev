export function html_parse_outer(parsed, element) {
  return parsed(element).prop("outerHTML");
}
