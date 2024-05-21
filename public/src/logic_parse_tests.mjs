export function logic_parse_tests() {
  return [
    "a()",
    "a(b())",
    "a(b(c()))",
    "a(b(),c())",
    "a(b(),c(d()))",
    "a(b(),c(d(),e()))",
    "a(b(),c(d(),e(),f()))",
    "a(b)",
    "a(b,c)",
  ];
}
