import { ceb_definition_prefix_ceb } from "./ceb_definition_prefix_ceb.mjs";
import { html_parse_tag_named_a_list_filter } from "./html_parse_tag_named_a_list_filter.mjs";
import { ceb_definition_en } from "./ceb_definition_en.mjs";
import { ceb_definition_no_results } from "./ceb_definition_no_results.mjs";
import { ceb_definition_url } from "./ceb_definition_url.mjs";
import { ceb_html_cache_parse_form1 } from "./ceb_html_cache_parse_form1.mjs";
import { ceb_definition_prefix_en } from "./ceb_definition_prefix_en.mjs";
import { ceb_definition_prefix } from "./ceb_definition_prefix.mjs";
import { html_parse_tag_named } from "./html_parse_tag_named.mjs";
import { list_pairs_to_lookup } from "./list_pairs_to_lookup.mjs";
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
import { string_combine_multiple } from "./string_combine_multiple.mjs";
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
    let v = {
      word,
      definitions: object_property_get(known, word),
    };
    return v;
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
  let skipped_text2 =
    "transact,albeit,handicraft,adjourn,potent,sentry,errand,limelight,hardy,lampshade,indigent,zest,abduct,genial,remit,hurtle,deaden,precipitation,insanitary,razed,hoist,over-bearing,sordid,cesspool,gauze,confederation,underwent,scram,cuss,nude,garb,upbraid,outset,appraisal,expedite,enflame,feud,meager,spearhead,stickler,outclass,sawtooth,buck,plume,keystone,unhearing,nook,ethereal,oblige,suckle,depreciate,vigilant,disdainful,reminisce,outclassed,stifle,meteoric,lagoon,unsightly,dryout,beat-up,affluent,ambient,repute,putrid,precipitate,sensuous,footgear,margarine,enrapture,satiable,cognize,bicker,wrangle,tarnish,insulate,sulphur,firewall,stonewall,spotty,decayable,hack,berate,pseudo,genitalia,blindside,gallbladder,addressee,cornstarch,doorsill,dope,induce,buttock,cock,connote,grinder,pandemonium,foxy,inlet,defecate,live-in,eerie,deplorable,appointee,unchain,darn,pout,outgrowth,regurgitate,docile,palatable,chicken-hearted,fantasm,amenity,slippy,depute,flounder,lonesome,stipulate,outback,eminence,dapper,barb,freight,penancing,bulrush,primal,impertinent,memento,siphon,ploy,whorl,dunno,nimbus,sesame,painstaking,bench-warmer,abasement,indemnify,biggish,pail,locomotive,waken,suicide,embroider,booze,whitish,raping,apiece,periphery,tiresome,frigthen,alluring,slop,perspiration,handkerchief,curate,upstage,vogue,by-pass,back-to-back,hound,trouser,caress,opaque,fill-in,castrate,pageant,mope,unmold,ladyfish,disseminate,deface,metropolis,metropolitan,guise,dishevelled,boarder,weedy,talisman,leaflet,edging,embezzle,coax,catchphrase,incubate,thunderclap,vagabond,rectify,bawling,adoptee,boo,backbite,wisecrack,mangle,provocative,con,dunce,nuzzle,idiom,vice,lumbar,wean,dazzle,vend,spay,limbo,subdivider,beatable,advisory,fondness,enshrine,shush,dissipate,redress,disarrayed,oblique,well-off,lacerate,stinger,incapacitated,side-glance,clobber,axle,trek,replant,feeder,stopper,earwig,slat,poise,crumple,diffuse,lob,billow,cascade,ruffle,keynote,playhouse,crispness,commandant,china,ostensible,expletive,reverberation,actualize,bendy,buffet,comprise,reseed,reek,decollate,cheep,guzzled,gobble,unresisting,spurt,missy,airwave,coop,cupboard,sensational,throb,migratory,maltreatment,horsemanship,delude,recuperate,unsubstantiated,coarse,seep,beep-beep,poach,spawn,intertwine,warp,cockfight,cockfighting,phlegm,engross,whop,blab,solder,nostalgia,precinct,outpace,villa,coachman,char,giddyup,limestone,bandy-legged,bowleg,bowlegged,flaccid,hoodlum,misfit,gully,steamroller,deform,crewman,embroidery,flop,prearrange,double-cross,crested,hush-hush,nursemaid,rut,pinworm,sulk,instigate,delve,leafstalk,hornbill,embassador,frisk,wide-eyed,pier,battalion,grime,smut,hellhole,kerosene,crash-dive,plunk,twang,monstrance,scaffold,scaffolding,constipate";
  let skipped_texts = [skipped_text, skipped_text2];
  each(skipped_texts, function (s) {
    list_add_multiple(skipped, string_split_comma(s));
  });
  let skipped_pairs = [
    "ka,quantifier",
    "siya,chair",
    "ila,birthmark",
    "kanila,cinnamon",
  ];
  let skipped_pairs_split = list_map_split_comma(skipped_pairs);
  each([skipped_pairs_split, replaced_split], function (split) {
    let v2 = each(split, function (s) {
      let v3 = assert(list_size_2, [s]);
      return v3;
    });
    return v2;
  });
  let lookup = list_pairs_to_lookup(skipped_pairs_split);
  let url = ceb_definition_url(word);
  let { parsed, children } = await ceb_html_cache_parse_form1(url);
  if (ceb_definition_no_results(children)) {
    let v4 = {
      word,
      definitions: [],
    };
    return v4;
  }
  let filtered4 = list_filter(children, function (c) {
    let v5 =
      c.type === "text" && string_includes(c.data, "Word - rootword - affixes");
    return v5;
  });
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
  let prefix_1 = ceb_definition_prefix_ceb();
  let a_href_lefts = html_parse_a_href_starts_with(parsed, prefix_1);
  let mapped3 = html_parse_map_text_trim(a_href_lefts);
  let mapped4 = list_map_index(mapped3, function (m, index) {
    let v6 = {
      text: m,
      index,
    };
    return v6;
  });
  let prefix_2 = ceb_definition_prefix_en();
  let matches = list_filter_property(mapped4, "text", word);
  if (list_empty_is(matches)) {
    let first = list_first(mapped4);
    word = object_property_get(first, "text");
    matches = list_filter_property(mapped4, "text", word);
  }
  let indices = list_map_property(matches, "index");
  let indices_at = list_map(indices, function (i) {
    let v7 = list_get(a_href_lefts, i);
    return v7;
  });
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
    let skips = await list_adder_async(async function (la) {
      if (greater_than_equal(list_size(filtered6), 2)) {
        await each_pairs_async(filtered6, async function (f, g) {
          let after = html_parse_href(g);
          let sense = "/sense/";
          if (string_starts_with(after, sense)) {
            let url_sense = string_combine_multiple([
              ceb_definition_prefix(),
              string_prefix_without(after, "/"),
            ]);
            let { children: children_sense } =
              await ceb_html_cache_parse_form1(url_sense);
            let filtered7 = list_filter(children_sense, function (c) {
              let v8 = html_parse_tag_named(c, "a");
              return v8;
            });
            let mapped7 = list_map(filtered7, html_parse_href);
            let filtered8 = list_filter(mapped7, function (m) {
              let v9 = string_starts_with(m, prefix_2);
              return v9;
            });
            let mapped8 = list_map(filtered8, function (f) {
              let v10 = string_prefix_without(f, prefix_2);
              return v10;
            });
            each(mapped8, la);
          }
        });
      }
    });
    let defs = html_parse_map_text_trim(filtered6);
    defs = list_map(defs, function (d) {
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
    defs = list_filter(defs, function (d) {
      let v11 = list_includes_not(skips, d);
      return v11;
    });
    defs = list_filter(defs, function (d) {
      let v12 = string_starts_with_not(d, "*");
      return v12;
    });
    list_add_multiple(definitions, defs);
  }
  definitions = list_map(definitions, function (d) {
    if (object_property_exists(lookup, d)) {
      let v13 = object_property_get(lookup, d);
      return v13;
    }
    let index = string_index(d, "[");
    if (greater_than_equal(index, 0)) {
      let result = string_trim_whitespace(string_take(d, index));
      return result;
    }
    return d;
  });
  definitions = list_map(definitions, string_whitespace_normalize);
  definitions = await list_filter_async(definitions, async function (d) {
    let replaced = string_replace(d, "s", "z");
    if (equal_not(replaced, d)) {
      if (list_includes(definitions, replaced)) {
        let v14 = false;
        return v14;
      }
    }
    if (list_includes(skipped, d)) {
      let v15 = false;
      return v15;
    }
    if (
      list_any(skipped_pairs_split, function (s) {
        let [left, right] = s;
        let v16 = and(equal(word, left), equal(right, d));
        return v16;
      })
    ) {
      let v17 = false;
      return v17;
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
      let v18 = false;
      return v18;
    }
    let children2 = await ceb_definition_en(d);
    let as = html_parse_tag_named_a_list_filter(children2);
    let mapped5 = list_map(as, html_parse_href);
    let filtered5 = list_filter_starts_with(mapped5, prefix_1);
    let mapped6 = list_map(filtered5, function (f) {
      let v19 = string_prefix_without(f, prefix_1);
      return v19;
    });
    let tables = list_filter(children2, function (c) {
      let v20 = html_parse_tag_named(c, "table");
      return v20;
    });
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
      let v21 = false;
      return v21;
    }
    if (list_includes_not(mapped6, word)) {
      let v22 = false;
      return v22;
    }
    let v23 = true;
    return v23;
  });
  definitions = list_unique(definitions);
  let v24 = {
    word,
    definitions,
  };
  return v24;
}
