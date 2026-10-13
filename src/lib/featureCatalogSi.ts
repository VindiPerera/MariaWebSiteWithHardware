/**
 * Sinhala + English mix text for the feature catalogue.
 * Keyed by category id; `features` follows the same order as featureCatalog.ts
 * as [name, what, why]. Technical terms are deliberately kept in English so the
 * meaning is not lost.
 */
export type FeatureCategorySi = {
  title: string;
  summary: string;
  features: [name: string, what: string, why: string][];
};

export const featureCatalogSi: Record<string, FeatureCategorySi> = {
  "billing-checkout": {
    title: "POS Billing සහ Checkout",
    summary: "Cashier ලා දවස පුරා පාවිච්චි කරන counter screen එක. Software එක නිසා queue එකක් කවදාවත් නවතින්නේ නෑ.",
    features: [
      ["Barcode සහ නමින් search කර billing", "ඕනෑම USB scanner එකකින් barcode එක scan කරන්න, නැත්නම් product නමෙන් කොටසක් type කරන්න. Item එක bill එකට එකවරම add වෙනවා.", "Peak hours වල checkout වේගවත් වෙනවා, අතින් type කරද්දී වෙන වැරදි අඩු වෙනවා."],
      ["F1–F12 Keyboard shortcuts", "හැම සාමාන්‍ය action එකකටම key එකක් තියෙනවා: product search (F2), wholesale/retail toggle (F5), customer phone (F6), promo code (F7), bill discount (F8) සහ sale එක complete කිරීම.", "පළපුරුදු cashier ට mouse එක අල්ලන්නේ නැතුව bill කරන්න පුළුවන්. හැම customer කෙනෙක්ම තත්පර කීපයෙන් ඉවරයි."],
      ["Touch-screen numeric keypad", "Touch monitors වල quantity, price සහ cash tendered ඇතුළත් කරන්න ලොකු on-screen keypad එකක්.", "Touch POS terminal එකේත්, keyboard තියෙන සාමාන්‍ය PC එකේත් එක සමානව හොඳට වැඩ කරනවා."],
      ["Retail සහ wholesale pricing", "හැම product එකකටම retail price එකකුයි wholesale price එකකුයි තියෙනවා. එක key එකකින් මුළු bill එකම wholesale වලට මාරු කරන්න පුළුවන්.", "වෙනම system එකක් නැතුව, එකම counter එකෙන් walk-in customers ටත් bulk buyers ටත් සේවය කරන්න පුළුවන්."],
      ["බර මත සහ loose items", "KG, g, L, ml, metre, dozen, pack ආදී units වලින්, decimal quantities සමඟ විකුණන්න.", "සහල්, එළවළු, cables, රෙදි සහ loose items නිවැරදිව බර හෝ දිග අනුව bill වෙනවා."],
      ["Item සහ bill discounts", "තනි line එකකට හෝ මුළු bill එකටම discount එකක්, percentage එකක් හෝ fixed amount එකක් විදිහට දෙන්න. Permission control එකත් එක්ක.", "Counter එකේ offers දෙන ගමන්ම, discount දෙන්න අවසර ඇත්තේ කාටද කියලා අයිතිකරුට තීරණය කරන්න පුළුවන්."],
      ["Promo codes", "Checkout එකේදී cashier ඇතුළත් කරන, validate වෙන discount එකක් දෙන promotion codes සාදන්න.", "Campaigns, festival offers සහ social-media coupons run කරන්න පුළුවන්, හැම redemption එකක්ම record වෙනවා."],
      ["Price check", "Bill එකක් පටන් නොගෙනම, scan හෝ search කර ඕනෑම product එකක price එකයි stock එකයි බලන්න.", "දැන් කරමින් ඉන්න sale එකට බාධා නොකර customer ගේ මිල ප්‍රශ්න වලට ඉක්මනින් උත්තර දෙන්න පුළුවන්."],
      ["Sales history සහ bill reprint", "Invoice, දිනය හෝ customer අනුව පරණ bills search කර ඕනෑම receipt එකක් reprint කරන්න. Cashier ලාට පේන්නේ තමන්ගේ sales විතරයි.", "Customer queries සහ warranty claims තත්පර කීපයෙන් විසඳන්න පුළුවන්."],
    ],
  },
  payments: {
    title: "Payments",
    summary: "Customer ලා ගෙවන ඕනෑම ක්‍රමයක් භාර ගන්න. හැම tender method එකක්ම, හැම රුපියලක්ම trace වෙනවා.",
    features: [
      ["Cash, card, bank transfer සහ cheque", "හැම bill එකකම payment method එක record කරන්න. Bank transfers වලට reference number එකත්, cheques වලට number, bank සහ දිනයත් capture වෙනවා.", "ඔබේ payment-method report එක bank statement එකටත් drawer එකටත් හැමවිටම ගැලපෙනවා."],
      ["Split payments", "එක bill එකක් methods කීපයකින් ගෙවන්න, උදාහරණයක් විදිහට කොටසක් cash වලින් සහ කොටසක් card එකෙන්.", "Customer ට ක්‍රම දෙකකින් ගෙවන්න ඕන වුණාම bill එක void කරලා ආයෙ bill කරන්න ඕන නෑ."],
      ["Automatic change calculation", "Cash tendered එක ඇතුළත් කළාම, ආපසු දිය යුතු balance එක MariaPoS එක හරියටම පෙන්වනවා.", "කාර්යබහුල till එකක ගණන් කිරීමේ වැරදි නැති වෙනවා."],
      ["Credit (පස්සේ ගෙවන) bills", "Register කරපු customers ට credit එකට විකුණන්න. Balance එක ඔවුන්ගේ account එකට add වෙනවා.", "කඩදාසි credit පොත් නැතුව විශ්වාසවන්ත customers ට දිගටම ගනුදෙනු කරන්න පුළුවන්."],
    ],
  },
  "customers-loyalty": {
    title: "Customers, Credit සහ Loyalty",
    summary: "ඔබෙන් ගන්නේ කවුද, කවුරුන් කොච්චර ගෙවන්න තියෙනවද කියලා දැනගන්න. ආයෙත් එන අයට reward කරන්න.",
    features: [
      ["Customer profiles", "Customers ලා නමින් සහ phone number එකෙන් save කරන්න. Checkout එකේදී number එක type කළාම (F6) bill එකට customer ව attach වෙනවා.", "Call කරන්න, message කරන්න, reward කරන්න පුළුවන් customer list එකක් හදාගන්න."],
      ["Credit bills සහ receivables", "ගෙවලා නැති හැම bill එකක්ම, partial payments සහ customer කෙනෙකුට අදාළ outstanding balance track කරන්න. POS එකෙන් හෝ cloud panel එකෙන් settle කරන්න.", "අමතක වුණු credit නිසා සල්ලි නැති වෙන එක නවත්වන්න, කවුද කොච්චර ගෙවන්න තියෙන්නේ කියලා හරියටම බලන්න."],
      ["Loyalty points", "Customers ලා මිලදී ගැනීම් වලින් points උපයනවා. Counter එකේදී ඒවා discount එකක් විදිහට redeem කරන්න පුළුවන්, balance එක screen එකේ පේනවා.", "Loyalty cards print නොකර, එක පාරක් ආපු අය නිතර එන customers බවට පත් කරගන්න."],
      ["Customer reports", "Top customers, මිලදී ගැනීමේ වාර ගණන සහ වියදම් ඉතිහාසය.", "වැඩිම revenue එකක් ගෙනෙන customers ලා කෙරෙහි offers යොමු කරන්න."],
    ],
  },
  "inventory-stock": {
    title: "Inventory සහ FIFO Stock",
    summary: "රාක්කයේ තියෙන දේට ගැලපෙන stock එකක් සහ විශ්වාස කරන්න පුළුවන් cost figure එකක්.",
    features: [
      ["FIFO batch tracking", "හැම goods receipt එකකින්ම තමන්ගේම cost එකක් සහිත batch එකක් හැදෙනවා. Sales වලදී පරණම batch එක මුලින්ම use වෙනවා.", "Supplier මිල වෙනස් වුණත්, හැම sale එකකම නිවැරදි profit එක ලැබෙනවා, පරණ stock මුලින් විකිණෙනවා."],
      ["Products, categories සහ units", "Barcode, category, unit, cost, retail සහ wholesale price සහ product image එක්ක products ප්‍රමාණයට සීමාවක් නෑ.", "මුළු වෙළඳසැලම පාවිච්චි කරන පිරිසිදු, search කළ හැකි catalogue එකක්."],
      ["Tax classes", "Tax classes define කර products වලට assign කරන්න, එවිට tax නිවැරදිව ගණනය වී report වෙනවා.", "Tax summary report එකෙන් ඔබේ tax filings සඳහා සූදානම් figures ලැබෙනවා."],
      ["Stock adjustments සහ shrinkage", "හේතුවක් සමඟ stock adjust කරන්න. ඉවත් කිරීම් wastage, damage හෝ theft ලෙස tag කරන්න පුළුවන්.", "Shrinkage report එකෙන් සැබෑ පාඩු සරල නිවැරදි කිරීම් වලින් වෙන්ව පෙනෙනවා."],
      ["Low-stock alerts", "Product එකකට අවම stock level එකක් set කරන්න. Items අඩු වුණාම login වෙද්දී alert එකක් ලැබෙනවා.", "රාක්ක හිස් වෙන්න කලින් reorder කරන්න, customers ලා ආපහු යන්න ඉඩ නොදී."],
      ["Barcode label printing", "Barcode එකක් නැතුව එන products සඳහා barcode labels generate කර print කරන්න.", "Loose සහ ගෙදර pack කරපු items ඇතුළුව හැම item එකක්ම scan කළ හැකි වෙනවා."],
    ],
  },
  "suppliers-purchasing": {
    title: "Suppliers සහ Purchasing",
    summary: "හැම delivery එකක්ම, payable එකක්ම සහ cheque එකක්ම ලැබීමේ සිට settle වෙනකම් track වෙනවා.",
    features: [
      ["Supplier directory", "Supplier contacts, terms සහ සම්පූර්ණ transaction history එක තැනකින් තියාගන්න.", "Files අස්සේ හොයන්නේ නැතුව කවුරුන්ගෙන්ද, මොන terms වලටද ගන්නේ කියලා දැනගන්න."],
      ["GRN / goods receiving", "Delivery එක quantities සහ cost price සමඟ record කරන්න. Stock එක අලුත් FIFO batch එකක් විදිහට automatically add වෙනවා.", "භාණ්ඩ ආපු ගමන්ම stock එකයි cost එකයි update වෙනවා, හැම delivery එකකටම record එකක් තියෙනවා."],
      ["Supplier payables", "හැම supplier කෙනෙකුටම ගෙවන්න තියෙන්නේ කොච්චරද කියලා track කරන්න. Cash, transfer හෝ cheque වලින් bills සම්පූර්ණයෙන් හෝ කොටසක් settle කරන්න.", "Suppliers ලාට නියමිත වෙලාවට ගෙවන්න, දෙපාරක් ගෙවීම වළක්වන්න."],
      ["Cheque maturity reminders", "Post-dated cheques due dates සමඟ list වෙනවා, mature වෙන්න ළඟ හෝ overdue වුණාම flag වෙනවා.", "Bounce වුණු හෝ අමතක වුණු cheques නෑ. Vendor සබඳතා සහ cash flow ආරක්ෂා වෙනවා."],
      ["Supplier statements", "Supplier කෙනෙකුට අදාළ purchases, payments සහ balance පෙන්වන සම්පූර්ණ ledger එක, PDF වලට export කළ හැකියි.", "Suppliers ලා එක්ක විනාඩි කීපයකින් reconcile කරගන්න."],
    ],
  },
  "returns-refunds": {
    title: "Returns සහ Refunds",
    summary: "Returns නිවැරදිව handle කරන්න, එවිට stock එකත් cash එකත් දෙකම හරි.",
    features: [
      ["Invoice මත පදනම් වූ returns", "Invoice number එකෙන් original bill එක සොයා ගෙන, සම්පූර්ණයෙන් හෝ කොටසක් return කරන්න.", "සැබෑ මිලදී ගැනීම් විතරයි, ඇත්තටම ගෙවපු මිලට return වෙන්නේ."],
      ["Batch-accurate restocking", "Return වුණු items නිවැරදි cost batch එකටම ආපසු යනවා.", "Return එකකින් පසුවත් stock values සහ profit නිවැරදිව තියෙනවා."],
      ["Cash refund හෝ credit adjustment", "Cash වලින් refund කරන්න (shift එකට record වෙනවා) නැත්නම් customer ගේ credit balance එක අඩු කරන්න.", "Till count එකටත් customer ledger එකටත් return එක automatically පිළිබිඹු වෙනවා."],
    ],
  },
  "shifts-cash": {
    title: "Shifts, Till සහ Cash Control",
    summary: "හැම cashier කෙනෙක්ම, හැම shift එකක්ම, drawer එකේ හැම රුපියලක්ම ගණන් බලනවා.",
    features: [
      ["Shift open සහ close", "Cashier ලා opening float එකක් එක්ක shift එකක් open කර, ගණන් කරපු cash amount එකක් එක්ක close කරනවා.", "හැම shift එකක්ම සල්ලි handle කළේ කවුද කියලා පැහැදිලි, වෙන වෙනම record එකක්."],
      ["Expected vs counted cash", "MariaPoS expected cash ගණනය කරනවා (float + cash sales − cash returns ± till movements). අඩුවක් හෝ වැඩියක් record කරනවා.", "Cash වෙනස්කම් එදිනම හඳුනාගෙන, වගකිවයුතු shift එකට සම්බන්ධ කරන්න පුළුවන්."],
      ["Till cash-in සහ cash-out", "Drawer එකට දාපු හෝ ගත්ත cash හේතුවක් එක්ක record කරන්න.", "Drawer එකේ හැම චලනයක්ම පැහැදිලි කරලා තියෙන නිසා ගණන හැමවිටම ගැලපෙනවා."],
      ["Cash drawer kick සහ No-Sale", "Cash sales වලදී drawer එක automatically open වෙනවා. Log වෙන No-Sale එකකටත් open කරන්න පුළුවන්.", "සටහනක් නැතුව drawer එක open කරන්න staff ට බෑ."],
      ["Shift සහ cashier reports", "Shift එකක් සහ cashier කෙනෙක් අනුව sales, payment breakdown සහ cash variance ඉතිහාසය.", "Cashier ලාගේ ක්‍රියාකාරිත්වය සසඳා, නැවත නැවත වෙන අඩුවීම් හඳුනාගන්න."],
    ],
  },
  expenses: {
    title: "Expense Tracking",
    summary: "විකුණුම් විතරක් නෙවෙයි, ඔබේ සැබෑ profit එක දැනගන්න.",
    features: [
      ["එක් වරක් වන expenses", "Electricity, transport, repairs සහ අනෙක් වියදම් categories සහ දිනයන් සමඟ record කරන්න.", "විසිරුණු receipts වෙනුවට හැම ධාවන වියදමක්ම එක තැනක."],
      ["Recurring සහ date-range expenses", "Rent, salaries සහ subscriptions සතිපතා, මාසික හෝ වාර්ෂික plans විදිහට set කරන්න, නැත්නම් වියදමක් custom date range එකක් පුරා බෙදන්න.", "Profit & Loss එකේ සැබෑ මාසික වියදම් automatically පිළිබිඹු වෙනවා."],
      ["Expense categories සහ reports", "Custom categories සහ කාලය සහ category අනුව expenses report එකක්.", "සල්ලි යන්නේ කොහෙටද, කොතැනින් කපන්නද කියලා බලන්න."],
    ],
  },
  "reports-analytics": {
    title: "Reports සහ Analytics",
    summary: "අයිතිකරුවන් ඇත්තටම අහන ප්‍රශ්න වලට උත්තර දෙන reports 13+ ක්. සියල්ලම PDF සහ Excel වලට export කළ හැකියි.",
    features: [
      ["Dashboard", "අද sales, profit, bill count, sales trend, top products සහ payment mix එක එක බැල්මකින්.", "දවසේ තත්ත්වය තත්පර දහයකින් තේරුම් ගන්න."],
      ["Sales සහ product sales reports", "Date range එකක්, product එකක් සහ category එකක් අනුව sales, quantities සහ revenue සමඟ.", "මොනවද විකිණෙන්නේ, මොනවද නැත්තේ, කවදාද කියලා දැනගන්න."],
      ["Profit & Loss", "ඕනෑම කාලයක් සඳහා revenue, FIFO cost of goods, gross profit, expenses සහ net profit.", "Accountant ට බලා නොසිට නිවැරදි P&L එකක්."],
      ["Inventory valuation සහ stock status", "අතේ ඇති stock, cost එකෙන් stock value එක සහ අඩු හෝ ඉවර වුණු items.", "රාක්ක වල ඇති මුදල කොච්චරද කියලා දැනගන්න."],
      ["Payment methods, tax summary සහ shrinkage", "Payment method අනුව ආදායම, class අනුව එකතු කළ tax සහ wastage, damage සහ theft නිසා වූ පාඩු.", "Banks reconcile කරන්න, tax filings සූදානම් කරන්න, පාඩු පාලනය කරන්න."],
      ["Shift, cashier, customer සහ supplier reports", "ව්‍යාපාරය ගනුදෙනු කරන හැම පුද්ගලයෙකුගේම සහ හවුල්කරුවෙකුගේම performance සහ ledgers.", "Staff, customers සහ suppliers අතර වගවීම."],
      ["PDF සහ Excel export", "ඕනෑම report එකක් click එකකින් PDF හෝ Excel වලට export කරන්න.", "Partners, banks හෝ ඔබේ accountant සමඟ එකවරම share කරන්න."],
    ],
  },
  "cloud-alerts": {
    title: "Cloud Panel, SMS සහ Telegram",
    summary: "Counter එක offline දිගටම bill කරද්දී, phone එකෙන් වෙළඳසැල පාලනය කරන්න.",
    features: [
      ["Two-way cloud sync", "Internet තියෙන හැම වෙලාවකම sales, stock, customers සහ suppliers background එකේ MariaPoS cloud panel එකට sync වෙනවා.", "ඔබේ data off-site backup වෙනවා, ඕනෑම තැනක ඉඳන් බලන්න පුළුවන්."],
      ["Web back-office (cloud panel)", "ඕනෑම browser එකකින් login වී reports බලන්න, products, suppliers, GRNs, stock adjustments, customers, receivables, payables සහ expenses manage කරන්න.", "Counter එකට නොගොස් ගෙදර ඉඳන් හෝ වෙනත් branch එකකින් ව්‍යාපාරය manage කරන්න."],
      ["SMS e-bill receipts", "Invoice number, items, totals සහ balance සමඟ bill එක customer ගේ phone එකට SMS කරන්න. Prepaid SMS wallet එකක් use කරනවා, balance එක cashier ට පෙනෙනවා.", "Customers ලාට කවදාවත් මැකෙන්නේ නැති receipt එකක් තියෙනවා, ඔබට thermal paper ඉතිරි වෙනවා."],
      ["Telegram sales alerts", "Cloud panel එකේ ඔබේ Telegram account එක link කරන්න. හැම අලුත් sale එකක්ම, items සමඟ, සිදුවෙන ගමන්ම ලැබෙනවා.", "වෙළඳසැලෙන් බැහැරව සිටියත්, හැම branch එකකම live activity අයිතිකරුට පේනවා."],
    ],
  },
  "security-users": {
    title: "Users, Security සහ Audit",
    summary: "හැම staff member කෙනෙකුටම ඔවුන්ට අවශ්‍ය access එක පමණක් දෙන්න, වැඩි දෙයක් නෑ.",
    features: [
      ["Admin සහ cashier roles", "Admin ට සියල්ලම පේනවා. Cashier ට profits හෝ settings නැති, counter එකට අදාළ view එකක් ලැබෙනවා.", "සංවේදී business numbers අයිතිකරු ළඟම තියෙනවා."],
      ["Granular permissions", "User කෙනෙකුට අනුව තනි තනි හිමිකම් on/off කරන්න: item discounts, bill discounts, price editing, returns, credit, reports, inventory, customers, expenses සහ users.", "Software එක ඔබේ වෙළඳසැල පවත්වන ආකාරයට ගැලපෙනවා, ඒ අනිත් අතට නෙවෙයි."],
      ["Manager PIN override", "Restricted actions වලට manager කෙනෙකුට තමන්ගේ PIN එක ඇතුළත් කර ස්ථානයේදීම අනුමත කරන්න පුළුවන්.", "Queue එක මන්දගාමී නොකර පාලනය තියාගන්න."],
      ["Audit log", "වැදගත් actions user සහ වෙලාව සමඟ record වෙනවා.", "මොනවද, කවුද, කවදාද වෙනස් කළේ කියලා දැනගන්න."],
      ["Encrypted local database සහ auto-logout", "වෙළඳසැලේ data ඔබේ PC එකේ encrypted database එකක ගබඩා වෙනවා, idle sessions automatically logout වෙනවා.", "Computer එක බලාගන්න කෙනෙක් නැති වුණත් ඔබේ business data ආරක්ෂිතයි."],
    ],
  },
  "hardware-printing": {
    title: "Hardware සහ Printing",
    summary: "සාමාන්‍ය retail වෙළඳසැල් දැනටමත් පාවිච්චි කරන counter උපකරණ එක්ක වැඩ කරනවා.",
    features: [
      ["Thermal receipt printers", "ඔබේ logo, address සහ footer message එක්ක 58 mm සහ 80 mm thermal printers වලට print කරනවා.", "සාමාන්‍ය අඩු මිලේ printers වලින් වෘත්තීය, branded receipts."],
      ["USB barcode scanners", "Keyboard-mode ඕනෑම USB හෝ wireless barcode scanner එකක් කෙලින්ම වැඩ කරනවා.", "විශේෂ drivers හෝ configuration අවශ්‍ය නෑ."],
      ["Cash drawers සහ label printers", "Printer මගින් පාලනය වන cash drawers automatically open වෙනවා. Barcode labels, label printers වල print වෙනවා.", "එක software එකකින් සම්පූර්ණ counter setup එකක්."],
      ["Touch සහ සාමාන්‍ය screens", "Windows 10 සහ 11 PCs, laptops සහ all-in-one touch POS terminals වල ඕනෑම resolution එකකට scale වෙලා දුවනවා.", "අද ඇති hardware පාවිච්චි කර, පසුව upgrade කරන්න."],
    ],
  },
  "settings-customisation": {
    title: "Settings සහ Customisation",
    summary: "MariaPoS ඔබේ වෙළඳසැලට සමානව පෙනී, ඔබේ වෙළඳසැල වගේම වැඩ කරන්න හදාගන්න.",
    features: [
      ["Bill layout settings", "වෙළඳසැලේ නම, logo, address, phone, bill header සහ footer text set කරන්න.", "හැම receipt එකකම ඔබේ brand එක තියෙනවා."],
      ["Themes සහ appearance", "POS screens සඳහා accent, background සහ text colours තෝරන්න.", "දවස පුරා පාවිච්චි කරන cashier ලාට සුවපහසු screen එකක්."],
      ["Currency සහ regional settings", "ඔබේ වෙළඳසැලට currency symbol එක ($, £, €, හෝ local currency), code, decimal places සහ receipt width set කරන්න.", "ඔබේ customers ලාත් accountant ත් බලාපොරොත්තු වන ආකාරයට figures පෙනෙනවා."],
      ["Licence management", "App එක ඇතුළෙන්ම ඔබේ licence එක activate කර, බලා, renew කරන්න. කල් ඉකුත් වෙන්න කලින් reminders ලැබෙනවා.", "හදිසියේ lock වීම් නෑ, renewal එක විනාඩි කීපයක වැඩක්."],
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
