import { prayers_needy } from "./prayers_needy.mjs";
import { prayers_religions } from "./prayers_religions.mjs";
import { prayers_sanctify } from "./prayers_sanctify.mjs";
import { prayers_voices } from "./prayers_voices.mjs";
import { prayers_church_leadership } from "./prayers_church_leadership.mjs";
import { prayers_heal_me } from "./prayers_heal_me.mjs";
import { prayers_big } from "./prayers_big.mjs";
import { prayers_love } from "./prayers_love.mjs";
import { prayers_list_generic_5 } from "./prayers_list_generic_5.mjs";
import { string_prefix_and } from "./string_prefix_and.mjs";
import { prayers_bbw } from "./prayers_bbw.mjs";
import { string_case_upper_first } from "./string_case_upper_first.mjs";
import { list_map } from "./list_map.mjs";
import { prayers_countries } from "./prayers_countries.mjs";
import { prayers_sins } from "./prayers_sins.mjs";
import { prayers_famous } from "./prayers_famous.mjs";
import { prayers_music } from "./prayers_music.mjs";
import { prayers_bible } from "./prayers_bible.mjs";
import { prayers_unity } from "./prayers_unity.mjs";
import { prayers_family } from "./prayers_family.mjs";
import { list_denest } from "./list_denest.mjs";
export function prayers() {
  let v = list_denest([
    "Cause me to perfectly and maximally glorify and obey the Father, Jesus and the Holy Spirit",
    "May the words of my mouth and the meditation of my heart be pleasing in your sight, O Lord, my Rock and my Redeemer",
    "From now on cause all Christians, including me, to suffer in the flesh and cease from sin",
    "If it means not sinning, take anything away, do anything",
    "Thank You",
    "Cause me to never be hospitalized again, never be in therapy again and desire your desire for my lifespan",
    "Maximize Christians walking with God who would want to",
    "If possible tame every tongue that would want to be tamed",
    "Cause me to either speak perfectly or be silent",
    "If possible have mercy on all creation, may all come to repentance, may the names of all always be written in the book of life and lead all souls to Jesus",
    "May there be life and life abundantly",
    "May the coming of the day of God be hastened",
    prayers_love(),
    prayers_family(),
    prayers_sanctify(),
    prayers_heal_me(),
    prayers_unity(),
    prayers_bible(),
    prayers_sins(),
    prayers_church_leadership(),
    prayers_voices(),
    prayers_music(),
    prayers_famous(),
    prayers_countries(),
    prayers_religions(),
    "May my muscles grow",
    prayers_list_generic_5(
      [
        "the works of Christians, including mine",
        "my word of God singing and speaking",
        "my programming, including speed",
        "Christian websites, apps and programming, including mine",
        "my teaching",
        "my proofs",
        "my thinking",
        "my work, including any job search",
        "any organization or business of mine",
        "any leadership I have",
      ],
      prayers_bbw,
      string_prefix_and,
    ),
    prayers_bbw("my music, inlcuding songs, composing, improvising and piano"),
    prayers_needy(),
    prayers_big(),
  ]);
  let v2 = list_map(v, string_case_upper_first);
  return v2;
}
