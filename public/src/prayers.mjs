import { prayers_list_generic_5 } from "./prayers_list_generic_5.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { string_prefix_and } from "./string_prefix_and.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { prayers_bbw } from "./prayers_bbw.mjs";
import { string_case_upper_first } from "./string_case_upper_first.mjs";
import { list_map } from "./list_map.mjs";
import { prayers_sabbwa } from "./prayers_sabbwa.mjs";
import { prayers_heal_afflicted } from "./prayers_heal_afflicted.mjs";
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
    prayers_family(),
    "May love feel and be strong during period and childbirth, without pain",
    "Cause all Christians including love and I to love, to eagerly and joyfully do the desire of God, be holy, perfect in mercy, humble, gentle, patient, diligent, to be wise, generous, obedient to Scripture, perfect in prayer, to hope, to have pure hearts, to be faithful in marriage if married, to be faithful in singleness if single, to choose good, including not vowing",
    "Cause all vows of all Christians including mine to be fulfilled",
    "Cause love and I to have zero negative emotions and be pure in heart",
    "Cause my family to willingly listen in parallel to audio bibles",
    "Maximize the faith of all Christians including love and I",
    "Cause me to have no sinful or angry tone",
    "Cause Christian wives, including love, to submit to their husbands, according to the word of God",
    "Cause Christian husbands, including Jared, to love their wife as Christ loved the church",
    "Banish all sinful desire in all Christians including me for anyone that You have not given as a spouse",
    "Let children obey their parents",
    "Direct all our footsteps and thoughts",
    "Answer all the prayer requests every Christian including me should be praying and help any others You desire to pray like this",
    "Bless, help and provide for each person who has asked me to pray for them or give materially",
    "Heal us",
    "May all who have commanded me to take medicine command me to stop taking medicine",
    "No more risperidone",
    "If I have emotions, thoughts, memories, or sleep may they be healed",
    prayers_heal_afflicted(
      list_join_comma_space([
        "self-harm desires",
        "hallucinations",
        "delusions",
        "depression",
        "oppression",
        "coughing",
        "or poor vision",
      ]),
    ),
    "Banish my desire for soda and sinful pleasure",
    "May I speak and understand Cebuano",
    "May my face be clean-shaven without any cuts",
    "May all Christians lose weight who should including myself",
    "May my muscles grow",
    "May we fast",
    "Protect all humans, including love and I, and all angels of the Lord from all demons",
    "May all Christians speak and behave worthily in the presence of heavenly angels",
    "Perfectly open up the hearts, eyes and ears of all to scripture and truth",
    "Perfectly engraft the word of God into every heart",
    "Cause all to be a perfect hearer and a perfect doer of the word of God",
    "Perfectly maximize the increase of Your word being planted and watered",
    prayers_unity(),
    prayers_bible(),
    prayers_sins(),
    "May all church meetings inlcuding buildings be as You desire",
    "May all Lord’s Supper bread and drink be as You desire",
    prayers_list_generic_5(
      [
        "elder",
        "overseer",
        "bishop",
        "pastor",
        "teacher",
        "apostle",
        "prophet",
        "deacon",
        "servant",
        "messenger",
      ],
      function (w) {
        let v3 = prayers_bbw(string_combine_multiple(["every ", w]));
        return v3;
      },
      string_prefix_and,
    ),
    "May all shepherding, stewardship, preaching and teaching be perfect",
    "If possible, may all seminary and religious education be free and online",
    "May the voice of every Christian including mine lead all including listeners to Christ",
    prayers_bbw(
      "all worship, all worship singing voices, my singing voice, and my speaking voice",
    ),
    prayers_bbw(
      "all Christian songwriting, Christian speaking, Christian writing, and Christian prayer",
    ),
    prayers_music(),
    prayers_famous(),
    prayers_countries(),
    list_map(
      ["Jews", "descendants of Abraham", "Muslims", "Hindus", "Buddhists"],
      prayers_sabbwa,
    ),
    "Let love maximally glorify the Father, Jesus and the Holy Spirit",
    prayers_bbw(
      list_join_comma_space([
        "love",
        "her love",
        "her faith",
        "her fruit of the Spirit",
        "her and my offspring",
      ]),
    ),
    "May the desire of the Father be done, including regarding...",
    "Protect the teeth of love and I",
    prayers_list_generic_5(
      [
        "my works",
        "my word of God singing and speaking",
        "my programming",
        "my programming speed",
        "my apps",
        "my music",
        "my songs",
        "my composing and improvising",
        "my piano",
        "my teaching",
        "my proofs",
        "my thinking",
        "my job search",
        "my work",
        "any organization or business of mine",
        "any leadership I have",
        "the works of Christians",
      ],
      prayers_bbw,
      string_prefix_and,
    ),
    prayers_bbw("Christian websites and programming"),
    "May I fellowship with any Christians from the generation Jesus spoke of and if God desires may they be known to the body of Christ on earth",
    prayers_list_generic_5(
      [
        "orphans",
        "children",
        "widows",
        "foreigners",
        "the poor",
        "the hungry",
        "the thirsty",
        "the elderly",
        "prisoners",
        "the sick",
      ],
      prayers_bbw,
      string_prefix_and,
    ),
    "If it means anyone is saved, may there be miracles, wonders, signs, healing",
    "May every thought be as if an optimal prayer is prayed",
    prayers_bbw("the bodies and any tools of elect angels"),
    prayers_bbw("M"),
    "For each challenge God gave Job, if God desires, may I fulfill",
    "Predestine all my remaining choices",
    "May God choose all my remaining choices, not me",
    "Not only me but anyone who would want this",
  ]);
  let v2 = list_map(v, string_case_upper_first);
  return v2;
}
