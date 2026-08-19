/** 命盘解读用引文：古文取《紫微斗數全書》卷一，白話為該句今譯。 */

export const JUAN1_SOURCE = 'http://ab.newdu.com/book/ms261794.html';
export const BAIKE_SANFANG = 'https://baike.baidu.com/item/%E4%B8%89%E6%96%B9%E5%9B%9B%E6%AD%A3/1476303';

export function wikiSection(_heading: string): string {
  return JUAN1_SOURCE;
}

export interface QuoteRecord {
  classic: string;
  vernacular: string;
  sourceTitle: string;
  wikiHeading: string;
  bookId: string;
  palaces?: string[];
  stars?: string[];
  mutagen?: string[];
  branches?: string[];
  needSha?: boolean;
  topic: 'sanfang' | 'sihua' | 'star' | 'palace-star' | 'ming-verse' | 'fawei-palace';
}

const CITE_WENDA = { sourceTitle: '諸星問答論', wikiHeading: '諸星問答論', bookId: 'zhuxing-wenda' };
const CITE_FAWEI = { sourceTitle: '斗數發微論', wikiHeading: '斗數發微論', bookId: 'dou-shu-fawei-lun' };
const CITE_DEDI = { sourceTitle: '十二宮諸星得地合格訣', wikiHeading: '十二宮諸星得地合格訣', bookId: 'shiergong-dedi' };

export const SANFANG_DEF: QuoteRecord = {
  topic: 'sanfang',
  classic: '四正吉星定為貴，三方殺拱少為奇。對照兮詳凶詳吉，合照兮觀賤觀榮。',
  vernacular: '四正見到吉星才可論貴；三方被煞星拱照，就很少有出奇的福。對宮要分清吉凶，三合要看榮辱貴賤。單看一宮不夠。',
  ...CITE_FAWEI,
};

export const SANFANG_BAIKE: QuoteRecord = {
  topic: 'sanfang',
  classic: '三方指一個宮位的三合宮，四正指三方加上該宮位的對宮。命宮的三方四正含命宮、官祿、財帛及對宮遷移。',
  vernacular: '讀任一宮，都要把本宮、對宮、兩個三合宮合起來看。命宮這組就是命、財、官、遷四宮。',
  sourceTitle: '百度百科·三方四正',
  wikiHeading: '',
  bookId: '',
};

export const SIHUA_QUOTES: QuoteRecord[] = [
  {
    topic: 'sihua',
    mutagen: ['禄', '祿'],
    classic: '祿為福德之神。守身命官祿之位，科權相逢必作大臣之職。',
    vernacular: '化祿主福澤。若守在身、命或官祿，再逢化科、化權，古書以大臣之職來比喻權位與資源。',
    sourceTitle: '問化祿星所主若何？',
    wikiHeading: '問化祿星所主若何？',
    bookId: 'zhuxing-wenda',
  },
  {
    topic: 'sihua',
    mutagen: ['权', '權'],
    classic: '權星掌判生殺之神。守身命科祿相逢出將入相。',
    vernacular: '化權主決斷與權柄。守身命又逢科、祿，古書以出將入相來比喻能做主、能推動。',
    sourceTitle: '問化權星所主若何？',
    wikiHeading: '問化權星所主若何？',
    bookId: 'zhuxing-wenda',
  },
  {
    topic: 'sihua',
    mutagen: ['科'],
    classic: '科星上界應試，主掌文墨之星。守身命權祿相逢宰臣之貴。',
    vernacular: '化科主文名、考試與聲譽。守身命再逢權、祿，古書以宰臣之貴來比喻名望與文書之利。',
    sourceTitle: '問化科星所主若何？',
    wikiHeading: '問化科星所主若何？',
    bookId: 'zhuxing-wenda',
  },
  {
    topic: 'sihua',
    mutagen: ['忌'],
    classic: '忌為多管之神。守身命一生不順，小限逢之一年不足，大限十年悔吝。',
    vernacular: '化忌主牽掛、阻滯。若守身命，古書說一生多不順；小限逢之主一年不足，大限逢之主十年多悔。',
    sourceTitle: '問化忌星所主若何？',
    wikiHeading: '問化忌星所主若何？',
    bookId: 'zhuxing-wenda',
  },
];

/** 主星總論（答曰首句），按本宮主星選用。 */
export const STAR_OPENINGS: QuoteRecord[] = [
  {
    topic: 'star',
    stars: ['紫微'],
    classic: '紫微屬土，乃中天之尊星為帝座，主掌造化樞機，人生主宰。',
    vernacular: '紫微屬土，是中天帝座，管一盤的總綱，古人以它為人生主宰。',
    ...CITE_WENDA,
  },
  {
    topic: 'star',
    stars: ['天機', '天机'],
    classic: '天機屬木，南斗第三益算之善星也。',
    vernacular: '天機屬木，是南斗益壽的善星，主心思、謀略與變動。',
    ...CITE_WENDA,
  },
  {
    topic: 'star',
    stars: ['太陽', '太阳'],
    classic: '太陽星屬火，日之精也。乃造化之表儀，在數主人有貴氣，能為文為武。',
    vernacular: '太陽屬火，是日之精，主貴氣與外顯，能文能武。',
    ...CITE_WENDA,
  },
  {
    topic: 'star',
    stars: ['武曲'],
    classic: '武曲北斗第六星，屬金，乃財帛宮主。',
    vernacular: '武曲屬金，是財帛宮主星，主剛斷，也主財與壽。',
    ...CITE_WENDA,
  },
  {
    topic: 'star',
    stars: ['天同'],
    classic: '天同星屬水，乃南方第四星也，為福德宮之主宰。',
    vernacular: '天同屬水，是福德宮主星，主福澤、溫和與享樂。',
    ...CITE_WENDA,
  },
  {
    topic: 'star',
    stars: ['廉貞', '廉贞'],
    classic: '廉貞屬火，北斗第五星也。在斗司品秩，在數司權令。不臨廟旺，更犯官符，故曰化囚為殺。',
    vernacular: '廉貞屬火，管品秩權令；不得廟旺又見官符，古書說化囚為殺。',
    sourceTitle: '問廉貞所主若何？',
    wikiHeading: '問廉貞所主若何？',
    bookId: 'zhuxing-wenda',
  },
  {
    topic: 'star',
    stars: ['天府'],
    classic: '天府屬土，南斗主令第一星也。為財帛之主宰，在斗司福權之宿，會吉皆為富貴之基。',
    vernacular: '天府屬土，是南斗主令、財帛主宰，會吉則為富貴之基。',
    sourceTitle: '問天府所主若何？',
    wikiHeading: '問天府所主若何？',
    bookId: 'zhuxing-wenda',
  },
  {
    topic: 'star',
    stars: ['太陰', '太阴'],
    classic: '太陰乃水之精，為田宅主，化富，與日為配。',
    vernacular: '太陰是水之精、田宅主，化氣為富，與太陽相配。',
    sourceTitle: '問太陰星所主若何？',
    wikiHeading: '問太陰星所主若何？',
    bookId: 'zhuxing-wenda',
  },
  {
    topic: 'star',
    stars: ['貪狼', '贪狼'],
    classic: '貪狼北斗解厄之神，第一星也。屬水，化氣為桃花。',
    vernacular: '貪狼屬水，化氣為桃花，是北斗第一星，主欲望與才藝，亦能解厄。',
    sourceTitle: '問貪狼所主若何？',
    wikiHeading: '問貪狼所主若何？',
    bookId: 'zhuxing-wenda',
  },
  {
    topic: 'star',
    stars: ['巨門', '巨门'],
    classic: '巨門屬水、金。北斗第二星也，為陰精之星，化氣為暗。',
    vernacular: '巨門化氣為暗，主口舌、是非與暗昧，落哪一宮就在哪一宮生口實。',
    ...CITE_WENDA,
  },
  {
    topic: 'star',
    stars: ['天相'],
    classic: '天相屬水，南斗第五星也。為司爵之宿，為福善，化氣曰印。',
    vernacular: '天相化氣為印，是司爵之星，主輔助、衣食與官祿文書。',
    ...CITE_WENDA,
  },
  {
    topic: 'star',
    stars: ['天梁'],
    classic: '天梁屬土，南斗第二星也。司壽化氣為蔭為福壽，乃父母之主。',
    vernacular: '天梁化氣為蔭，主壽、清望與父母，也能把暴戾化為祥和。',
    ...CITE_WENDA,
  },
  {
    topic: 'star',
    stars: ['七殺', '七杀'],
    classic: '七殺南斗第六星也，屬火、金。乃斗中之上將，實成敗之孤辰。',
    vernacular: '七殺是斗中上將，主威權與波折，成敗都猛，古書稱為孤辰。',
    ...CITE_WENDA,
  },
  {
    topic: 'star',
    stars: ['破軍', '破军'],
    classic: '破軍屬水，北斗第七星也，司夫妻、子息、奴僕之神。居子午入廟，在數為耗星，故化氣曰耗。',
    vernacular: '破軍屬水，化氣為耗，管夫妻、子息、奴僕；子午入廟，主耗散與開創。',
    sourceTitle: '問破軍所主若何？',
    wikiHeading: '問破軍所主若何？',
    bookId: 'zhuxing-wenda',
  },
  {
    topic: 'star',
    stars: ['文昌'],
    classic: '文昌主科甲，守身命主人幽閑儒雅，清秀魁梧，博文廣記，機變異常，一舉成名。',
    vernacular: '文昌主科甲。守身命，古書說人清雅博學，一舉成名。',
    sourceTitle: '問文昌星所主若何？',
    wikiHeading: '問文昌星所主若何？',
    bookId: 'zhuxing-wenda',
  },
  {
    topic: 'star',
    stars: ['文曲'],
    classic: '文曲屬水，北斗第四星也，主科甲文車之宿。臨身命中作科第之客。',
    vernacular: '文曲屬水，主科甲文墨；臨身命，古書以科第之客稱之。',
    sourceTitle: '問文曲星所主若何？',
    wikiHeading: '問文曲星所主若何？',
    bookId: 'zhuxing-wenda',
  },
  {
    topic: 'star',
    stars: ['祿存', '禄存'],
    classic: '十二宮中惟身命、田宅、財帛為要，主富。居遷移則佳，與帝星守官祿宜子孫爵秩。',
    vernacular: '祿存最得力在身、命、田宅、財帛，主富；在遷移也好；與紫微同守官祿，古書說利於爵秩。',
    ...CITE_WENDA,
  },
  {
    topic: 'star',
    stars: ['左輔', '左辅'],
    classic: '左輔帝極主宰之星，守身命諸宮降福。',
    vernacular: '左輔是帝座輔星，守身命則諸宮降福。',
    sourceTitle: '問左輔所主若何？',
    wikiHeading: '問左輔所主若何？',
    bookId: 'zhuxing-wenda',
  },
  {
    topic: 'star',
    stars: ['右弼'],
    classic: '右弼帝極主宰之星，守身命文墨精通。',
    vernacular: '右弼與左輔同為帝座輔星，守身命主文墨精通。',
    sourceTitle: '問右弼所主若何？',
    wikiHeading: '問右弼所主若何？',
    bookId: 'zhuxing-wenda',
  },
];

/** 諸星問答論中明確寫到「在某宮」的句子。 */
export const PALACE_STAR_QUOTES: QuoteRecord[] = [
  { topic: 'palace-star', stars: ['巨門', '巨门'], palaces: ['ming'], classic: '在身命一生招口舌之非。', vernacular: '巨門在命或身，古書說一生多口舌是非。', ...CITE_WENDA },
  { topic: 'palace-star', stars: ['巨門', '巨门'], palaces: ['xiongdi'], classic: '在兄弟則骨肉參商。', vernacular: '巨門在兄弟宮，古書說骨肉容易不和。', ...CITE_WENDA },
  { topic: 'palace-star', stars: ['巨門', '巨门'], palaces: ['qizi'], classic: '在夫妻主於隔角，生離死別，縱夫妻有對，不免汙名失節。', vernacular: '巨門在夫妻宮，古書說多隔閡，甚至生離死別，名節也要小心。', ...CITE_WENDA },
  { topic: 'palace-star', stars: ['巨門', '巨门'], palaces: ['zinv'], classic: '在子息損後方招，雖有而無。', vernacular: '巨門在子女宮，古書說子息來得晚、損後再招，有也不穩。', ...CITE_WENDA },
  { topic: 'palace-star', stars: ['巨門', '巨门'], palaces: ['caibo'], classic: '在財帛有爭競之意。', vernacular: '巨門在財帛宮，古書說錢財上多爭競。', ...CITE_WENDA },
  { topic: 'palace-star', stars: ['巨門', '巨门'], palaces: ['jie'], classic: '在疾厄遇刑忌，眼目之災，殺臨主殘疾。', vernacular: '巨門在疾厄再遇刑忌，古書特提眼目之災；有煞同宮更重。', ...CITE_WENDA },
  { topic: 'palace-star', stars: ['巨門', '巨门'], palaces: ['qianyi'], classic: '在遷移則招是非。', vernacular: '巨門在遷移宮，古書說外出、變動中容易惹是非。', ...CITE_WENDA },
  { topic: 'palace-star', stars: ['巨門', '巨门'], palaces: ['jiaoyou'], classic: '在奴僕則多怨逆。', vernacular: '巨門在奴僕（交友）宮，古書說部屬或朋友多怨逆。', ...CITE_WENDA },
  { topic: 'palace-star', stars: ['巨門', '巨门'], palaces: ['guanlu'], classic: '在官祿主招刑杖。', vernacular: '巨門在官祿宮，古書說功名事業上容易招刑責、口舌。', ...CITE_WENDA },
  { topic: 'palace-star', stars: ['巨門', '巨门'], palaces: ['tianzhai'], classic: '在田宅則破蕩祖業。', vernacular: '巨門在田宅宮，古書說不利祖業房產，容易破蕩。', ...CITE_WENDA },
  { topic: 'palace-star', stars: ['巨門', '巨门'], palaces: ['fude'], classic: '在福德其禍稍輕。', vernacular: '巨門在福德宮，古書說為禍相對較輕。', ...CITE_WENDA },
  { topic: 'palace-star', stars: ['巨門', '巨门'], palaces: ['fumu'], classic: '在父母則遭棄擲。', vernacular: '巨門在父母宮，古書說與尊長緣薄，有被棄擲之象。', ...CITE_WENDA },
  { topic: 'palace-star', stars: ['七殺', '七杀'], palaces: ['ming'], classic: '在命宮若限不扶夭折，在官祿得地，化禍為祥。', vernacular: '七殺在命宮，若大限不來扶助，古書說恐夭折；若在官祿得地，則能化禍為祥。', ...CITE_WENDA },
  { topic: 'palace-star', stars: ['七殺', '七杀'], palaces: ['guanlu'], classic: '在官祿得地，化禍為祥。', vernacular: '七殺在官祿得地，古書說能把禍轉成權與功。', ...CITE_WENDA },
  { topic: 'palace-star', stars: ['七殺', '七杀'], palaces: ['zinv'], classic: '在子息，而子息孤單。', vernacular: '七殺在子女宮，古書說子息緣薄、孤單。', ...CITE_WENDA },
  { topic: 'palace-star', stars: ['七殺', '七杀'], palaces: ['qizi'], classic: '居夫婦而鴛衾半冷。', vernacular: '七殺在夫妻宮，古書說情感易冷、伴侶緣不圓。', ...CITE_WENDA },
  { topic: 'palace-star', stars: ['紫微'], palaces: ['ming', 'guanlu'], classic: '若居官祿身命，三宮最要左右守衛。', vernacular: '紫微守命或官祿，古書最重左輔右弼同宮或拱照。', ...CITE_WENDA },
  { topic: 'palace-star', stars: ['紫微'], palaces: ['caibo', 'tianzhai'], classic: '財帛田宅有左右守衛，又與太陰武曲同度，不見惡星，必為財賦之官。', vernacular: '紫微在財帛或田宅，若有輔弼，又見太陰、武曲而無惡星，古書以財賦之官比喻。', ...CITE_WENDA },
  { topic: 'palace-star', stars: ['紫微'], palaces: ['zinv'], classic: '男女宮得祥佐吉星，主生貴子。若獨守無相佐，則子息孤單。', vernacular: '紫微在子女宮，有吉星相佐主貴子；獨守無輔則子息孤單。', ...CITE_WENDA },
  { topic: 'palace-star', stars: ['紫微'], palaces: ['qizi'], classic: '妻宮會吉，男女得貴美夫婦諧老，亦要無破殺。', vernacular: '紫微在夫妻宮會吉，古書說夫婦可諧老，但不能見破軍、七殺沖破。', ...CITE_WENDA },
  { topic: 'palace-star', stars: ['紫微'], palaces: ['qianyi'], classic: '遷移雖是強宮，更要相佐，有吉星照命，則因人之貴。', vernacular: '紫微在遷移是強宮，仍要有輔佐；有吉星照命，古書說能因人而貴。', ...CITE_WENDA },
  { topic: 'palace-star', stars: ['紫微'], palaces: ['fude'], classic: '福德男為陷地，女為廟樂，逢吉則吉，逢凶則凶。', vernacular: '紫微在福德，男命多作陷地看，女命較宜；仍是逢吉則吉、逢凶則凶。', ...CITE_WENDA },
  { topic: 'palace-star', stars: ['紫微'], palaces: ['jie', 'xiongdi', 'jiaoyou'], classic: '如落疾厄、兄弟、奴僕、相貌、四陷宮，主人勞碌作事無成，雖得助亦不為福。', vernacular: '紫微落入疾厄、兄弟、奴僕等弱宮，古書說勞碌少成，即使有助也不算福。', ...CITE_WENDA },
  { topic: 'palace-star', stars: ['太陽', '太阳'], palaces: ['guanlu'], classic: '後化貴化祿，最宜在官祿宮。', vernacular: '太陽最宜在官祿宮，古書說能化貴、化祿。', ...CITE_WENDA },
  { topic: 'palace-star', stars: ['太陽', '太阳'], palaces: ['qizi'], classic: '夫妻亦為強宮，男為諸吉聚，可因妻得貴。陷地加殺，傷妻不吉。', vernacular: '太陽在夫妻是強宮，男命吉聚可因妻得貴；若陷地加煞，古書說傷妻不吉。', ...CITE_WENDA },
  { topic: 'palace-star', stars: ['太陽', '太阳'], palaces: ['zinv'], classic: '男女宮得八座，加吉星在廟旺地，主生貴子，權柄不小。', vernacular: '太陽在子女宮，廟旺又見吉星，古書說主貴子、權柄。', ...CITE_WENDA },
  { topic: 'palace-star', stars: ['太陽', '太阳'], palaces: ['caibo'], classic: '若財帛宮於旺地，會吉相助，不怕巨門纏，其富貴綿遠矣！', vernacular: '太陽在財帛得旺又有吉助，即使見巨門，古書仍說富貴較能綿遠。', ...CITE_WENDA },
  { topic: 'palace-star', stars: ['太陽', '太阳'], palaces: ['tianzhai'], classic: '居田宅，得祖父蔭澤。', vernacular: '太陽在田宅宮，古書說能得祖父蔭澤。', ...CITE_WENDA },
  { topic: 'palace-star', stars: ['太陽', '太阳'], palaces: ['qianyi'], classic: '遷移宮其福與身命不同，難招祖業，移根換葉，出祖為家。', vernacular: '太陽在遷移，福與守命不同，古書說難守祖業，多外出成家。', ...CITE_WENDA },
  { topic: 'palace-star', stars: ['太陽', '太阳'], palaces: ['fumu'], classic: '父母宮男子單作父星，有輝則吉，無輝克父。', vernacular: '太陽在父母宮，男命作父星：有輝則吉，失輝古書說克父。', ...CITE_WENDA },
  { topic: 'palace-star', stars: ['武曲'], palaces: ['caibo', 'tianzhai'], classic: '天府、天相為佐貳之星，財帛田宅為專司之所。', vernacular: '武曲專司財帛、田宅，喜天府、天相同宮相助。', ...CITE_WENDA },
  { topic: 'palace-star', stars: ['天梁'], palaces: ['fumu'], classic: '在父母宮則厚重威嚴。', vernacular: '天梁在父母宮，古書說尊長厚重威嚴。', ...CITE_WENDA },
  { topic: 'palace-star', stars: ['天梁'], palaces: ['jiaoyou', 'jie'], classic: '居奴僕、疾厄、相貌作豐餘之論。', vernacular: '天梁在奴僕或疾厄，古書反而作豐餘、有餘裕來看。', ...CITE_WENDA },
  { topic: 'palace-star', stars: ['天相'], palaces: ['guanlu'], classic: '官祿得之則顯榮，帝座合之則爭權。', vernacular: '天相在官祿主顯榮；與紫微同宮，古書說能爭權、佐帝。', ...CITE_WENDA },
  { topic: 'palace-star', stars: ['天相'], palaces: ['ming'], classic: '身命得之而榮耀。', vernacular: '天相在身、命，古書說主榮耀。', ...CITE_WENDA },
  { topic: 'palace-star', stars: ['天相'], palaces: ['zinv'], classic: '子息得之而嗣續昌。', vernacular: '天相在子女宮，古書說嗣續昌盛。', ...CITE_WENDA },
  { topic: 'palace-star', stars: ['天機', '天机'], palaces: ['xiongdi'], classic: '天機兄弟主，南斗正曜星。', vernacular: '天機是兄弟宮主星，主聰明謀略，也看手足緣。', ...CITE_WENDA },
  { topic: 'palace-star', stars: ['天同'], palaces: ['fude', 'ming'], classic: '十二宮中皆曰福，無破定為祥。', vernacular: '天同入廟無破，古書說十二宮皆可作福看。', ...CITE_WENDA },
];

export const FAWEI_PALACE_QUOTES: QuoteRecord[] = [
  { topic: 'fawei-palace', palaces: ['qizi'], classic: '殺臨三位，定然妻子不和。', vernacular: '煞星守夫妻宮（第三位），古書說妻子不和。', needSha: true, ...CITE_FAWEI },
  { topic: 'fawei-palace', palaces: ['xiongdi'], stars: ['巨門', '巨门'], classic: '巨到二宮，必是兄弟無義。', vernacular: '巨門到兄弟宮（第二位），古書說兄弟少義氣。', ...CITE_FAWEI },
  { topic: 'fawei-palace', palaces: ['zinv'], classic: '刑殺守子宮，子難奉老。', vernacular: '刑殺守子女宮，古書說子息難養老。', needSha: true, ...CITE_FAWEI },
  { topic: 'fawei-palace', palaces: ['caibo'], classic: '諸凶照財帛，聚散無常。', vernacular: '諸凶照財帛宮，古書說錢財聚散無常。', needSha: true, ...CITE_FAWEI },
  { topic: 'fawei-palace', palaces: ['jie'], stars: ['擎羊', '陀羅', '陀罗'], classic: '羊陀守疾厄，眼目昏盲。', vernacular: '擎羊、陀羅守疾厄，古書特提眼目昏盲。', ...CITE_FAWEI },
  { topic: 'fawei-palace', palaces: ['qianyi'], stars: ['火星', '鈴星', '铃星'], classic: '火鈴到遷移，長途寂寞。', vernacular: '火星、鈴星到遷移，古書說遠行寂寞、奔波。', ...CITE_FAWEI },
  { topic: 'fawei-palace', palaces: ['jiaoyou'], classic: '惡星應八宮，奴僕無助。', vernacular: '惡星應奴僕宮（第八位），古書說部屬無助。', needSha: true, ...CITE_FAWEI },
  { topic: 'fawei-palace', palaces: ['guanlu'], stars: ['紫微', '天府'], classic: '官祿遇紫府，富而且貴。', vernacular: '官祿宮見紫微、天府，古書說富而且貴。', ...CITE_FAWEI },
  { topic: 'fawei-palace', palaces: ['tianzhai'], stars: ['破軍', '破军'], classic: '田宅遇破軍，先破後成。', vernacular: '田宅宮遇破軍，古書說產業先破後成。', ...CITE_FAWEI },
  { topic: 'fawei-palace', palaces: ['fude'], stars: ['天空', '地劫'], classic: '福德遇空劫，奔走無力。', vernacular: '福德宮遇天空、地劫，古書說奔走而力不從心。', ...CITE_FAWEI },
  { topic: 'fawei-palace', palaces: ['ming'], stars: ['紫微'], classic: '命逢紫微非特壽而且榮。', vernacular: '命宮逢紫微，古書說不僅壽，而且榮。', ...CITE_FAWEI },
];

export const MING_VERSES: QuoteRecord[] = [
  { topic: 'ming-verse', palaces: ['ming'], branches: ['子'], classic: '子宮貪狼殺陰星，機梁相拱福興隆。', vernacular: '命在子：貪狼、七殺、太陰一類，若得天機、天梁相拱，古訣說福可興隆。', ...CITE_DEDI },
  { topic: 'ming-verse', palaces: ['ming'], branches: ['丑'], classic: '丑宮立命日月朝，丙戍生人福祿饒。', vernacular: '命在丑：日月朝拱，古訣以丙、戊生人福祿較饒。', ...CITE_DEDI },
  { topic: 'ming-verse', palaces: ['ming'], branches: ['寅'], classic: '寅宮巨日足豐隆，七殺天梁百事通。', vernacular: '命在寅：巨門、太陽，或七殺、天梁，古訣說能豐隆、百事通。', ...CITE_DEDI },
  { topic: 'ming-verse', palaces: ['ming'], branches: ['卯'], classic: '卯宮機巨武曲逢，辛乙生人福氣隆。', vernacular: '命在卯：天機、巨門、武曲相逢，古訣以辛、乙生人福氣較隆。', ...CITE_DEDI },
  { topic: 'ming-verse', palaces: ['ming'], branches: ['辰'], classic: '辰位機梁坐命宮，天府戍地最盈豐。', vernacular: '命在辰：天機、天梁坐命，天府在戌地，古訣說最盈豐。', ...CITE_DEDI },
  { topic: 'ming-verse', palaces: ['ming'], branches: ['巳'], classic: '巳位天機天相臨，紫府朝垣福更深。', vernacular: '命在巳：天機、天相臨命，再得紫微、天府朝垣，古訣說福更深。', ...CITE_DEDI },
  { topic: 'ming-verse', palaces: ['ming'], branches: ['午'], classic: '午宮紫府太陽同，機梁破殺喜相逢。', vernacular: '命在午：紫微、天府、太陽同宮，天機、天梁與破軍、七殺相逢，古訣作喜看。', ...CITE_DEDI },
  { topic: 'ming-verse', palaces: ['ming'], branches: ['未'], classic: '未宮紫武廉貞同，日月巨門喜相逢。', vernacular: '命在未：紫微、武曲、廉貞同宮，日月、巨門相逢，古訣說男可位至三公、女主福壽。', ...CITE_DEDI },
  { topic: 'ming-verse', palaces: ['ming'], branches: ['申'], classic: '申宮紫帝貞梁同，武曲巨門喜相逢。', vernacular: '命在申：紫微、廉貞、天梁同度，武曲、巨門相逢，古訣以甲、庚、癸人較喜。', ...CITE_DEDI },
  { topic: 'ming-verse', palaces: ['ming'], branches: ['酉'], classic: '酉宮最喜太陰逢，巨日又逢當面沖。', vernacular: '命在酉：最喜太陰，巨門、太陽當面沖，古訣以辛、乙生人為貴格。', ...CITE_DEDI },
  { topic: 'ming-verse', palaces: ['ming'], branches: ['戌', '戍'], classic: '戍宮紫微對沖辰，富而不貴有虛名。', vernacular: '命在戌：紫微對沖辰，古訣說富而不貴、有虛名；再加吉曜權祿，利貿易。', ...CITE_DEDI },
  { topic: 'ming-verse', palaces: ['ming'], branches: ['亥'], classic: '亥宮最喜太陰逢，若人值此福祿隆。', vernacular: '命在亥：最喜太陰，古訣說男女逢之皆稱意，福祿較隆。', ...CITE_DEDI },
];

export function toReadingQuote(record: QuoteRecord) {
  const url = record.bookId
    ? wikiSection(record.wikiHeading)
    : BAIKE_SANFANG;
  return {
    classic: record.classic,
    vernacular: record.vernacular,
    cite: {
      title: record.sourceTitle,
      url,
      bookId: record.bookId || undefined,
    },
  };
}
