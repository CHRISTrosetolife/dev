export function string_delimit(input) {
    let string_delimeter = "'";
    let result = `${string_delimeter}${input}${string_delimeter}`;
    return result;
}