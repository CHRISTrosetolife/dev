import {storage_upload_object} from "./storage_upload_object.mjs";
import {bible_engbsb_chapter} from "./bible_engbsb_chapter.mjs";
import { string_combine } from "./string_combine.mjs";
import { file_name_json } from "./file_name_json.mjs";
export async function bible_engbsb_chapter_upload(chapter_name) {
    let data = await bible_engbsb_chapter(chapter_name);
    let file_name = file_name_json(chapter_name);
    let destination = string_combine('bible/engbsb/', file_name);
    await storage_upload_object(data, destination);
}
