export async function file_js_parse(file_name) {
    let code = await file_read(file_name);
    let parsed = js_parse(code);
    return parsed;
}