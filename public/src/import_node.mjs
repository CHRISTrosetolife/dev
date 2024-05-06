export async function import_node(libary_to_import) {
    let a;
    if (typeof window === 'undefined') {
        a = await import(libary_to_import);
    }
    return a;
}
