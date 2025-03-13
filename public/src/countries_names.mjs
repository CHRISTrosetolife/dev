import { string_size } from "./string_size.mjs";
import { list_filter } from "./list_filter.mjs";
import { string_trim_whitespace } from "./string_trim_whitespace.mjs";
import { list_map } from "./list_map.mjs";
import { string_split_newline } from "./string_split_newline.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function countries_names() {
  let text = string_combine_multiple([
    "A\nAfghanistan\nAlbania\nAlgeria\nAndorra\nAngola\nAntigua and Barbuda\nArgentina\nArmenia\nAustralia\nAustria\nAzerbaijan\n\nB\nThe Bahamas\nBahrain\nBangladesh\nBarbados\nBelarus\nBelgium\nBelize\nBenin\nBhutan\nBolivia\nBosnia and Herzegovina\nBotswana\nBrazil\nBrunei\nBulgaria\nBurkina Faso\nBurundi\n\nC\nCabo Verde\nCambodia\nCameroon\nCanada\nCentral African Republic\nChad\nChile\nChina\nColombia\nComoros\nCongo, Democratic Republic of the\nCongo, Republic of the\nCosta Rica\nCôte d’Ivoire\nCroatia\nCuba\nCyprus\nCzech Republic\n\nD\nDenmark\nDjibouti\nDominica\nDominican Republic\nE\nEast Timor (Timor-Leste)\nEcuador\nEgypt\nEl Salvador\nEquatorial Guinea\nEritrea\nEstonia\nEswatini\nEthiopia\nF\nFiji\nFinland\nFrance\n\nG\nGabon\nThe Gambia\nGeorgia\nGermany\nGhana\nGreece\nGrenada\nGuatemala\nGuinea\nGuinea-Bissau\nGuyana\nH\nHaiti\nHonduras\nHungary\n\nI\nIceland\nIndia\nIndonesia\nIran\nIraq\nIreland\nIsrael\nItaly\n\nJ\nJamaica\nJapan\nJordan\nK\nKazakhstan\nKenya\nKiribati\nKorea, North\nKorea, South\nKosovo\nKuwait\nKyrgyzstan\n\nL\nLaos\nLatvia\nLebanon\nLesotho\nLiberia\nLibya\nLiechtenstein\nLithuania\nLuxembourg\nM\nMadagascar\nMalawi\nMalaysia\nMaldives\nMali\nMalta\nMarshall Islands\nMauritania\nMauritius\nMexico\nMicronesia, Federated States of\nMoldova\nMonaco\nMongolia\nMontenegro\nMorocco\nMozambique\nMyanmar (Burma)\n\nN\nNamibia\nNauru\nNepal\nNetherlands\nNew Zealand\nNicaragua\nNiger\nNigeria\nNorth Macedonia\nNorway\nO\nOman\nP\nPakistan\nPalau\nPanama\nPapua New Guinea\nParaguay\nPeru\nPhilippines\nPoland\nPortugal\nQ\nQatar\nR\nRomania\nRussia\nRwanda\nS\nSaint Kitts and Nevis\nSaint Lucia\nSaint Vincent and the Grenadines\nSamoa\nSan Marino\nSao Tome and Principe\nSaudi Arabia\nSenegal\nSerbia\nSeychelles\nSierra Leone\nSingapore\nSlovakia\nSlovenia\nSolomon Islands\nSomalia\nSouth Africa\nSpain\nSri Lanka\nSudan\nSudan, South\nSuriname\nSweden\nSwitzerland\nSyria\nT\nTaiwan\nTajikistan\nTanzania\nThailand\nTogo\nTonga\nTrinidad and Tobago\nTunisia\nTurkey\nTurkmenistan\nTuvalu\nU\nUganda\nUkraine\nUnited Arab Emirates\nUnited Kingdom\nUnited States\nUruguay\nUzbekistan\n\nV\nVanuatu\nVatican City\nVenezuela\nVietnam\nY\nYemen\nZ\nZambia\nZimbabwe",
  ]);
  let s = string_split_newline(text);
  let m = list_map(s, string_trim_whitespace);
  let f = list_filter(m, function (n) {
    let v = string_size(n) >= 2;
    return v;
  });
  let v2 = f;
  return v2;
}
