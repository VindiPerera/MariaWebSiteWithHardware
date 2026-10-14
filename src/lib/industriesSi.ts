/**
 * Sinhala + English mix text for the industry pages, keyed by industry slug.
 * Written around what each shop gets from MariaPoS, in plain words, not word for word.
 */
export type IndustrySi = {
  name: string;
  short: string;
  headline: string;
  intro: string;
  challenges: string[];
  highlights: [title: string, body: string][];
  faqs: [q: string, a: string][];
};

export const industriesSi: Record<string, IndustrySi> = {
  "supermarket-grocery": {
    name: "Supermarkets සහ Grocery වෙළඳසැල්",
    short: "Supermarket සහ grocery",
    headline: "Queue එක ඉක්මනින් ඉවර කරන Supermarket සහ Grocery POS system එක",
    intro:
      "කුඩා grocery වෙළඳසැලක සිට till කිහිපයක් ඇති supermarket එකක් දක්වා, MariaPoS barcode එකෙන් හෝ බර අනුව තත්පර කීපයකින් bill කරනවා. බඩු දහස් ගණනක් තිබුණත් stock නිවැරදිව තියාගන්නවා. Internet නැතත් නොනැවතී වැඩ කරනවා.",
    challenges: [
      "කාර්යබහුල වෙලාවල සහ සති අන්තයේ දිගු queues",
      "Barcode නැති හෝ බර අනුව විකුණන බඩු දහස් ගණනක්",
      "Supplier මිල නිතර වෙනස් වෙද්දී stock සහ cost අවුල් වීම",
      "කුමන shift එකේදීද වුණේ කියලා සොයාගන්න බැරි මුදල් අඩුවීම්",
    ],
    highlights: [
      ["තත්පර කීපයකින් bill කරන්න", "USB scanner එකකින් scan කරන්න, F-key shortcuts පාවිච්චි කරන්න. හැම customer කෙනෙක්ම තත්පර කීපයකින් ඉවරයි."],
      ["බර අනුව විකුණන්න", "සහල්, පරිප්පු, සීනි, එළවළු වගේ බඩු KG හෝ g වලින්, දශම ප්‍රමාණ සමඟ නිවැරදිව bill කරන්න."],
      ["නිවැරදි ලාභය බලන්න", "Supplier මිල වෙනස් වුණත්, හැම sale එකකම සැබෑ ලාභය ඔබට පෙනෙනවා. පරණම stock මුලින්ම විකිණෙනවා."],
      ["Barcode labels හදාගන්න", "ගෙදර pack කරපු සහ barcode නැති බඩු වලට labels print කරන්න, එවිට හැමදෙයක්ම scan කරන්න පුළුවන්."],
      ["Loyalty සහ SMS bills", "නිතර එන customers ලාට points දීලා ආපහු ගෙන්වාගන්න, bill එක ඔවුන්ගේ phone එකටම යවන්න."],
    ],
    faqs: [
      ["බර අනුව බඩු bill කරන්න පුළුවන්ද?", "පුළුවන්. KG, g, L, ml වගේ units පාවිච්චි කරන්න පුළුවන්, counter එකේදී ප්‍රමාණය දශම සහිතව ඇතුළත් කරන්නත් පුළුවන්."],
      ["Till එකකට වඩා පාවිච්චි කරන්න පුළුවන්ද?", "පුළුවන්. හැම till එකකම MariaPoS තියෙනවා, ඒවා එකම cloud එකට සම්බන්ධ වෙන නිසා ඔබට සියලුම sales එකවර පෙනෙනවා."],
      ["Internet නැති වෙලාවලත් වැඩ කරනවද?", "ඔව්. Bill කිරීම, stock සහ shifts internet නැතුවම වැඩ කරනවා. Internet ආපු ගමන් ඉබේම cloud එකට යනවා."],
    ],
  },
  pharmacy: {
    name: "Pharmacies සහ Healthcare වෙළඳසැල්",
    short: "Pharmacy",
    headline: "කල් ඉකුත්වීමෙන් වන පාඩුව අඩු කරන Pharmacy POS සහ stock software",
    intro:
      "Pharmacy එකක කුඩා බඩු දහස් ගණනක් බොහෝ distributors ලාගෙන් credit එකට එනවා. MariaPoS හැම batch එකක්ම, supplier cheque එකක්ම සහ cashier shift එකක්ම පාලනය කරන ගමන්, counter එකේදී ඉක්මනින් bill කරන්නත් උදව් වෙනවා.",
    challenges: [
      "Distributors ගණනාවක්, credit සහ post-dated cheques",
      "Suppliers ගෙන් නිතර එන මිල වෙනස්වීම්",
      "Strip, card හෝ pack අනුව විකුණන බඩු",
      "දිගු වෙලාවක් විවෘතව තියෙන කාලයේ staff මුදල් හසුරුවන හැටි",
    ],
    highlights: [
      ["පරණ stock මුලින්ම විකිණෙනවා", "හැම batch එකකටම තමන්ගේම මිලක් තියෙන නිසා, පරණ stock මුලින් විකිණෙමින් කල් ඉකුත්වීමෙන් වන පාඩුව අඩු වෙනවා."],
      ["Distributor ගෙවීම් අමතක වෙන්නේ නැහැ", "හැම distributor කෙනෙකුටම ගෙවන්න තියෙන මුදල බලන්න, cheques කල් පිරෙන්න කලින් මතක් කිරීම් ලබාගන්න."],
      ["ඕනෑම ප්‍රමාණයකට විකුණන්න", "Pack, card, bottle හෝ piece අනුව, එකිනෙකට නිවැරදි මිලකින් විකුණන්න."],
      ["Shift එකක මුදල් නිවැරදිද කියලා බලන්න", "Pharmacist හෝ cashier කෙනෙකුට අනුව shift එකක් ආරම්භයේ සහ අවසානයේ මුදල්, අඩුවක් හෝ වැඩියක් තිබුණොත් ඒකත් record වෙනවා."],
      ["Customer ගේ ඉතිහාසය", "Phone number එකෙන් customer එක සොයාගෙන, ඔහු මීට කලින් ගත්ත දේවල් සහ credit බලන්න."],
    ],
    faqs: [
      ["Distributor credit සහ cheques බලාගන්න පුළුවන්ද?", "පුළුවන්. Supplier ට ගෙවන්න තියෙන මුදල්, කොටස් වශයෙන් ගෙවීම් සහ post-dated cheques බලාගන්න පුළුවන්, login වෙද්දී කල් පිරෙන cheques ගැන මතක් කිරීම් එනවා."],
      ["Cashier ලා discount දෙනවා වළක්වන්න පුළුවන්ද?", "පුළුවන්. Item discount, bill discount සහ මිල වෙනස් කිරීම වෙන වෙනම අවසර, user කෙනෙකුට අනුව off කරන්න පුළුවන්."],
      ["Stock එකේ වටිනාකම බලන්න පුළුවන්ද?", "පුළුවන්. Inventory report එකෙන් අතේ ඇති stock සහ ඒවායේ වටිනාකම පෙන්වනවා."],
    ],
  },
  "hardware-store": {
    name: "Hardware සහ Building Material වෙළඳසැල්",
    short: "Hardware වෙළඳසැල",
    headline: "මීටර, box සහ contractor customers ලා හසුරුවන Hardware වෙළඳසැල් POS",
    intro:
      "Hardware වෙළඳසැලක් piece, මීටර, box සහ bag අනුව walk-in customers ලාටත්, credit එකට contractors ලාටත් විකුණනවා. MariaPoS හැම unit එකක්ම, සාමාන්‍ය සහ wholesale මිල සහ customer credit වෙනම පොතක් නැතුව එකම තැනකින් හසුරුවනවා.",
    challenges: [
      "දිග, බර සහ pack අනුව විකුණන බඩු",
      "Contractors ලාට සහ සාමාන්‍ය customers ලාට වෙනස් මිල",
      "Trade customers ලාගේ විශාල credit ශේෂයන්",
      "Barcode නැති කුඩා parts දහස් ගණනක්",
    ],
    highlights: [
      ["ඕනෑම unit එකක්", "මීටර, අඩි, KG, box, pack සහ piece, දශම ප්‍රමාණ සමඟ."],
      ["එක key එකකින් wholesale මිල", "Contractors සහ resellers ලා සඳහා F5 එකෙන් bill එක wholesale මිලට මාරු කරන්න."],
      ["Customer credit", "Customer කෙනෙකුට අනුව credit bills, කොටස් ගෙවීම් සහ ගෙවන්න ඉතිරි මුදල."],
      ["Barcode labels", "Bins සහ parts වලට labels ඇලවීමෙන් counter එකේදී scan කරන්න පුළුවන්."],
      ["Cheque ගෙවීම්", "Cheque number එක, bank එක සහ දිනය bill එකේ record වෙන විදිහට cheques භාර ගන්න."],
    ],
    faqs: [
      ["Cable හෝ pipe මීටර අනුව විකුණන්න පුළුවන්ද?", "පුළුවන්. Product unit එක m, ft හෝ cm ලෙස set කර, checkout එකේදී දශම ප්‍රමාණ ඇතුළත් කරන්න."],
      ["Contractors ලාට වෙනස් මිලක් දෙන්න පුළුවන්ද?", "පුළුවන්. හැම product එකකටම සාමාන්‍ය සහ wholesale මිල තියෙනවා, bill එක ඒ දෙක අතර මාරු කරන්න පුළුවන්."],
      ["Credit customers ලාව බලාගන්න පුළුවන්ද?", "ඔව්. Credit bills, ගෙවීම් සහ ශේෂයන් POS එකේත් cloud එකේත් customer කෙනෙකුට අනුව බලාගන්න පුළුවන්."],
    ],
  },
  "clothing-textile": {
    name: "Clothing, Textile සහ Fashion වෙළඳසැල්",
    short: "Clothing සහ textile",
    headline: "උත්සව සෘතුවේ rush එකට Clothing, Textile සහ Fashion POS",
    intro:
      "උත්සව සෘතුවේ සාප්පු යන අයත් වැඩියි, discounts ත් වැඩියි. MariaPoS එකෙන් promo codes, loyalty points සහ returns පිළිවෙලට හසුරුවන ගමන්, හැම cashier කෙනෙකුගේම till එකේ වගකීම තහවුරු කරගන්න පුළුවන්.",
    challenges: [
      "උත්සව සෘතුවල ජනාකීර්ණ කාලය",
      "පාලනය කරන්න අමාරු discounts සහ offers",
      "Exchanges සහ returns",
      "මීටර අනුව විකුණන රෙදි",
    ],
    highlights: [
      ["Promo codes සහ discounts", "වලංගු promo codes සහ අවසර සහිත discounts සමඟ උත්සව offers පවත්වන්න."],
      ["Returns සහ exchanges", "Item එක නැවත stock එකට එකතු කර, cash හෝ credit එක නිවැරදි කරන invoice-based returns."],
      ["Loyalty points", "Customers ලා points උපයා, ඊළඟ සෘතුවටත් ආපසු එනවා."],
      ["දිග අනුව රෙදි විකුණන්න", "රෙදි මීටර හෝ yard අනුව, දශම ප්‍රමාණ සමඟ bill කරන්න."],
      ["SMS bills", "Exchange එකකට සාක්ෂියක් customers ලාට තියෙන්න bill එක SMS කරන්න."],
    ],
    faqs: [
      ["උත්සව discount campaigns පවත්වන්න පුළුවන්ද?", "පුළුවන්. Promo codes හදලා item හෝ bill discounts දෙන්න, ඒවා භාවිතා කළ හැකි staff කවුද කියලා ඔබට පාලනය කරන්න පුළුවන්."],
      ["Exchanges කරන්නේ කොහොමද?", "මුල් invoice එක අනුව item එක return කරන්න (එවිට ඒක stock එකට එකතු වෙනවා), ඊට පස්සේ අලුත් item එක bill කරන්න."],
      ["Customers ලාට bill එක SMS එකෙන් දෙන්න පුළුවන්ද?", "පුළුවන්. Checkout එකේදී prepaid SMS credits වලින් bill එක SMS කරනවා."],
    ],
  },
  "bookshop-stationery": {
    name: "Bookshops සහ Stationery වෙළඳසැල්",
    short: "Bookshop සහ stationery",
    headline: "පාසල් ආරම්භයේ rush එකට Bookshop සහ Stationery POS",
    intro:
      "ජනවාරි මාසය bookshops වලට අවුරුද්දේ කාර්යබහුලම කාලයයි. MariaPoS queue එක ඉක්මනින් ඉවර කරනවා, කුඩා බඩු දහස් ගණනක් තියාගන්නවා, මොනවාද විකිණුණේ කියලා හරියටම පෙන්වනවා — එවිට වෙලාවට reorder කරන්න පුළුවන්.",
    challenges: ["පාසල් සෘතුවේ queues", "අඩු වටිනාකමේ කුඩා බඩු දහස් ගණනක්", "Barcode නැති බඩු", "කාර්යබහුල කාලයේ stock ඉවර වීම"],
    highlights: [
      ["Barcode එකෙන් හෝ නමින් සොයන්න", "ISBN සහ barcodes scan කරන්න, නැත්නම් එකම box එකෙන් නමින් සොයන්න."],
      ["Labels print කරන්න", "පැන්, පොත් සහ barcode එකක් නැති බඩු වලට barcode labels print කරන්න."],
      ["Stock අඩුවෙන් ඉවර වෙන්න කලින් දැනගන්න", "පාසල් සෘතුවේ උච්චතම කාලයට කලින් reorder කළ යුත්තේ මොනවාද කියලා දැනගන්න."],
      ["වැඩිපුරම විකිණෙන බඩු බලන්න", "කාලය අනුව හොඳම විකිණෙන බඩු බලා, ඊළඟ අවුරුද්දේ stock සැලසුම් කරන්න."],
    ],
    faqs: [
      ["පොත් වල ISBN barcodes scan කරන්න පුළුවන්ද?", "පුළුවන්. ඔබේ scanner එකට කියවිය හැකි ඕනෑම barcode එකක් product එකේ save කර, checkout එකේදී scan කරන්න පුළුවන්."],
      ["Barcode labels print කරන්න පුළුවන්ද?", "පුළුවන්. ඔබේ products සඳහා barcode labels MariaPoS එකෙන්ම හදලා print කරන්න පුළුවන්."],
    ],
  },
  "electronics-mobile": {
    name: "Mobile Phone සහ Electronics වෙළඳසැල්",
    short: "Mobile සහ electronics",
    headline: "Mobile phone, accessories සහ electronics වෙළඳසැල් සඳහා POS",
    intro:
      "වටිනා බඩු, card සහ bank transfer ගෙවීම්, warranty ගැන අහන්න ආපසු එන customers. MariaPoS හැම ගෙවීම් ක්‍රමයක්ම record කරනවා, පරණ bill එකක් ඕනෑම වෙලාවක ඉක්මනින් සොයාගන්න පුළුවන් විදිහට තියාගන්නවා.",
    challenges: ["වටිනා බඩු සහ මුදල් අවදානම", "Card, cash සහ transfer මිශ්‍ර ගෙවීම්", "Warranty සහ return ප්‍රශ්න", "Cashier ලා discount අනිසි ලෙස දීම"],
    highlights: [
      ["එක bill එකක් ක්‍රම කීපයකින් ගෙවන්න", "කොටසක් cash වලින්, කොටසක් card හෝ transfer වලින් ගෙවන්න, references එක්කම record වෙනවා."],
      ["පරණ bill එකක් ඉක්මනින් සොයාගන්න", "Invoice හෝ customer අනුව ඕනෑම bill එකක් සොයාගෙන warranty claims සඳහා නැවත print කරන්න."],
      ["Discount පාලනය", "අනුමත staff ට පමණක් මිල අඩු කරන්න පුළුවන්, counter එකේදී manager ගේ PIN එකෙන් අනුමත කරගන්නත් පුළුවන්."],
      ["Sales ඔබේ phone එකට", "හැම sale එකක්ම සිදුවෙන මොහොතේම ඔබේ phone එකට ලබාගන්න."],
    ],
    faqs: [
      ["Warranty claims සඳහා පරණ bills සොයාගන්න පුළුවන්ද?", "පුළුවන්. Sales history එකෙන් invoice, දිනය හෝ customer අනුව සොයාගෙන bill එක නැවත print කරන්න පුළුවන්."],
      ["Bank transfer references record කරන්න පුළුවන්ද?", "පුළුවන්. Bank transfer ගෙවීම් වලදී bill එකේ reference number එක record වෙනවා."],
    ],
  },
  "cosmetics-beauty": {
    name: "Cosmetics සහ Beauty වෙළඳසැල්",
    short: "Cosmetics සහ beauty",
    headline: "Loyalty points ඇතුළත් Cosmetics සහ Beauty වෙළඳසැල් POS",
    intro: "Beauty වෙළඳසැලක ව්‍යාපාරය රැඳී තියෙන්නේ නැවත නැවත එන customers මතයි. MariaPoS හැම sale එකකටම loyalty points, customer ඉතිහාසය සහ SMS bills එකතු කරනවා.",
    challenges: ["Reward බලාපොරොත්තු වන නැවත එන customers", "ඉහළ ලාභයක් සහිත කුඩා බඩු රාශියක්", "සොරකම් සහ stock නැති වීම"],
    highlights: [
      ["Loyalty points", "වියදම් කරන මුදලට අනුව customers ලා points උපයා, counter එකේදී discount එකක් ලෙස පාවිච්චි කරනවා."],
      ["නැති වුණු stock බලන්න", "ඉවත් කළ බඩු damage හෝ theft ලෙස සලකුණු කර, කාලය අනුව සැබෑ පාඩු බලන්න."],
      ["Customer profiles", "Phone number එකෙන් customer එක සොයාගෙන ඔවුන් ගන්න දේවල් බලන්න."],
      ["Promo codes", "Social media offers සඳහා බලාගත හැකි codes පාවිච්චි කරන්න."],
    ],
    faqs: [["MariaPoS එකේ loyalty points තියෙනවද?", "ඔව්. Loyalty ඇතුළත්ව එනවා. Settings වල points උපයන ප්‍රමාණය set කරන්න, customers ලා points discount එකක් ලෙස පාවිච්චි කරයි."]],
  },
  "bakery-cafe": {
    name: "Bakeries, Cafés සහ Takeaways",
    short: "Bakery සහ café",
    headline: "Bakeries, cafés සහ takeaways සඳහා වේගවත් Counter POS",
    intro: "Quick-service counters වලට වඩාත්ම අවශ්‍ය වන්නේ වේගයයි. MariaPoS keypad එකකින් හෝ touch screen එකකින් bill කරනවා, shift එකකට අනුව දිනපතා මුදල් බලාගන්නවා, ඔබේ වඩාත්ම කාර්යබහුල වෙලාවන් පෙන්වනවා.",
    challenges: ["කාර්යබහුල වෙලාවල queues", "Cash ගනුදෙනු රාශියක්", "Piece සහ බර අනුව විකුණන බඩු", "Staff සැලසුම් කිරීමට කාර්යබහුල වෙලාවන් දැනගැනීම"],
    highlights: [
      ["Touch keypad", "Touch terminals සඳහා ලොකු on-screen keypad එකක්."],
      ["Shift එකක මුදල් පාලනය", "හැම shift එකක් අවසානයේම ඔබට ලැබිය යුතු මුදලත්, ඇත්තටම ගණන් කළ මුදලත් සසඳන්න."],
      ["කාර්යබහුල වෙලාවන් බලන්න", "Baking සහ staff සැලසුම් කිරීමට කාර්යබහුල දවස් සහ වෙලාවන් බලන්න."],
      ["වියදම් record කරන්න", "සැබෑ ලාභය බලන්න පිටි, gas සහ වැටුප් record කරන්න."],
    ],
    faqs: [
      ["MariaPoS table service සඳහා සුදුසුද?", "MariaPoS හදලා තියෙන්නේ bakeries, takeaways සහ self-service cafés වගේ counter එකේ bill කරන තැන් සඳහා. Table service අවශ්‍ය නම්, ඔබේ setup එක ගැන සාකච්ඡා කිරීමට අපව අමතන්න."],
    ],
  },
  "wholesale-distribution": {
    name: "Wholesalers සහ Distributors",
    short: "Wholesale සහ distribution",
    headline: "Distributors සඳහා Wholesale billing සහ stock software",
    intro: "විශාල orders, trade credit සහ cheques wholesalers ලාගේ දිනපතා වැඩ. MariaPoS wholesale මිල, ලැබිය යුතු මුදල් සහ ගෙවිය යුතු මුදල් එකම තැනකින් හසුරුවනවා.",
    challenges: ["වෙළඳසැල් වලට credit එකට විකිණීම", "ලැබෙන සහ දෙන post-dated cheques", "විශාල stock වල නිවැරදි cost එක", "Supplier සහ customer statements"],
    highlights: [
      ["Wholesale මිල", "හැම product එකකටම වෙනම wholesale මිලක්, එක key එකකින් මාරු වීම."],
      ["ලැබිය යුතු සහ ගෙවිය යුතු මුදල්", "Customers ලා ඔබට ගෙවිය යුතු දේ සහ ඔබ suppliers ලාට ගෙවිය යුතු දේ බලන්න."],
      ["Cheque බලාගැනීම", "Cheque විස්තර record කර, කල් පිරෙන්න කලින් මතක් කිරීම් ලබාගන්න."],
      ["Statements සහ ලාභ-අලාභ", "Supplier statements, customer reports සහ නිවැරදි ලාභය."],
    ],
    faqs: [["වෙනත් වෙළඳසැල් වලට credit එකට විකුණන්න පුළුවන්ද?", "පුළුවන්. Credit bills, කොටස් ගෙවීම් සහ ගෙවන්න ඉතිරි මුදල customer කෙනෙකුට අනුව බලාගන්න පුළුවන්."]],
  },
  "auto-parts": {
    name: "Auto Parts සහ Spare Parts වෙළඳසැල්",
    short: "Auto සහ spare parts",
    headline: "Auto parts සහ spare parts වෙළඳසැල් සඳහා POS",
    intro: "Part numbers දහස් ගණනක්, credit එකට ගන්න garages සහ supplier cheques. MariaPoS ඔබේ parts counter එකට ඉක්මනින් සොයාගත හැකි stock, credit පාලනය සහ supplier පාලනය ගෙනෙනවා.",
    challenges: ["Part numbers වල විශාල ලැයිස්තුවක්", "Garage සහ mechanic credit accounts", "Cost එක වෙනස් වන ආනයනික stock"],
    highlights: [
      ["ඉක්මන් සෙවුම", "Part නමෙන් හෝ number එකෙන් සොයන්න, නැත්නම් barcode එක scan කරන්න."],
      ["නිවැරදි ලාභය", "හැම shipment එකකටම තමන්ගේම cost එක තියෙන නිසා, ලාභය නිවැරදිව පෙනෙනවා."],
      ["Credit customers", "Garages සහ mechanics ලා credit එකට, සම්පූර්ණ statements සමඟ."],
      ["Wholesale මිල", "Garages සඳහා trade මිල, සාමාන්‍ය customers සඳහා retail මිල."],
    ],
    faqs: [["ආනයන cost එක වෙනස් වෙද්දීත් stock වටිනාකම බලන්න පුළුවන්ද?", "පුළුවන්. හැම shipment එකකම cost එක වෙන වෙනම තියාගන්න නිසා, stock වටිනාකමත් ලාභයත් නිවැරදිව පෙනෙනවා."]],
  },
};

export const industryTabSi: Record<string, string> = {
  "All Industries": "සියලුම Industries",
  "Grocery & Retail": "Grocery සහ Retail",
  "Pharmacy & Care": "Pharmacy සහ Care",
  "Hardware & Auto": "Hardware සහ Auto",
  "Fashion & Beauty": "Fashion සහ Beauty",
  "Bakery & Takeaway": "Bakery සහ Takeaway",
};

export const industryPowerSi: Record<string, { tag: string; metric: string; highlight: string }> = {
  "supermarket-grocery": { tag: "High Volume Queues", metric: "⚡ තත්පර 3ක Barcode Checkout", highlight: "Decimal weights (kg/g) සහ instant SMS receipts" },
  pharmacy: { tag: "Batch සහ Expiry Control", metric: "💊 FIFO Expiry Valuation", highlight: "Distributor payables සහ post-dated cheque alerts" },
  "hardware-store": { tag: "Contractor Credit", metric: "📏 Metre / Decimal Units", highlight: "Wholesale (F5) toggle සහ trade customer ledger" },
  "clothing-textile": { tag: "උත්සව Rushes", metric: "🏷️ Season Promo Codes", highlight: "Invoice returns, loyalty points සහ මීටර අනුව රෙදි" },
  "bookshop-stationery": { tag: "පාසල් සෘතුවේ Rush", metric: "📚 ISBN සහ Label Print", highlight: "Barcode label generator සහ low-stock pre-orders" },
  "electronics-mobile": { tag: "High-Value Items", metric: "🛡️ Split Pay සහ Warranty", highlight: "කොටසක් cash / කොටසක් card, search කළ හැකි bill history" },
  "cosmetics-beauty": { tag: "නැවත එන Customers", metric: "✨ Built-in Loyalty Points", highlight: "Customer profiles සහ shrinkage loss audit" },
  "bakery-cafe": { tag: "වේගවත් Counter Rush", metric: "☕ Touchscreen Keypad", highlight: "Blind shift cashier till float balancing" },
  "wholesale-distribution": { tag: "Trade Distribution", metric: "📦 Wholesale Price Tiers", highlight: "Customer receivables සහ supplier payables ledger" },
  "auto-parts": { tag: "Part Number Search", metric: "🔧 OEM Part Lookup", highlight: "FIFO landed cost සහ mechanic credit accounts" },
};
