import { bible_audio_player_book } from "./bible_audio_player_book.mjs";
export async function bible_audio_player_proverbs() {
  let book_from = "Proverbs";
  await bible_audio_player_book(book_from);
}
