export async function ceb_translations_learnentry_generate() {
    let folder = `/translations/ceb/learnentry/letters/`;
    let extension = `.txt`;
    await folder_read(folder, extension)
}