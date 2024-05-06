export async function import_multi(libary_to_import, variable_to_eval) {
    let a;
    if (typeof window === 'undefined') {
        a = await import(libary_to_import);
    } else {
        a = eval(variable_to_eval);
    }
    return a;
}
