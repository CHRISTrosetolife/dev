import {bible_engbsb_storage_path_file} from "./bible_engbsb_storage_path_file.mjs";
import {storage_url} from "./storage_url.mjs";
import {http_get} from "./http_get.mjs";
import {html_document_body} from "./html_document_body.mjs";
export async function app_memorize() {
    let root = html_document_body();
    let file_path = bible_engbsb_storage_path_file('JHN19');
    let data = await http_get(storage_url(file_path));
    console.log({
        data
    });
}
