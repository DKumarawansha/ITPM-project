const { test, expect } = require('@playwright/test');

/**
 * අකුරු සහ සංකේත නිවැරදිව සැසඳීම සඳහා හිස්තැන් සහ යුනිකෝඩ් හැඩතල සමාන කරයි.
 */
function normalize(text) {
    if (!text || text === 'nan') return '';
    return text.normalize('NFC').replace(/\s+/g, ' ').trim();
}

test.describe('SwiftTranslator Automation - All 36 Test Cases', () => {

    const testData = [
        // --- POSITIVE FUNCTIONAL TEST CASES (24) ---
        { id: 'Pos_Fun_0001', input: 'mama dhaen rotii kanavaa.', expected: 'මම දැන් රොටී කනවා.' },
        { id: 'Pos_Fun_0002', input: 'api heta rathnapura yamu.', expected: 'අපි හෙට රත්නපුර යමු.' },
        { id: 'Pos_Fun_0003', input: 'dora wahanna.', expected: 'දොර වහන්න.' },
        { id: 'Pos_Fun_0004', input: 'amm kema hadanava saha thaaththaa pela vavanavaa.', expected: 'අම්ම කැම හදනව සහ තාත්තා පැල වවනවා.' },
        { id: 'Pos_Fun_0005', input: 'magee  almaariya kaedilaa.', expected: 'මගේ අල්මාරිය කැඩිලා.' },
        { id: 'Pos_Fun_0006', input: 'waessa naethnam api sarungal yavamu.', expected: 'වැස්ස නැත්නම් අපි සරුංගල් යවමු.' },
        { id: 'Pos_Fun_0007', input: 'oyaa enavadha? naedhdha!', expected: 'ඔයා එනවද? නැද්ද!' },
        { id: 'Pos_Fun_0008', input: 'veelaava dhaen 10.30 am.', expected: 'වේලාව දැන් 10.30 am.' },
        { id: 'Pos_Fun_0009', input: 'akkaata rupiyal 2500k dhenna.', expected: 'අක්කාට රුපියල් 2500ක් දෙන්න.' },
        { id: 'Pos_Fun_0010', input: 'magee thaaththaa adha haputhalee idhan enavaa.', expected: 'මගේ තාත්තා අද හපුතලේ ඉදන් එනවා.' },
        { id: 'Pos_Fun_0011', input: 'api saman dheevaalayata yamu.', expected: 'අපි සමන් දේවාලයට යමු.' },
        { id: 'Pos_Fun_0012', input: 'nimaali adha enne naee.', expected: 'නිමාලි අද එන්නෙ නෑ.' },
        { id: 'Pos_Fun_0013', input: 'oyaa iiyee taniyema koheda giyee?', expected: 'ඔයා ඊයේ තනියෙම කොහෙද ගියේ?' },
        { id: 'Pos_Fun_0014', input: 'adha himaayata vaeda godak thiyanavaa.', expected: 'අද හිමායට වැඩ ගොඩක් තියනවා.' },
        { id: 'Pos_Fun_0015', input: 'aayuboovan guru maeeNiyanee!', expected: 'ආයුබෝවන් ගුරු මෑණියනේ!' },
        { id: 'Pos_Fun_0016', input: 'Api sellam karamudha.Menna vaessak eevii. eka paaratama. dhaen api mokadha karanne? Ikmanata dhuvamu api gedharata.Ammoo yaantham themune naee.ehenam api thee ekak bomudha? siravata eeka nam hodha adhahasak. harii apee ammaa hadhaagena eevii.apith yamu ammaata udhav karamu gihin.enna haemooma ikmanata yamu.', expected: 'අපි සෙල්ලම් කරමුද.මෙන්න වැස්සක් ඒවී. එක පාරටම. දැන් අපි මොකද කරන්නේ? ඉක්මනට දුවමු අපි ගෙදරට.අම්මෝ යාන්තම් තෙමුනෙ නෑ.එහෙනම් අපි තේ එකක් බොමුද? සිරවට ඒක නම් හොද අදහසක්. හරී අපේ අම්මා හදාගෙන ඒවී.අපිත් යමු අම්මාට උදව් කරමු ගිහින්.එන්න හැමෝම ඉක්මනට යමු.' },
        { id: 'Pos_Fun_0017', input: 'kasunta dhaen saniipa naee.', expected: 'කසුන්ට දැන් සනීප නෑ.' },
        { id: 'Pos_Fun_0018', input: 'linuka oyaa potha kiyavala ivara velaa nidhaaganna', expected: 'ලිනුක ඔයා පොත කියවල ඉවර වෙලා නිදාගන්න' },
        { id: 'Pos_Fun_0019', input: 'ada hriyta rasney.', expected: 'අද හරියට රස්නෙයි.' },
        { id: 'Pos_Fun_0020', input: 'mee saramee ganana kiiyadha?', expected: 'මේ සරමේ ගනන කීයද?' },
        { id: 'Pos_Fun_0021', input: 'mata ikmnata kat karanna.mata oyata kiyanna visthrayak thiyenava.', expected: 'මට ඉක්මනට කතා කරන්න.මට ඔයාට කියන්න විස්තරයක් තියෙනවා.' },
        { id: 'Pos_Fun_0022', input: 'Siraavata, uba adha ehe giyaadha machan.', expected: 'සිරාවට, උබ අද එහෙ ගියාද මචන්.' },
        { id: 'Pos_Fun_0023', input: 'api labana maase gamanak yanna hithan innava.maathara gihin muhudhee naala sellam karala, paravi dhuupatha balanna gihin api yamu hummaanaya balanna.oyaalaa kaemathidha apith ekka yanna enna? kasun, sadhuni, malshaa, ransilu mama thamaa yanna inne dhaenata oyaalath enava nam api kaemathii.', expected: 'අපි ලබන මාසෙ ගමනක් යන්න හිතන් ඉන්නව.මාතර ගිහින් මුහුදේ නාල සෙල්ලම් කරල, පරවි දූපත බලන්න ගිහින් අපි යමු හුම්මානය බලන්න.ඔයාලා කැමතිද අපිත් එක්ක යන්න එන්න? කසුන්, සදුනි, මල්ශා, රන්සිලු මම තමා යන්න ඉන්නේ දැනට ඔයාලත් එනව නම් අපි කැමතී.' },
        { id: 'Pos_Fun_0024', input: 'oyaa buundhi 2kg gaththadha uthsaveeta yanna?', expected: 'ඔයා බූන්දි 2kg ගත්තද උත්සවේට යන්න?' },

        // --- NEGATIVE FUNCTIONAL TEST CASES (12) ---
        { id: 'Neg_Fun_0001', input: '   mam game ynv', expected: '     මම ගමේ යනවා' },
        { id: 'Neg_Fun_0002', input: 'nimaali $$$$$$ gedhara @@@ giyaa.', expected: 'නිමාලි ගෙදර ගියා.' },
        { id: 'Neg_Fun_0003', input: 'ehema scene ekakdha? suppa neh.', expected: 'එහෙම scene එකක්ද? සුප්ප නෙහ්.' },
        { id: 'Neg_Fun_0004', input: 'api gedhara', expected: 'අපි ගෙදර' },
        { id: 'Neg_Fun_0005', input: 'ara     lamayaa    gedhara    yanavaa', expected: 'අර ලමයා ගෙදර යනවා' },
        { id: 'Neg_Fun_0006', input: 'This is a beautiful bag.', expected: 'This is a beautiful bag.' },
        { id: 'Neg_Fun_0007', input: '131243500', expected: '131243500' },
        { id: 'Neg_Fun_0008', input: 'methmaa gedhara yanavaa 😊😊', expected: 'මෙත්මා ගෙදර යනවා 😊😊' },
        { id: 'Neg_Fun_0009', input: 'kanava pittu mama.', expected: 'කනවා පිට්ටු මම.' },
        { id: 'Neg_Fun_0010', input: '    ', expected: '' }, 
        { id: 'Neg_Fun_0011', input: 'Line 1\nLine 2', expected: 'Line 1\nLine 2' },
        { id: 'Neg_Fun_0012', input: 'mage id eka aran enna amathaka unaa.', expected: 'mage id එක අරන් එන්න අමතක උනා.' }
    ];

    test.beforeEach(async ({ page }) => {
        // වෙබ් අඩවියට පිවිසීම
        await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    });

    for (const data of testData) {
        test(`${data.id}: Testing input "${data.input}"`, async ({ page }) => {
            const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
            const outputSelector = '.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap';

            // 1. Singlish පෙළ ඇතුළත් කිරීම
            await inputArea.fill(data.input);

            // 2. Translate බොත්තම එබීම
            await page.evaluate(() => {
                document.querySelector('button[aria-label="Translate"]')?.click();
            });

            // 3. ප්‍රතිඵලය ලැබෙන තෙක් රැඳී සිටීම (හිස්තැන් පරීක්ෂාව හැර)
            if (data.id !== 'Neg_Fun_0010') {
                await page.waitForFunction((sel) => {
                    const el = document.querySelector(sel);
                    return el && el.textContent && el.textContent.trim().length > 0;
                }, outputSelector, { timeout: 10000 }).catch(() => {});
            } else {
                await page.waitForTimeout(2000);
            }

            // 4. Actual Output එක ලබා ගැනීම
            const actualRaw = await page.locator(outputSelector).first().textContent() || '';
            const actual = normalize(actualRaw);
            const expected = normalize(data.expected);

            // 5. සැසඳීම: Expected සහ Actual සමාන නොවන්නේ නම් ටෙස්ට් එක Fail වේ
            expect(actual).toBe(expected);
        });
    }
});