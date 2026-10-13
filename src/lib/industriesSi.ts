/**
 * Sinhala + English mix text for the industry pages, keyed by industry slug.
 * Technical terms (FIFO, barcode, GRN, POS, cashier ...) stay in English on purpose.
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
    headline: "කාර්යබහුල retail queues වලට හදපු supermarket සහ grocery POS system එක",
    intro:
      "ගමේ කුඩා grocery වෙළඳසැලක සිට multi-till supermarket දක්වා, MariaPoS barcode එකෙන් හෝ බර අනුව වේගයෙන් bill කරනවා, items දහස් ගණනක් අතර FIFO stock නිවැරදිව තියාගන්නවා, network lag නැතුව 100% offline ක්‍රියාත්මක වෙනවා.",
    challenges: [
      "Peak hours සහ සති අන්තයේ දිගු queues",
      "Barcode නැති හෝ loose විකුණන products දහස් ගණන",
      "Supplier මිල නිතර වෙනස් වෙද්දී stock සහ cost ව්‍යාකූල වීම",
      "කුමන shift එකටද කියලා සොයාගන්න බැරි cash අඩුවීම්",
    ],
    highlights: [
      ["වේගවත් barcode සහ shortcut billing", "USB scanner billing එකයි F-key shortcuts වලිනුයි හැම customer කෙනෙක්ම තත්පර කීපයකින් ඉවරයි."],
      ["බර අනුව විකිණීම", "සහල්, පරිප්පු, සීනි, එළවළු සහ loose භාණ්ඩ KG හෝ g වලින්, decimal quantities සමඟ bill කරන්න."],
      ["FIFO batches", "හැම GRN එකක්ම cost batch එකක් වෙනවා, ඒ නිසා wholesale මිල වෙනස් වෙද්දීත් profit නිවැරදිව තියෙනවා."],
      ["Barcode labels", "ගෙදර pack කරපු සහ loose items සඳහා labels print කරන්න, එවිට හැම දෙයක්ම scan වෙනවා."],
      ["Loyalty සහ SMS bills", "නිතර එන අයට points දීලා reward කරන්න, receipts ඔවුන්ගේ phone එකට යවන්න."],
    ],
    faqs: [
      ["MariaPoS එකට බර අනුව items bill කරන්න පුළුවන්ද?", "පුළුවන්. Products වලට KG, g, L, ml සහ වෙනත් units තියෙනවා, counter එකේදී quantities decimals වලින් ඇතුළත් කරන්න පුළුවන්."],
      ["Till එකකට වඩා භාවිතා කරන්න පුළුවන්ද?", "පුළුවන්. හැම till එකකම MariaPoS ක්‍රියාත්මක වෙනවා, ඒවා එකම cloud panel එකට sync වෙනවා, ඒ නිසා අයිතිකරුට සියලුම sales එකතුව පේනවා."],
      ["Internet බාධා වෙලාවලත් වැඩ කරනවද?", "ඔව්. Billing, stock සහ shifts සම්පූර්ණයෙන්ම offline ක්‍රියාත්මක වෙනවා, connection එක ආපසු ආපු ගමන් automatically sync වෙනවා."],
    ],
  },
  pharmacy: {
    name: "Pharmacies සහ Healthcare වෙළඳසැල්",
    short: "Pharmacy",
    headline: "නවීන pharmacies සඳහා Pharmacy POS සහ inventory software",
    intro:
      "Pharmacies වල distributors ගණනාවකින් credit එකට ගන්න, වේගයෙන් විකිණෙන කුඩා items දහස් ගණනක් තියෙනවා. Counter එකේ වේගයෙන් bill කරද්දී, හැම batch එකක්ම, supplier cheque එකක්ම සහ cashier shift එකක්ම MariaPoS පාලනය කරනවා.",
    challenges: [
      "Distributors ගණනාවක්, credit terms සහ post-dated cheques",
      "Suppliers ගෙන් නිතර වන මිල වෙනස්වීම්",
      "Strip, card හෝ pack අනුව විකුණන items",
      "දිගු වෙලාවක් විවෘතව තියෙන කාලයේ staff cash handle කිරීම",
    ],
    highlights: [
      ["FIFO batch stock", "පරණ stock මුලින් භාවිතා වෙනවා, හැම batch එකකටම තමන්ගේම cost price එකක් තියෙනවා."],
      ["Supplier payables සහ cheques", "හැම distributor කෙනෙකුටම ගෙවන්න තියෙන මුදල track කරන්න, cheques mature වෙන්න කලින් reminders ලබාගන්න."],
      ["නම්‍යශීලී units", "Pack, card, bottle හෝ piece අනුව, එකිනෙකට නිවැරදි මිලකින් විකුණන්න."],
      ["Shift control", "Pharmacist හෝ cashier කෙනෙකුට අනුව opening float, blind count සහ short/excess record වෙනවා."],
      ["Customer history", "Phone number එකෙන් customers attach කර ඔවුන්ගේ purchase history සහ credit බලන්න."],
    ],
    faqs: [
      ["Distributor credit සහ cheques track කරන්න පුළුවන්ද?", "පුළුවන්. Supplier payables, කොටස් වශයෙන් ගෙවීම් සහ post-dated cheques track වෙනවා, login වෙද්දී maturity reminders එනවා."],
      ["Cashier ලාට discounts දෙන එක වළක්වන්න පුළුවන්ද?", "පුළුවන්. Item discounts, bill discounts සහ price edits වෙන වෙනම permissions, user කෙනෙකුට අනුව off කරන්න පුළුවන්."],
      ["Stock value එක cost එකෙන් බලන්න පුළුවන්ද?", "පුළුවන්. Inventory report එකෙන් අතේ ඇති stock සහ FIFO batch costs භාවිතා කළ එහි value එක පෙන්වනවා."],
    ],
  },
  "hardware-store": {
    name: "Hardware සහ Building Material වෙළඳසැල්",
    short: "Hardware වෙළඳසැල්",
    headline: "මීටර, boxes සහ trade customers handle කරන Hardware shop POS system එක",
    intro:
      "Hardware වෙළඳසැල් walk-in customers ලාටත්, credit එකට contractors ලාටත් piece, metre, box සහ bag අනුව විකුණනවා. MariaPoS හැම unit එකක්ම, retail සහ wholesale මිල සහ customer credit වෙනම පොතක් නැතුවම handle කරනවා.",
    challenges: [
      "දිග, බර සහ pack අනුව විකුණන items",
      "Contractors ලාට සහ walk-ins ලාට වෙනස් මිල",
      "Trade customers ලාගේ විශාල credit balances",
      "Barcode නැති කුඩා parts දහස් ගණනක්",
    ],
    highlights: [
      ["ඕනෑම unit එකක්", "Metre, feet, KG, box, pack සහ piece, decimal quantities සමඟ."],
      ["Wholesale price toggle", "Contractors සහ resellers ලා සඳහා F5 එකෙන් bill එක wholesale pricing වලට මාරු කරන්න."],
      ["Customer credit", "Customer කෙනෙකුට අනුව credit bills, කොටස් ගෙවීම් සහ outstanding balances."],
      ["Barcode label printing", "Bins සහ parts වලට labels දමන්න, එවිට counter එකේදී scan කරන්න පුළුවන්."],
      ["Cheque payments", "Number, bank සහ දිනය bill එකේ record වෙන විදිහට cheques භාර ගන්න."],
    ],
    faqs: [
      ["Cable හෝ pipe මීටර අනුව විකුණන්න පුළුවන්ද?", "පුළුවන්. Product unit එක m, ft හෝ cm ලෙස set කර, checkout එකේදී decimal quantities ඇතුළත් කරන්න."],
      ["Contractors ලාට වෙනස් මිලක් දෙන්න පුළුවන්ද?", "පුළුවන්. හැම product එකකටම retail සහ wholesale මිල තියෙනවා, bill එක ඒ දෙක අතර මාරු කරන්න පුළුවන්."],
      ["Credit customers track කරනවද?", "ඔව්. Credit bills, settlements සහ balances POS එකේත් cloud panel එකේත් customer කෙනෙකුට අනුව track වෙනවා."],
    ],
  },
  "clothing-textile": {
    name: "Clothing, Textile සහ Fashion වෙළඳසැල්",
    short: "Clothing සහ textile",
    headline: "Clothing, textile සහ fashion shops සඳහා POS system එක",
    intro:
      "උත්සව සෘතුවේ rush එකේදී සාප්පු යන අය වැඩියි, discounts ත් වැඩියි. MariaPoS එකෙන් promo codes, loyalty සහ returns පිළිවෙලට run කරන ගමන්, හැම cashier කෙනෙකුගේම till එකේ වගකීම තහවුරු කරගන්න පුළුවන්.",
    challenges: [
      "සෘතුමය සහ උත්සව කාලවල peak shopping",
      "පාලනය කිරීමට අමාරු discounts සහ offers",
      "Exchanges සහ returns",
      "මීටර අනුව විකුණන රෙදි",
    ],
    highlights: [
      ["Promo codes සහ discounts", "Validate වන promo codes සහ permission-controlled discounts සමඟ උත්සව offers run කරන්න."],
      ["Returns සහ exchanges", "Items restock කර cash හෝ credit adjust කරන invoice-based returns."],
      ["Loyalty points", "Customers ලා points උපයා redeem කරනවා, ඊළඟ සෘතුවටත් ආපසු එනවා."],
      ["දිග අනුව රෙදි විකිණීම", "රෙදි මීටර හෝ yard අනුව decimal quantities සමඟ bill කරන්න."],
      ["SMS e-bills", "Exchanges සඳහා customers ලාට සාක්ෂියක් තියෙන්න receipts SMS කරන්න."],
    ],
    faqs: [
      ["උත්සව discount campaigns run කරන්න පුළුවන්ද?", "පුළුවන්. Promo codes සාදා item හෝ bill discounts යොදන්න, ඒවා භාවිතා කළ හැකි staff පාලනය කරන්න."],
      ["Exchanges handle කරන්නේ කොහොමද?", "මුල් invoice එක අනුව item එක return කරන්න (එවිට එය restock වෙනවා), පසුව replacement item එක bill කරන්න."],
      ["Customers ලාට bill එක SMS එකෙන් ලබාදෙන්න පුළුවන්ද?", "පුළුවන්. Checkout එකේදී prepaid SMS wallet එකකින් SMS e-bills යවනවා."],
    ],
  },
  "bookshop-stationery": {
    name: "Bookshops සහ Stationery වෙළඳසැල්",
    short: "Bookshop සහ stationery",
    headline: "පාසල් ආරම්භයේ rush එකට Bookshop සහ stationery POS",
    intro:
      "ජනවාරි මාසය bookshops වලට අවුරුද්දේ කාර්යබහුලම සති ගෙනෙනවා. MariaPoS queues ඉක්මනින් ඉවර කරනවා, කුඩා SKUs දහස් ගණනක් track කරනවා, මොනවාද විකිණුණේ කියලා හරියටම පෙන්වනවා, එවිට වෙලාවට reorder කරන්න පුළුවන්.",
    challenges: ["පාසල් සෘතුවේ queues", "අඩු වටිනාකමේ කුඩා items දහස් ගණනක්", "Barcode නැති items", "Peak කාලයේ stock ඉවර වීම"],
    highlights: [
      ["Barcode සහ නමින් search", "ISBNs සහ barcodes scan කරන්න, නැත්නම් එකම box එකෙන් නමින් search කරන්න."],
      ["Label printing", "පැන්, පොත් සහ barcode එකක් නැති items සඳහා barcode labels print කරන්න."],
      ["Low-stock alerts", "පාසල් සෘතුවේ peak එකට කලින් reorder කළ යුත්තේ මොනවාද කියලා දැනගන්න."],
      ["Product sales report", "කාලය අනුව හොඳම විකිණෙන items බලා ඊළඟ අවුරුද්දේ stock සැලසුම් කරන්න."],
    ],
    faqs: [
      ["පොත් ISBN barcodes scan කරන්න පුළුවන්ද?", "පුළුවන්. ඔබේ scanner එකට කියවිය හැකි ඕනෑම barcode එකක් product එකේ save කර checkout එකේදී scan කරන්න පුළුවන්."],
      ["Barcode labels print කරන්න පුළුවන්ද?", "පුළුවන්. MariaPoS ඔබේ products සඳහා barcode labels generate කර print කරනවා."],
    ],
  },
  "electronics-mobile": {
    name: "Mobile Phone සහ Electronics වෙළඳසැල්",
    short: "Mobile සහ electronics",
    headline: "Mobile phone, accessories සහ electronics shops සඳහා POS",
    intro:
      "ඉහළ වටිනාකමේ items, card සහ bank-transfer ගෙවීම්, warranty ප්‍රශ්න අහන්න ආපසු එන customers. MariaPoS හැම payment method එකක්ම record කරනවා, සම්පූර්ණ bill history එක search කළ හැකි විදිහට තියාගන්නවා.",
    challenges: ["ඉහළ වටිනාකමේ items සහ cash අවදානම", "Card, cash සහ transfer මිශ්‍ර ගෙවීම්", "Warranty සහ return ප්‍රශ්න", "Cashier ලා discount අනිසි ලෙස භාවිතා කිරීම"],
    highlights: [
      ["Split payments", "එක bill එකක් කොටසක් cash, කොටසක් card හෝ transfer වලින් ගෙවන්න, references record වෙනවා."],
      ["Sales history සහ reprint", "Invoice හෝ customer අනුව ඕනෑම පරණ bill එකක් සොයාගෙන warranty claims සඳහා reprint කරන්න."],
      ["Discount permissions සහ PIN override", "අනුමත staff ට පමණක් මිල අඩු කරන්න පුළුවන්, counter එකේදී manager PIN approval සමඟ."],
      ["Push alerts", "හැම sale එකක්ම සිදුවෙන මොහොතේම ඔබේ phone එකට ලබාගන්න."],
    ],
    faqs: [
      ["Warranty claims සඳහා පරණ bills සොයාගන්න පුළුවන්ද?", "පුළුවන්. Sales history එකෙන් invoice, දිනය හෝ customer අනුව search කර bill එක reprint කරන්න පුළුවන්."],
      ["Bank transfer references record කරන්න පුළුවන්ද?", "පුළුවන්. Bank transfer ගෙවීම් වලදී bill එකේ reference number එකක් capture වෙනවා."],
    ],
  },
  "cosmetics-beauty": {
    name: "Cosmetics සහ Beauty වෙළඳසැල්",
    short: "Cosmetics සහ beauty",
    headline: "Loyalty ඇතුළත් Cosmetics සහ beauty store POS",
    intro: "Beauty retail ක්‍රියාත්මක වෙන්නේ නැවත එන customers මතයි. MariaPoS හැම sale එකකටම loyalty points, customer history සහ SMS receipts එකතු කරනවා.",
    challenges: ["Reward බලාපොරොත්තු වන නැවත එන customers", "ඉහළ margin සහිත කුඩා items රාශියක්", "සොරකම් සහ shrinkage"],
    highlights: [
      ["Loyalty points", "වියදම් කරන මුදලට අනුව customers ලා points උපයා counter එකේදී redeem කරනවා."],
      ["Shrinkage report", "ඉවත් කිරීම් damage හෝ theft ලෙස tag කර කාලය අනුව සැබෑ පාඩු බලන්න."],
      ["Customer profiles", "Phone number එකෙන් customers attach කර ඔවුන් මොනවාද ගන්නේ කියලා බලන්න."],
      ["Promo codes", "Track කළ හැකි codes සමඟ social-media offers run කරන්න."],
    ],
    faqs: [["MariaPoS එකේ loyalty points තියෙනවද?", "ඔව්. Loyalty built-in. Settings වල earn rate එක set කරන්න, customers ලා points discount එකක් විදිහට redeem කරනවා."]],
  },
  "bakery-cafe": {
    name: "Bakeries, Cafés සහ Takeaways",
    short: "Bakery සහ café",
    headline: "Bakeries, cafés සහ takeaways සඳහා Counter POS",
    intro: "Quick-service counters වලට වඩාත්ම අවශ්‍ය වන්නේ වේගයයි. MariaPoS keypad එකකින් හෝ touch screen එකකින් bill කරනවා, shift එකකට අනුව දෛනික cash track කරනවා, ඔබේ කාර්යබහුලම වෙලාවන් පෙන්වනවා.",
    challenges: ["Rush-hour queues", "Cash transactions රාශියක්", "Piece සහ බර අනුව විකුණන items", "Staffing සඳහා peak hours දැනගැනීම"],
    highlights: [
      ["Touch keypad", "Touch terminals සඳහා ලොකු on-screen keypad එකක්."],
      ["Shift cash control", "හැම shift close එකකදීම expected vs counted cash."],
      ["Sales trend reports", "Baking සහ staffing සැලසුම් කිරීමට කාර්යබහුල දවස් සහ වෙලාවන් බලන්න."],
      ["Expense tracking", "සැබෑ profit එක බලන්න පිටි, gas සහ වැටුප් record කරන්න."],
    ],
    faqs: [
      ["MariaPoS table service සඳහා සුදුසුද?", "MariaPoS හදලා තියෙන්නේ bakeries, takeaways සහ self-service cafés වගේ counter-service billing සඳහා. Table service අවශ්‍ය නම්, ඔබේ setup එක ගැන සාකච්ඡා කිරීමට අපව අමතන්න."],
    ],
  },
  "wholesale-distribution": {
    name: "Wholesalers සහ Distributors",
    short: "Wholesale සහ distribution",
    headline: "Distributors සඳහා Wholesale billing සහ stock software",
    intro: "විශාල orders, trade credit සහ cheques wholesalers ලාගේ දෛනික වැඩ. MariaPoS wholesale pricing, receivables සහ payables එක ledger එකකින් handle කරනවා.",
    challenges: ["වෙළඳසැල් වලට credit එකට විකිණීම", "ඇතුළට සහ පිටතට යන post-dated cheques", "Bulk stock වල නිවැරදි cost", "Supplier සහ customer statements"],
    highlights: [
      ["Wholesale pricing", "Product එකකට වෙන්වූ wholesale මිලක් සහ එක key එකකින් මාරු වීම."],
      ["Receivables සහ payables", "Customers ලා ඔබට ගෙවිය යුතු දේ සහ ඔබ suppliers ලාට ගෙවිය යුතු දේ track කරන්න."],
      ["Cheque tracking", "Cheque විස්තර record කර maturity reminders ලබාගන්න."],
      ["Statements සහ P&L", "Supplier statements, customer reports සහ FIFO මත පදනම් වූ profit."],
    ],
    faqs: [["වෙනත් වෙළඳසැල් වලට credit එකට විකුණන්න පුළුවන්ද?", "පුළුවන්. Credit bills, කොටස් ගෙවීම් සහ outstanding balances customer කෙනෙකුට අනුව track වෙනවා."]],
  },
  "auto-parts": {
    name: "Auto Parts සහ Spare Parts වෙළඳසැල්",
    short: "Auto සහ spare parts",
    headline: "Auto parts සහ spare parts shops සඳහා POS",
    intro: "Part numbers දහස් ගණනක්, credit එකට ගන්න garages සහ supplier cheques. MariaPoS parts counter එකට search කළ හැකි stock, credit සහ supplier control ගෙනෙනවා.",
    challenges: ["Part numbers වල විශාල catalogue එකක්", "Garage සහ mechanic credit accounts", "Cost වෙනස් වන ආනයනික stock"],
    highlights: [
      ["වේගවත් search", "Part නමෙන් හෝ number එකෙන් search කරන්න, නැත්නම් barcode එක scan කරන්න."],
      ["FIFO costing", "හැම shipment එකකටම තමන්ගේම landed cost එක තියෙනවා, නිවැරදි margin එකක් සඳහා."],
      ["Credit customers", "Garages සහ mechanics ලා credit එකට, සම්පූර්ණ statements සමඟ."],
      ["Wholesale price", "Garages සඳහා trade මිල, walk-ins සඳහා retail මිල."],
    ],
    faqs: [["ආනයන costs වෙනස් වෙද්දී stock value එක track කරන්න පුළුවන්ද?", "පුළුවන්. FIFO batches මගින් හැම shipment එකකම cost එක තියාගන්නවා, ඒ නිසා stock value සහ profit නිවැරදිව තියෙනවා."]],
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
