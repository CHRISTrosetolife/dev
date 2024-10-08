import { html_parse_tag_named } from "./html_parse_tag_named.mjs";
import { list_pairs_to_lookup } from "./list_pairs_to_lookup.mjs";
import { string_to_url } from "./string_to_url.mjs";
import { list_size } from "./list_size.mjs";
import { list_size_2 } from "./list_size_2.mjs";
import { string_trim_whitespace } from "./string_trim_whitespace.mjs";
import { html_parse_text } from "./html_parse_text.mjs";
import { html_parse_map_text_trim } from "./html_parse_map_text_trim.mjs";
import { list_concat } from "./list_concat.mjs";
import { html_parse_a_href_starts_with_text } from "./html_parse_a_href_starts_with_text.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { each_pairs_async } from "./each_pairs_async.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { log } from "./log.mjs";
import { list_map_split_comma } from "./list_map_split_comma.mjs";
import { and } from "./and.mjs";
import { list_any } from "./list_any.mjs";
import { each } from "./each.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_filter_async } from "./list_filter_async.mjs";
import { string_prefix_without } from "./string_prefix_without.mjs";
import { list_filter_starts_with } from "./list_filter_starts_with.mjs";
import { html_parse_href } from "./html_parse_href.mjs";
import { html_parse_parent } from "./html_parse_parent.mjs";
import { html_parse_tag_not } from "./html_parse_tag_not.mjs";
import { ceb_form1 } from "./ceb_form1.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { add } from "./add.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { string_includes } from "./string_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_second } from "./list_second.mjs";
import { list_index } from "./list_index.mjs";
import { list_first } from "./list_first.mjs";
import { html_parse_a_href_starts_with } from "./html_parse_a_href_starts_with.mjs";
import { html_cache_parse } from "./html_cache_parse.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { string_combine } from "./string_combine.mjs";
import { list_get } from "./list_get.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { assert } from "./assert.mjs";
import { equal } from "./equal.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_map } from "./list_map.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { string_replace } from "./string_replace.mjs";
import { string_index } from "./string_index.mjs";
import { string_take } from "./string_take.mjs";
import { list_includes } from "./list_includes.mjs";
import { equal_not } from "./equal_not.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { string_split_space } from "./string_split_space.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_last } from "./list_last.mjs";
import { string_whitespace_normalize } from "./string_whitespace_normalize.mjs";
import { string_starts_with_not } from "./string_starts_with_not.mjs";
import { string_split_comma } from "./string_split_comma.mjs";
export async function ceb_definition(word) {
  let known = {
    didto: ["there"],
  };
  if (object_property_exists(known, word)) {
    return {
      word,
      definitions: object_property_get(known, word),
    };
  }
  let replaced = ["distuinguish,distinguish"];
  let replaced_split = list_map_split_comma(replaced);
  let skipped = [
    "opulent",
    "nevus",
    "ignoble",
    "nay",
    "frontage",
    "emanate",
    "ergo",
    "rake-off",
    "vig",
    "demerit",
    "pratfall",
    "stamen",
    "contravene",
    "frolicsome",
    "aloof",
    "mirthful",
    "surmise",
    "avocation",
    "fore",
    "pedigree",
    "capitulate",
    "perjure",
    "convivial",
    "shoring",
    "assemblage",
    "yen",
    "vail",
    "curtsey",
    "conge",
    "sated",
    "jean",
    "moil",
    "accede",
    "gusto",
    "extol",
    "ephemeral",
    "julienne",
    "adage",
    "domicile",
    "decrepit",
    "subjunctive",
    "parlance",
    "progeny",
    "scion",
    "dungaree",
    "remuneration",
    "remittance",
    "cockscomb",
    "dingy",
    "exhibiti",
    "glen",
    "mould",
    "exude",
    "abominate",
    "tassel",
    "inflorescence",
    "maxim",
    "croton",
    "mirth",
    "implicate",
    "ravage",
    "gaunt",
    "emaciated",
    "garner",
    "semblance",
    "effulgence",
    "phonograph",
    "lesion",
    "wreak",
    "clemency",
    "vinify",
    "boondocks",
    "ire",
    "sheen",
    "pauper",
    "headman",
    "tup",
    "voluime",
    "obverse",
    "aha",
    "sentinel",
    "impetus",
    "illustrious",
    "eminent",
    "laud",
    "infront",
    "transpire",
    "specter",
    "spectre",
    "wraith",
  ];
  let skipped_text =
    "well-to-do,hubby,full-fledged,thoroughfare,shanty,supposition,skin-dive,latent,oddity,respire,quorum,damn,loggerhead,lout,receptacle,spall,chum,choosy,fastidious,finicky,aegis,godsend,grazeland,epidermis,skipper,nab,delimit,demarcate,sugarcane,parry,chaperon,censure,erstwhile,proffer,nefarious,pernicious,fingerling,rapturous,garnered,far-flung,epithet,copulate,capsize,conversant,garfish,needlefish,dowager,matinee,forego,unhand,stark,unclad,douse,dismal,decant,jiffy,wee,fiend,cursory,racy,moo,troat,jovial,earmark,dicker,wangle,outlast,forage,rollicking,patrimony,unequivocal,crazed,malefactor,venerable,lax,luster,rabid,sham,glared,varnish,encroachment,usurp,hindmost,ponderous,thorax,stumpy,imputation,allege,inculpate,vitalize,coir,husk,vroom,repudiate,cordiality,commendation,ardor,ardour,burin,appose,molest,duster,disparagement,bequest,truculent,riven,balk,driftwood,bluggoe,foregone,bygone,flay,surmount,rook,launder,froth,oust,purlin,suss,indisposed,inundation,conn,efface,hovel,prevaricator,vestal,hen-peck,lurid,highbrow,sagacious,vista,interment,fiddly,scanty,cupid,adjudge,sadistic,proprietor,bawl,yule,inkling,frass,despond,conglomerate,goby,savable,saveable,textile,dame,habitue,champ,inundate,culm,x,trounce,inspan,bewailed,molt,slough,cozen,whitlow,gunstock,heckle,adulterated,awry,skimpy,penitence,transect,counterspell,embarrass,stirrer,censorious,url,gallivant,peregrinate,unsated,clammy,frigid,pullulate,precipice,nonchalant,phlegmatic,ebullience,spunk,sonny,cheloid,keloid,gaudy,coaming,outlay,cupidity,rancor,furtive,spasmodic,bookie,busty,aggrieve,bastion,preclude,bullpen,corral,paddock,ensconce,drab,mendicant,abash,blackmark,ardent,torrid,egressing,hutch,kennel,ode,enshroud,guano,chagrin,pique,accrete,depository,watercourse,chinky,calumny,mutineer,confection,furl,scag,germinate,sultry,seaboard,abscise,geez,laconic,footmark,encase,neckline,panicle,vagina,garbed,laudable,qadi,beaut,hemline,affront,motley,morose,headland,promontory,smegma,abrasion,indolence,sloven,trepang,gesso,estrous,lustre,understudy,wamble,viscera,ding,intrepid,nirvana,becharm,malediction,zinc,abattoir,facsimile,parochial,nascent,lascivious,nil,befuddle,nonplus,mandible,melancholic,nestling,kowtow,dredge,affluence,sputum,pane,grindstone,abrogate,canistel,subterfuge,obviate,phantasma,will-o'-the-wisp,friable,fawner,ululate,crap,shit,muff,whisker,protege,wattle,berit,berith,bris,briss,brith,sermonizer,haggard,paltry,congest,ovum,testis,yawp,straight-lined,condign,hamper,maim,middlemost,midmost,bespeak,moneyed,snub,crochet,adduce,pander,ailing,half-assed,four-spot,scruples,cropper,stover,inculcate,besprinkle,spatter,cachet,knave,tambour,coffer,lading,aborigine,castigate,sate,miter,mitre,ruse,affianced,aberrate,tattle,tittle-tattle,protract,paragon,pullet,halfbeak,louse,bawdy,ill-bred,bout,bounteous,incorrigible,tallow,clit,clitoris,enthuse,know-how,caulk,abate,scrappy,stoneware,sappanwood,long-familiar,taut,jack,stableboy,love-potion,tiff,rowdy,uncouth,viand,cordial,curt,approbate,breadfruit,erection,chemise,trident,sweatbox,shank,reververate,junta,chaw,deft,powerhouse,ebullient,egest,cootie,foist,gonzo,quaint,umbilicus,mollify,quirt,delineate,courtesan,hussy,barrio,tumbler,embrocation,liniment,truant,referendum,salvo,entask,purblind,acrid,dumbass,maltreat,accretion,emigrate,pervade,cuspid,overlie,laze,affable,piffling,slather,imprudent,airman,cinder,wived,excise,scull,calabash,masturbate,acumen,wetnurse,ablution,debonair,conch,blare,windfall,strew,rebuff,kibitz,frogmouth,bullfight,compatriot,derisive,snaffle,townmate,cornice,bridgework,samer,anise,fennel,gamecock,vesicle,needing,dissolution,tong,tamarind,filament,whitecap,adieu,dammar,dally,dollop,seine,airy,acclaiming,arraign,quip,accost,moor,zephyr,vagrant,contusion,canvassing,masticate,jag,allah,aslope,derelict,strangulate,gyp,felonious,caucus,delirium,imitable,rootle,affix,dilate,tip-cat,incise,buggy,shoddy,slipmouth,jilt,tuber,gay,fagot,geld,effloresce,exfoliate,alibi,pummel,addendum,libra,tatter,ramshackle,parley,addable,addible,loquacious,vise,tuberculosis,bitterish,alb,affability,bemock,disconcert,tentacle,bunt,arrogate,strenuous,nestle,sputter,adze,disembark,macaque,dollarbird,abarticulation,ramie,rummy,pecker,engender,tightfisted,miser,niggard,lacquer,gander,italia,valance,amble,mosey,clove,mazy,maze,chute,centavo,sunray,gaffe,crackdown,debilitate,threesome,abet,beguile,humdrum,outcrop,petiole,narra,waft,disprove,impugn,conjunctivitis,blowback,mince,tussle,felicitate,perfunctory,scuff,shamble,bobbin,lineup,magnate,kayo,spigot,tampon,insipid,astringent,tweet,cajole,encrust,dapple,hermaphrodite,amphora,inter,translucent,sargassum,cull,amuck,broadminded,salinate,hemp,jute,Ambassis,glassyfish,ahem,girder,procurement,amortise,squelch,pumice,parson,crinkle,demijohn,extricate,neighbourhood,vainglorious,knock-kneed,clink,embellish,slipknot,malinger,tricksy,handgun,palmistry,dilly-dally,ting,loll,hanker,supplicate,dallying,poky,opression,vivacious,upend,overdog,tiled,joggle,foundling,interloper,kibitzer,trumped-up,pedicab,becloud,tonic,sweetish,affright,slopping,manspreading,fluster,abreact,lurch,burgle,jimmy,antic,bosk,aggrandize,compeer,harangue,undulation,mendacious,nettle,delectable,cattails,clattery,hock,laundering,loogie,labiate,deadbeat,sadden,appetent,praetor,moulder,indolent,viscous,ylang-ylang,parasol,braze,aridness,clavicle,cockatoo,hunker,angular,overdelicate,rustle,arrowroot,embroil,enmesh,bungler,porter,plover,bra,brassiere,poliomyelitis,settee,evanesce,frill,ladle,quint,edental,abscond,clod,catcall,enamelware,dun,piffle,scalawag,meme,titillate,trellis,dopy,mussy,monogram,cellie,remora,abut,rattan,taro,nipa,nypa,pre-chew,grapple,verruca,economize,scrimp,adduct,tonsure,crotch,tavern,supine,smokestack,tamp,scallion,kipper,dessicate,abbot,waddle,rein,soursop,scapula,recourse,proliferate,helm,dehusk,paddy,requiem,substantiate,terrace,grisly,ambiance,stymie,patsy,befool,pee,piddle,piss,weewee,horny,lecherous,bordello,brothel,kinky,moldboard,nanus,g-string,menfolk,frothing,bob,furcate,induct,swingle,incidence,querulous,evert,grimace,sequester,entwine,misdo,foment,inseminate,rummage,coleus,cerumen,glaum,ejaculate,acclimatize,quay,wharf,greatcoat,cuckold,patter,nape,nucha,scruff,feint,pare,zinnia,creche,august,colic,bolo,chicanery,dinero,civics,maracas,hectare,saddlecloth,abrade,mamilla,nipple,teat,tit,zippy,catwalk,escargot,broadbill,skipjack,smart-ass,swellhead,wise-ass,jeez,strafe,mottle,workfellow,glower,angelus,lavender,lilac,sprightly,pallium,umbracullum,pustule,mottled,edifice,protuberance,freemason,mason,fetlock,monkeypod";
  list_add_multiple(skipped, string_split_comma(skipped_text));
  let skipped_pairs = [
    "ka,quantifier",
    "siya,chair",
    "ila,birthmark",
    "kanila,cinnamon",
  ];
  let skipped_pairs_split = list_map_split_comma(skipped_pairs);
  each([skipped_pairs_split, replaced_split], (split) =>
    each(split, (s) => assert(list_size_2, [s])),
  );
  let lookup = list_pairs_to_lookup(skipped_pairs_split);
  let prefix = "http://www.binisaya.com/";
  let url = string_combine_multiple([
    prefix,
    "node/21?search=binisaya&word=",
    word,
    "&Search=Search",
  ]);
  let { parsed, children } = await ceb_html_cache_parse_form1(url);
  let filtered9 = list_filter_property(children, "type", "text");
  let texts = list_map_property(filtered9, "data");
  if (list_includes(texts, "No results found for the Cebuano word ")) {
    return {
      word,
      definitions: [],
    };
  }
  async function ceb_html_cache_parse_form1(url) {
    let parsed = await html_cache_parse(url);
    let children = ceb_form1(parsed);
    return {
      parsed,
      children,
    };
  }
  let filtered4 = list_filter(
    children,
    (c) =>
      c.type === "text" && string_includes(c.data, "Word - rootword - affixes"),
  );
  if (list_empty_not_is(filtered4)) {
    let f4_first = list_first(filtered4);
    let f4_first_index = list_index(children, f4_first);
    let f4_first_index_a = add(f4_first_index, 3);
    let f4_first_a = list_get(children, f4_first_index_a);
    let f4_first_a_text = html_parse_text(f4_first_a);
    let f4_first_a_tag = object_property_get(f4_first_a, "name");
    assert(equal, [f4_first_a_tag, "b"]);
    word = f4_first_a_text;
  }
  let prefix_1 = string_combine(prefix, "cebuano/");
  let prefix_2 = string_combine(prefix, "english/");
  let a_href_lefts = html_parse_a_href_starts_with(parsed, prefix_1);
  let mapped3 = html_parse_map_text_trim(a_href_lefts);
  let mapped4 = list_map_index(mapped3, (m, index) => {
    return {
      text: m,
      index,
    };
  });
  let matches = list_filter_property(mapped4, "text", word);
  if (list_empty_is(matches)) {
    let first = list_first(mapped4);
    word = object_property_get(first, "text");
    matches = list_filter_property(mapped4, "text", word);
  }
  let indices = list_map_property(matches, "index");
  let indices_at = list_map(indices, (i) => list_get(a_href_lefts, i));
  let definitions = [];
  for (let index_at of indices_at) {
    let parent = index_at;
    let root_is = false;
    do {
      parent = html_parse_parent(parent);
      if (parent.type === "root") {
        root_is = true;
        break;
      }
    } while (html_parse_tag_not(parent, "tr"));
    if (root_is) {
      continue;
    }
    let { childNodes } = parent;
    assert(equal, [list_size(childNodes), 2]);
    let right = list_second(childNodes);
    let filtered6 = html_parse_a_href_starts_with(right, "");
    let skips = await list_adder_async(async (la) => {
      if (greater_than_equal(list_size(filtered6), 2)) {
        await each_pairs_async(filtered6, async (f, g) => {
          let after = html_parse_href(g);
          let sense = "/sense/";
          if (string_starts_with(after, sense)) {
            let url_sense = string_combine_multiple([
              prefix,
              string_prefix_without(after, "/"),
            ]);
            let { children: children_sense } =
              await ceb_html_cache_parse_form1(url_sense);
            let filtered7 = list_filter(children_sense, (c) =>
              html_parse_tag_named(c, "a"),
            );
            let mapped7 = list_map(filtered7, html_parse_href);
            let filtered8 = list_filter(mapped7, (m) =>
              string_starts_with(m, prefix_2),
            );
            let mapped8 = list_map(filtered8, (f) =>
              string_prefix_without(f, prefix_2),
            );
            each(mapped8, la);
          }
        });
      }
    });
    let defs = html_parse_map_text_trim(filtered6);
    defs = list_map(defs, (d) => {
      for (let r of replaced_split) {
        if (equal(d, list_first(r))) {
          d = list_last(r);
        }
        return d;
      }
    });
    if (0) {
      log({
        defs,
      });
    }
    defs = list_filter(defs, (d) => list_includes_not(skips, d));
    defs = list_filter(defs, (d) => string_starts_with_not(d, "*"));
    list_add_multiple(definitions, defs);
  }
  definitions = list_map(definitions, (d) => {
    if (object_property_exists(lookup, d)) {
      return object_property_get(lookup, d);
    }
    let index = string_index(d, "[");
    if (greater_than_equal(index, 0)) {
      let result = string_trim_whitespace(string_take(d, index));
      return result;
    }
    return d;
  });
  definitions = list_map(definitions, string_whitespace_normalize);
  definitions = await list_filter_async(definitions, async (d) => {
    let replaced = string_replace(d, "s", "z");
    if (equal_not(replaced, d)) {
      if (list_includes(definitions, replaced)) {
        return false;
      }
    }
    if (list_includes(skipped, d)) {
      return false;
    }
    if (
      list_any(skipped_pairs_split, (s) => {
        let [left, right] = s;
        return and(equal(word, left), equal(right, d));
      })
    ) {
      return false;
    }
    let split_d = string_split_space(d);
    if (list_multiple_is(split_d)) {
      if (0) {
        log({
          word,
          d,
          skip_because: "contains spaces",
        });
      }
      return false;
    }
    let url = string_combine(prefix_2, d);
    url = string_to_url(url);
    let { children: children2 } = await ceb_html_cache_parse_form1(url);
    let as = list_filter(children2, (c) => html_parse_tag_named(c, "a"));
    let mapped5 = list_map(as, html_parse_href);
    let filtered5 = list_filter_starts_with(mapped5, prefix_1);
    let mapped6 = list_map(filtered5, (f) =>
      string_prefix_without(f, prefix_1),
    );
    let tables = list_filter(children2, (c) =>
      html_parse_tag_named(c, "table"),
    );
    let tables_length = list_size(tables);
    assert(less_than_equal, [tables_length, 3]);
    if (0) {
      if (equal(tables_length, 3)) {
        let middle = list_second(tables);
        let words = html_parse_a_href_starts_with_text(middle, "/cebuano/");
        mapped6 = list_concat(mapped6, words);
      }
    }
    if (list_empty_is(mapped6)) {
      return false;
    }
    if (list_includes_not(mapped6, word)) {
      return false;
    }
    return true;
  });
  definitions = list_unique(definitions);
  return {
    word,
    definitions,
  };
}
