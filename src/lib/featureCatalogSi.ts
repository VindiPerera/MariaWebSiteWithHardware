/**
 * Sinhala + English mix text for the feature catalogue.
 * Keyed by category id; `features` follows the same order as featureCatalog.ts
 * as [name, what, why]. Written around what the shop owner gets, in plain words.
 * Everyday product terms (barcode, cashier, stock, bill) stay in English.
 */
export type FeatureCategorySi = {
  title: string;
  summary: string;
  features: [name: string, what: string, why: string][];
};

export const featureCatalogSi: Record<string, FeatureCategorySi> = {
  "billing-checkout": {
    title: "Bill කිරීම සහ Checkout",
    summary: "Cashier ලා දවස පුරා පාවිච්චි කරන counter screen එක. Software එක නිසා queue එකක් කිසිදා නවතින්නේ නැහැ.",
    features: [
      ["Barcode එකෙන් හෝ නමින් සොයා bill කරන්න", "ඕනෑම USB scanner එකකින් barcode එක scan කරන්න, නැත්නම් product නමෙන් කොටසක් type කරන්න. Item එක bill එකට එකවරම එකතු වෙනවා.", "කාර්යබහුල වෙලාවල checkout වේගවත් වෙනවා, අතින් type කරද්දී වෙන වැරදි අඩු වෙනවා."],
      ["F1–F12 Keyboard shortcuts", "හැම වැදගත් දේකටම key එකක් තියෙනවා: product සෙවුම (F2), wholesale/retail මාරුව (F5), customer ගේ phone (F6), promo code (F7), bill discount (F8) සහ sale එක අවසන් කිරීම.", "පළපුරුදු cashier ට mouse එක අල්ලන්නේ නැතුව bill කරන්න පුළුවන්. හැම customer කෙනෙක්ම තත්පර කීපයකින් ඉවරයි."],
      ["Touch-screen keypad", "Touch monitor එකකදී ප්‍රමාණය, මිල සහ ගත් මුදල ඇතුළත් කරන්න ලොකු on-screen keypad එකක්.", "Touch POS එකේත්, keyboard තියෙන සාමාන්‍ය PC එකේත් එක සමානව පහසුවෙන් වැඩ කරනවා."],
      ["සාමාන්‍ය සහ wholesale මිල", "හැම product එකකටම සාමාන්‍ය මිලකුත් wholesale මිලකුත් තියෙනවා. එක key එකකින් මුළු bill එකම wholesale මිලට මාරු කරන්න පුළුවන්.", "වෙනම system එකක් නැතුව, එකම counter එකෙන් සාමාන්‍ය customers ලාටත් තොග ගන්න අයටත් සේවය කරන්න පුළුවන්."],
      ["බර අනුව සහ loose භාණ්ඩ", "KG, g, L, ml, මීටර, dozen, pack වගේ units වලින්, දශම ප්‍රමාණ සමඟ විකුණන්න.", "සහල්, එළවළු, cables, රෙදි වගේ loose භාණ්ඩ නිවැරදිව බර හෝ දිග අනුව bill වෙනවා."],
      ["Item සහ bill discounts", "එක item එකකට හෝ මුළු bill එකටම discount එකක්, percentage එකක් හෝ ස්ථාවර මුදලක් විදිහට දෙන්න. අවසර පාලනයත් එක්කම.", "Counter එකේ offers දෙන ගමන්ම, discount දෙන්න අවසර ඇත්තේ කාටද කියලා ඔබට තීරණය කරන්න පුළුවන්."],
      ["Promo codes", "Checkout එකේදී cashier ඇතුළත් කරන, වලංගු discount එකක් දෙන promotion codes හදන්න.", "Campaigns, උත්සව offers සහ social media coupons පවත්වන්න පුළුවන්, හැම පාවිච්චියක්ම record වෙනවා."],
      ["මිල බලන්න", "Bill එකක් පටන් නොගෙනම, scan කරලා හෝ සොයලා ඕනෑම product එකක මිලයි stock එකයි බලන්න.", "දැනට කරමින් ඉන්න sale එකට බාධා නොකර customer ගේ මිල ගැන ප්‍රශ්න වලට ඉක්මනින් උත්තර දෙන්න පුළුවන්."],
      ["පරණ bills සොයා නැවත print කරන්න", "Invoice, දිනය හෝ customer අනුව පරණ bills සොයාගෙන ඕනෑම receipt එකක් නැවත print කරන්න. Cashier ලාට පේන්නේ තමන්ගේ sales විතරයි.", "Customer ගේ ප්‍රශ්න සහ warranty claims තත්පර කීපයකින් විසඳන්න පුළුවන්."],
    ],
  },
  payments: {
    title: "ගෙවීම්",
    summary: "Customer ලා ගෙවන ඕනෑම ක්‍රමයක් භාර ගන්න. හැම ගෙවීමක්ම, හැම රුපියලක්ම පැහැදිලිව ලියැවෙනවා.",
    features: [
      ["Cash, card, bank transfer සහ cheque", "හැම bill එකකම ගෙවූ ක්‍රමය record කරන්න. Bank transfer වලට reference number එකත්, cheques වලට number, bank සහ දිනයත් ඇතුළත් වෙනවා.", "ඔබේ ගෙවීම් report එක bank statement එකටත් drawer එකේ මුදලටත් හැමවිටම ගැලපෙනවා."],
      ["ක්‍රම කීපයකින් එකවර ගෙවීම", "එක bill එකක් ක්‍රම කීපයකින් ගෙවන්න, උදාහරණයක් විදිහට කොටසක් cash වලින් සහ කොටසක් card එකෙන්.", "Customer ට ක්‍රම දෙකකින් ගෙවන්න අවශ්‍ය වුණාම bill එක අවලංගු කරලා ආයෙ bill කරන්න අවශ්‍ය නැහැ."],
      ["ඉතිරිය ඉබේම ගණනය වෙනවා", "Customer දුන්න මුදල ඇතුළත් කළාම, ආපසු දිය යුතු ඉතිරිය MariaPoS එක හරියටම පෙන්වනවා.", "කාර්යබහුල till එකක ගණන් කිරීමේ වැරදි නැති වෙනවා."],
      ["පසුව ගෙවන (credit) bills", "Register කරපු customers ට credit එකට විකුණන්න. ශේෂය ඔවුන්ගේ account එකට එකතු වෙනවා.", "කඩදාසි credit පොත් නැතුව විශ්වාසවන්ත customers ට දිගටම ගනුදෙනු කරන්න පුළුවන්."],
    ],
  },
  "customers-loyalty": {
    title: "Customers, Credit සහ Loyalty",
    summary: "ඔබෙන් ගන්නේ කවුද, කවුරුන් කොච්චර ගෙවන්න තියෙනවද කියලා දැනගන්න. ආයෙත් එන අයට reward කරන්න.",
    features: [
      ["Customer profiles", "Customers ලා නමින් සහ phone number එකෙන් save කරන්න. Checkout එකේදී number එක type කළාම (F6) bill එකට customer ව එකතු වෙනවා.", "කතා කරන්න, message කරන්න, reward කරන්න පුළුවන් customer ලැයිස්තුවක් හදාගන්න."],
      ["Credit bills සහ ලැබිය යුතු මුදල්", "ගෙවලා නැති හැම bill එකක්ම, කොටස් ගෙවීම් සහ customer කෙනෙකුට ගෙවන්න ඉතිරි මුදල බලාගන්න. POS එකෙන් හෝ cloud එකෙන් ගෙවීම් භාර ගන්න.", "අමතක වුණු credit නිසා මුදල් අහිමි වෙන එක නවත්වන්න, කවුද කොච්චර ගෙවන්න තියෙන්නේ කියලා හරියටම බලන්න."],
      ["Loyalty points", "Customers ලා මිලදී ගැනීම් වලින් points උපයනවා. Counter එකේදී ඒවා discount එකක් විදිහට පාවිච්චි කරන්න පුළුවන්, ශේෂය screen එකේ පේනවා.", "Loyalty cards print නොකර, එක පාරක් ආපු අය නිතර එන customers බවට පත් කරගන්න."],
      ["Customer reports", "වැඩිපුරම මිලදී ගන්න customers ලා, කොච්චර වාරයක් ආවාද සහ කොච්චර වියදම් කළාද කියලා.", "වැඩිම ආදායමක් ගෙනෙන customers ලා වෙත offers යොමු කරන්න."],
    ],
  },
  "inventory-stock": {
    title: "Stock සහ බඩු පාලනය",
    summary: "රාක්කයේ තියෙන දේට ගැලපෙන stock ගණනක් සහ විශ්වාස කරන්න පුළුවන් cost එකක්.",
    features: [
      ["පරණම stock මුලින්ම විකිණීම (FIFO)", "බඩු ගත්ත හැම වතාවකම ඒ මිල වෙනම තියාගන්නවා. විකුණද්දී පරණම stock මුලින්ම අඩු වෙනවා.", "Supplier මිල වෙනස් වුණත්, හැම sale එකකම නිවැරදි ලාභය ලැබෙනවා, පරණ stock මුලින් විකිණෙනවා."],
      ["Products, categories සහ units", "Barcode, category, unit, cost, සාමාන්‍ය සහ wholesale මිල සහ පින්තූරය සමඟ products ප්‍රමාණයට සීමාවක් නැහැ.", "මුළු වෙළඳසැලම පාවිච්චි කරන පිරිසිදු, ඉක්මනින් සොයාගත හැකි ලැයිස්තුවක්."],
      ["Tax classes", "Tax වර්ග හදලා products වලට ලබාදෙන්න, එවිට tax නිවැරදිව ගණනය වී report වෙනවා.", "Tax summary report එකෙන් ඔබේ tax ගොනු කිරීම් සඳහා සූදානම් අගයන් ලැබෙනවා."],
      ["Stock වෙනස් කිරීම් සහ නැතිවීම්", "හේතුවක් සමඟ stock වෙනස් කරන්න. ඉවත් කිරීම් අපතේ යාම, හානි වීම හෝ සොරකම ලෙස සලකුණු කරන්න පුළුවන්.", "සරල නිවැරදි කිරීම් වලින් වෙන්ව සැබෑ පාඩු report එකේ පෙනෙනවා."],
      ["Stock අඩු වෙද්දී alert", "Product එකකට අවම stock ප්‍රමාණයක් set කරන්න. බඩු අඩු වුණාම login වෙද්දී alert එකක් ලැබෙනවා.", "රාක්ක හිස් වෙන්න කලින් reorder කරන්න, customers ලා ආපහු යන්න ඉඩ නොදී."],
      ["Barcode labels print කිරීම", "Barcode එකක් නැතුව එන products සඳහා barcode labels හදලා print කරන්න.", "Loose සහ ගෙදර pack කරපු බඩු ඇතුළුව හැම item එකක්ම scan කළ හැකි වෙනවා."],
    ],
  },
  "suppliers-purchasing": {
    title: "Suppliers සහ බඩු මිලදී ගැනීම",
    summary: "හැම delivery එකක්ම, ගෙවීමක්ම සහ cheque එකක්ම ලැබීමේ සිට ගෙවා අවසන් වෙනකම් පැහැදිලිව බලාගන්න.",
    features: [
      ["Supplier ලැයිස්තුව", "Supplier ලාගේ contacts, කොන්දේසි සහ සම්පූර්ණ ගනුදෙනු ඉතිහාසය එක තැනකින් තියාගන්න.", "Files අස්සේ හොයන්නේ නැතුව කවුරුන්ගෙන්ද, මොන කොන්දේසි වලටද ගන්නේ කියලා දැනගන්න."],
      ["බඩු ලැබීම (GRN)", "Delivery එක ප්‍රමාණ සහ cost මිල සමඟ record කරන්න. Stock එක අලුත් batch එකක් විදිහට ඉබේම එකතු වෙනවා.", "බඩු ආපු ගමන්ම stock එකයි cost එකයි update වෙනවා, හැම delivery එකකටම record එකක් තියෙනවා."],
      ["Supplier ට ගෙවීම්", "හැම supplier කෙනෙකුටම ගෙවන්න තියෙන්නේ කොච්චරද කියලා බලන්න. Cash, transfer හෝ cheque වලින් bills සම්පූර්ණයෙන් හෝ කොටසක් ගෙවන්න.", "Suppliers ලාට නියමිත වෙලාවට ගෙවන්න, දෙපාරක් ගෙවීම වළක්වන්න."],
      ["Cheque කල් පිරෙන විට මතක් කිරීම", "Post-dated cheques දිනයන් සමඟ ලැයිස්තුගත වෙනවා, කල් පිරෙන්න ළං වුණාම හෝ කල් ඉකුත් වුණාම සලකුණු වෙනවා.", "Bounce වුණු හෝ අමතක වුණු cheques නැහැ. Supplier සබඳතාත් cash flow එකත් ආරක්ෂා වෙනවා."],
      ["Supplier statements", "Supplier කෙනෙකුට අදාළ මිලදී ගැනීම්, ගෙවීම් සහ ශේෂය පෙන්වන සම්පූර්ණ statement එක, PDF එකක් විදිහටත් ගන්න පුළුවන්.", "Suppliers ලා සමඟ ගණන් හිලව් කරගන්න විනාඩි කීපයයි."],
    ],
  },
  "returns-refunds": {
    title: "Returns සහ Refunds",
    summary: "Returns නිවැරදිව හසුරුවන්න, එවිට stock එකත් මුදල්ත් දෙකම හරි.",
    features: [
      ["Invoice එක අනුව return කිරීම", "Invoice number එකෙන් මුල් bill එක සොයාගෙන, සම්පූර්ණයෙන් හෝ කොටසක් return කරන්න.", "සැබෑ මිලදී ගැනීම් පමණක්, ගෙවූ මිලටම return වෙනවා."],
      ["නිවැරදි තැනටම stock එකතු වීම", "Return වුණු භාණ්ඩ නිවැරදි cost එක තියෙන තැනටම ආපසු එකතු වෙනවා.", "Return එකකින් පසුවත් stock වටිනාකමත් ලාභයත් නිවැරදිව තියෙනවා."],
      ["Cash refund හෝ credit එකෙන් අඩු කිරීම", "Cash වලින් refund කරන්න (shift එකට record වෙනවා) නැත්නම් customer ගේ credit ශේෂයෙන් අඩු කරන්න.", "Till එකේ මුදලටත් customer ගේ ගිණුමටත් return එක ඉබේම පිළිබිඹු වෙනවා."],
    ],
  },
  "shifts-cash": {
    title: "Shifts සහ මුදල් පාලනය",
    summary: "හැම cashier කෙනෙක්ම, හැම shift එකක්ම, drawer එකේ හැම රුපියලක්ම ගණන් බලනවා.",
    features: [
      ["Shift ආරම්භය සහ අවසානය", "Cashier ලා ආරම්භක මුදලක් (float) සමඟ shift එක පටන් අරන්, ගණන් කරපු මුදලක් සමඟ shift එක අවසන් කරනවා.", "හැම shift එකක්ම මුදල් හැසිරවුවේ කවුද කියලා පැහැදිලි, වෙන වෙනම record එකක්."],
      ["ලැබිය යුතු මුදල vs ගණන් කළ මුදල", "MariaPoS ලැබිය යුතු මුදල ගණනය කරනවා (float + cash sales − cash returns ± till එකට දාපු/ගත්ත මුදල්). අඩුවක් හෝ වැඩියක් record වෙනවා.", "මුදල් වෙනස්කම් එදිනම හඳුනාගෙන, වගකිවයුතු shift එකට සම්බන්ධ කරන්න පුළුවන්."],
      ["Till එකට මුදල් දැමීම සහ ගැනීම", "Drawer එකට දාපු හෝ ගත්ත මුදල හේතුවක් සමඟ record කරන්න.", "Drawer එකේ හැම චලනයක්ම පැහැදිලි කරලා තියෙන නිසා ගණන හැමවිටම ගැලපෙනවා."],
      ["Cash drawer ඉබේම විවෘත වීම සහ No-Sale", "Cash sales වලදී drawer එක ඉබේම විවෘත වෙනවා. Log වෙන No-Sale එකකටත් විවෘත කරන්න පුළුවන්.", "සටහනක් නැතුව staff ට drawer එක විවෘත කරන්න බැහැ."],
      ["Shift සහ cashier reports", "Shift එකක් සහ cashier කෙනෙක් අනුව sales, ගෙවීම් බෙදීම සහ මුදල් වෙනස්කම්වල ඉතිහාසය.", "Cashier ලාගේ ක්‍රියාකාරිත්වය සසඳා, නැවත නැවත වෙන අඩුවීම් හඳුනාගන්න."],
    ],
  },
  expenses: {
    title: "වියදම් කළමනාකරණය",
    summary: "විකුණුම් විතරක් නෙවෙයි, ඔබේ සැබෑ ලාභය දැනගන්න.",
    features: [
      ["එක් වරක් වන වියදම්", "විදුලි බිල, ප්‍රවාහනය, අලුත්වැඩියා සහ අනෙක් වියදම් වර්ග සහ දිනයන් සමඟ record කරන්න.", "විසිරුණු receipts වෙනුවට හැම වියදමක්ම එක තැනක."],
      ["නිතර වන වියදම්", "කුලිය, වැටුප් සහ subscriptions සතිපතා, මාසික හෝ වාර්ෂික විදිහට set කරන්න, නැත්නම් වියදමක් දින කීපයක් පුරා බෙදන්න.", "ලාභ-අලාභ report එකේ සැබෑ මාසික වියදම් ඉබේම පෙනෙනවා."],
      ["වියදම් වර්ග සහ reports", "ඔබටම අවශ්‍ය වියදම් වර්ග සහ කාලය සහ වර්ගය අනුව වියදම් report එකක්.", "මුදල් යන්නේ කොහෙටද, කොතැනින් කපන්නද කියලා බලන්න."],
    ],
  },
  "reports-analytics": {
    title: "Reports සහ විශ්ලේෂණය",
    summary: "අයිතිකරුවන් ඇත්තටම අහන ප්‍රශ්න වලට උත්තර දෙන reports 13+ ක්. සියල්ලම PDF සහ Excel වලට ගන්න පුළුවන්.",
    features: [
      ["Dashboard", "අද sales, ලාභය, bills ගණන, sales ප්‍රවණතාව, හොඳම products සහ ගෙවීම් ක්‍රම එක බැල්මකින්.", "දවසේ තත්ත්වය තත්පර දහයකින් තේරුම් ගන්න."],
      ["Sales සහ product reports", "දින පරාසයක්, product එකක් සහ category එකක් අනුව sales, ප්‍රමාණ සහ ආදායම.", "මොනවද විකිණෙන්නේ, මොනවද නැත්තේ, කවදාද කියලා දැනගන්න."],
      ["ලාභ-අලාභ (Profit & Loss)", "ඕනෑම කාලයක් සඳහා ආදායම, විකුණූ බඩු වල cost, දළ ලාභය, වියදම් සහ ශුද්ධ ලාභය.", "Accountant ට බලා නොසිට නිවැරදි ලාභ-අලාභ ගණනයක්."],
      ["Stock වටිනාකම සහ තත්ත්වය", "අතේ ඇති stock, cost එකෙන් stock වටිනාකම සහ අඩු හෝ ඉවර වුණු බඩු.", "රාක්ක වල ඇති මුදල කොච්චරද කියලා දැනගන්න."],
      ["ගෙවීම් ක්‍රම, tax සහ stock නැතිවීම්", "ගෙවීම් ක්‍රමය අනුව ආදායම, වර්ගය අනුව එකතු කළ tax සහ අපතේ යාම, හානි සහ සොරකම් නිසා වූ පාඩු.", "Banks සමඟ ගණන් හිලව් කරන්න, tax ගොනු කිරීමට සූදානම් වෙන්න, පාඩු පාලනය කරන්න."],
      ["Shift, cashier, customer සහ supplier reports", "ව්‍යාපාරය ගනුදෙනු කරන හැම පුද්ගලයෙකුගේම සහ හවුල්කරුවෙකුගේම ක්‍රියාකාරිත්වය සහ ගිණුම්.", "Staff, customers සහ suppliers අතර වගවීම."],
      ["PDF සහ Excel වලට ගැනීම", "ඕනෑම report එකක් click එකකින් PDF හෝ Excel වලට ගන්න.", "Partners, banks හෝ ඔබේ accountant සමඟ එකවරම share කරන්න."],
    ],
  },
  "cloud-alerts": {
    title: "Cloud, SMS සහ Phone Alerts",
    summary: "Counter එක internet නැතුව bill කරද්දී, ඔබට phone එකෙන් වෙළඳසැල බලාගන්න පුළුවන්.",
    features: [
      ["Cloud එකට ඉබේම sync වීම", "Internet තියෙන හැම වෙලාවකම sales, stock, customers සහ suppliers පිටිපස්සේ ඉබේම cloud එකට යනවා.", "ඔබේ data වෙනම තැනක backup වෙනවා, ඕනෑම තැනක සිට බලන්න පුළුවන්."],
      ["ඕනෑම browser එකකින් වෙළඳසැල බලන්න", "ඕනෑම browser එකකින් login වී reports බලන්න, products, suppliers, stock, customers, ලැබිය සහ ගෙවිය යුතු මුදල් සහ වියදම් කළමනාකරණය කරන්න.", "Counter එකට නොගොස් ගෙදර සිට හෝ වෙනත් branch එකකින් ව්‍යාපාරය කළමනාකරණය කරන්න."],
      ["SMS bills", "Invoice number, items, එකතුව සහ ශේෂය සමඟ bill එක customer ගේ phone එකට SMS කරන්න. Prepaid SMS credits පාවිච්චි වෙනවා, ඉතිරි ගණන cashier ට පෙනෙනවා.", "Customers ලාට කවදාවත් මැකෙන්නේ නැති receipt එකක් තියෙනවා, ඔබට thermal paper ඉතිරි වෙනවා."],
      ["Phone එකට sales alerts", "Cloud එකේ ඔබේ phone එක සම්බන්ධ කරන්න. හැම අලුත් sale එකක්ම, items සමඟ, සිදුවෙන ගමන්ම ලැබෙනවා.", "වෙළඳසැලෙන් බැහැරව සිටියත්, හැම branch එකකම ක්‍රියාකාරිත්වය අයිතිකරුට live පේනවා."],
    ],
  },
  "security-users": {
    title: "Users, ආරක්ෂාව සහ පරීක්ෂාව",
    summary: "හැම staff member කෙනෙකුටම ඔවුන්ට අවශ්‍ය access එක පමණක් දෙන්න, වැඩි දෙයක් නැහැ.",
    features: [
      ["Admin සහ cashier roles", "Admin ට සියල්ලම පේනවා. Cashier ට ලාභය හෝ settings නැති, counter එකට අදාළ view එකක් ලැබෙනවා.", "සංවේදී ව්‍යාපාරික අගයන් අයිතිකරු ළඟම තියෙනවා."],
      ["අවසර තනි තනිව ලබාදීම", "User කෙනෙකුට අනුව තනි තනි අවසර on/off කරන්න: item discounts, bill discounts, මිල වෙනස් කිරීම, returns, credit, reports, stock, customers, වියදම් සහ users.", "Software එක ඔබේ වෙළඳසැල පවත්වන ආකාරයට ගැලපෙනවා. Software එකට ගැලපෙන්න වෙළඳසැල වෙනස් කරන්න අවශ්‍ය නැහැ."],
      ["Manager ගේ PIN එකෙන් අනුමත කිරීම", "සීමා කළ දේවල් manager කෙනෙකුට තමන්ගේ PIN එක ඇතුළත් කර ස්ථානයේදීම අනුමත කරන්න පුළුවන්.", "Queue එක මන්දගාමී නොකර පාලනය තියාගන්න."],
      ["Audit log", "වැදගත් දේවල් user සහ වෙලාව සමඟ record වෙනවා.", "මොනවද, කවුද, කවදාද වෙනස් කළේ කියලා දැනගන්න."],
      ["Data ආරක්ෂාව සහ auto-logout", "වෙළඳසැලේ data ඔබේ PC එකේ ආරක්ෂිතව (encrypted) ගබඩා වෙනවා, භාවිතයක් නැති වෙලාවට ඉබේම logout වෙනවා.", "Computer එක බලාගන්න කෙනෙක් නැති වුණත් ඔබේ ව්‍යාපාරික data ආරක්ෂිතයි."],
    ],
  },
  "hardware-printing": {
    title: "Hardware සහ Printing",
    summary: "සාමාන්‍ය වෙළඳසැල් දැනටමත් පාවිච්චි කරන counter උපකරණ එක්ක වැඩ කරනවා.",
    features: [
      ["Receipt printers", "ඔබේ logo, ලිපිනය සහ පණිවිඩය සමඟ 58 mm සහ 80 mm thermal printers වලට print කරනවා.", "සාමාන්‍ය අඩු මිලේ printers වලින් වෘත්තීය, ඔබේම brand එකේ receipts."],
      ["USB barcode scanners", "Keyboard විදිහට වැඩ කරන ඕනෑම USB හෝ wireless barcode scanner එකක් කෙලින්ම වැඩ කරනවා.", "විශේෂ drivers හෝ setup අවශ්‍ය නැහැ."],
      ["Cash drawers සහ label printers", "Printer එකට සම්බන්ධ cash drawers ඉබේම විවෘත වෙනවා. Barcode labels, label printers වල print වෙනවා.", "එක software එකකින් සම්පූර්ණ counter එකම."],
      ["Touch සහ සාමාන්‍ය screens", "Windows 10 සහ 11 PCs, laptops සහ all-in-one touch POS terminals වල ඕනෑම screen ප්‍රමාණයකට ගැලපෙන්න වැඩ කරනවා.", "අද ඇති hardware පාවිච්චි කර, පසුව upgrade කරන්න."],
    ],
  },
  "settings-customisation": {
    title: "Settings සහ ඔබේ විදිහට සකස් කිරීම",
    summary: "MariaPoS ඔබේ වෙළඳසැලට සමානව පෙනී, ඔබේ වෙළඳසැල වගේම වැඩ කරන්න හදාගන්න.",
    features: [
      ["Bill එකේ පෙනුම", "වෙළඳසැලේ නම, logo, ලිපිනය, phone, bill එකේ උඩ සහ පහළ පණිවිඩ set කරන්න.", "හැම receipt එකකම ඔබේ brand එක තියෙනවා."],
      ["Colours සහ පෙනුම", "POS screens සඳහා colours තෝරන්න.", "දවස පුරා පාවිච්චි කරන cashier ලාට සුවපහසු screen එකක්."],
      ["මුදල් වර්ගය සහ ප්‍රාදේශීය settings", "ඔබේ වෙළඳසැලට මුදල් සංකේතය ($, £, €, හෝ රුපියල්), code, දශම ස්ථාන සහ receipt පළල set කරන්න.", "ඔබේ customers ලාත් accountant ත් බලාපොරොත්තු වන ආකාරයට අගයන් පෙනෙනවා."],
      ["Licence කළමනාකරණය", "App එක ඇතුළෙන්ම ඔබේ licence එක activate කර, බලා, renew කරන්න. කල් ඉකුත් වෙන්න කලින් මතක් කිරීම් ලැබෙනවා.", "හදිසියේ lock වීම් නැහැ, renewal එක විනාඩි කීපයක වැඩක්."],
    ],
  },
};

import type { FeatureCategory } from "./featureCatalog";

/** Returns the catalogue with the selected language applied (Sinhala from this file, Tamil from the dictionary). */
export function localizeCategories(
  categories: FeatureCategory[],
  t: (en: string, si?: string) => string,
): FeatureCategory[] {
  return categories.map((cat) => {
    const si = featureCatalogSi[cat.id];
    return {
      ...cat,
      title: t(cat.title, si?.title),
      summary: t(cat.summary, si?.summary),
      features: cat.features.map((f, i) => {
        const row = si?.features[i];
        return { name: t(f.name, row?.[0]), what: t(f.what, row?.[1]), why: t(f.why, row?.[2]) };
      }),
    };
  });
}
