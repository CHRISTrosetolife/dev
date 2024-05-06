export async function import_node(libary_to_import, variable_to_eval) {
    let a;
    if (typeof window === 'undefined') {
        a = await import(libary_to_import);
    }
    return a;
}
