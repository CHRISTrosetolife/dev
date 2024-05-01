import {storage_upload_object} from "./storage_upload_object.mjs";
import {bible_engbsb_chapter} from "./bible_engbsb_chapter.mjs";
export async function bible_engbsb_chapter_upload(chapter_name) {
    let data = bible_engbsb_chapter(chapter_name);
    storage_upload_object();
}
