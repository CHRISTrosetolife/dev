export async function bible_chapter_parsed(bible_folder, chapter_name) {
    let folder_gitignore_result = folder_gitignore();
    let folder = path_join([folder_gitignore_result, bible_folder]);
    let chapter_path = string_combine(chapter_name, '.htm');
    let joined = path_join([folder, chapter_path]);
    let read = await file_read(joined);
    let parsed = html_parse(read);
    return parsed;
}