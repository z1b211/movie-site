const movies = [
    {
        id: 1,
        title: "鑲栫敵鍏嬬殑鏁戣祹",
        year: 1994,
        rating: 9.7,
        category: "drama",
        description: "甯屾湜鏄編濂界殑浜嬬墿锛屼篃璁告槸鏈€缇庡ソ鐨勶紝鑰岀編濂界殑浜嬬墿姘镐笉娑堥€濄€?,
        detail: "銆婅倴鐢冲厠鐨勬晳璧庛€嬫敼缂栬嚜鏂拏鑺烽噾鐨勫皬璇达紝璁茶堪浜嗛摱琛屽瀹夎开琚啢鏋夊叆鐙卞悗锛屽湪鑲栫敵鍏嬬洃鐙变腑搴﹁繃鐨勫瞾鏈堜互鍙婁粬涓庣嫳鍙嬬憺寰风殑鍙嬭皧銆?,
        image: "https://img2.doubanio.com/view/photo/l/public/p480747496.webp",
        videoUrl: "https://www.youtube.com/embed/6hB3S9bIaco"
    },
    {
        id: 2,
        title: "杈涘痉鍕掔殑鍚嶅崟",
        year: 1993,
        rating: 9.6,
        category: "drama",
        description: "鍦ㄩ粦鏆椾腑闂€€鐨勪汉鎬у厜杈夛紝涓€娈典笉鍙（鐏殑鍘嗗彶璁板繂銆?,
        detail: "銆婅緵寰峰嫆鐨勫悕鍗曘€嬫牴鎹湡瀹炴晠浜嬫敼缂栵紝璁茶堪浜嗗痉鍥藉晢浜哄ゥ鏂崱路杈涘痉鍕掑湪浜屾垬鏈熼棿鎷晳浜嗕笂鍗冨悕鐘瑰お浜虹殑鏁呬簨銆?,
        image: "https://img2.doubanio.com/view/photo/l/public/p510876293.webp",
        videoUrl: "https://www.youtube.com/embed/ttGP8w12340"
    },
    {
        id: 3,
        title: "闃跨敇姝ｄ紶",
        year: 1994,
        rating: 9.5,
        category: "drama",
        description: "浜虹敓灏卞儚涓€鐩掑阀鍏嬪姏锛屼綘姘歌繙涓嶇煡閬撲笅涓€棰楁槸浠€涔堝懗閬撱€?,
        detail: "銆婇樋鐢樻浼犮€嬭杩颁簡涓€涓櫤鍟嗗彧鏈?5鐨勭敺瀛愰樋鐢樼殑浼犲浜虹敓銆備粬铏界劧鏅哄姏鏈夐檺锛屼絾绾磥鍠勮壇锛岃璇佷簡缇庡浗鍘嗗彶涓婄殑璁稿閲嶅ぇ浜嬩欢銆?,
        image: "https://img2.doubanio.com/view/photo/l/public/p1595095481.webp",
        videoUrl: "https://www.youtube.com/embed/bLvqoHBptjg"
    },
    {
        id: 4,
        title: "鍗冧笌鍗冨",
        year: 2001,
        rating: 9.4,
        category: "animation",
        description: "瀹磶楠忕殑濂囧够涓栫晫锛屽叧浜庢垚闀夸笌鍕囨皵鐨勬案鎭掑瘬瑷€銆?,
        detail: "銆婂崈涓庡崈瀵汇€嬫槸瀹磶楠忕殑缁忓吀鍔ㄧ敾锛岃杩颁簡涓€涓皬濂冲鍗冨鍦ㄧ鐏典笘鐣岀殑鍐掗櫓锛屽ス蹇呴』宸ヤ綔鎵嶈兘鎷晳鑷繁鍙樻垚鐚殑鐖舵瘝銆?,
        image: "https://img2.doubanio.com/view/photo/l/public/p1292268537.webp",
        videoUrl: "https://www.youtube.com/embed/ByXuk9QqQkk"
    },
    {
        id: 5,
        title: "鏄熼檯绌胯秺",
        year: 2014,
        rating: 9.4,
        category: "popular",
        description: "绌胯秺铏礊锛岃法瓒婃椂绌猴紝涓轰汉绫诲鎵炬柊瀹跺洯鐨勫．涓藉彶璇椼€?,
        detail: "銆婃槦闄呯┛瓒娿€嬫槸璇哄叞鐨勭骞诲法浣滐紝璁茶堪浜嗗湪鏈潵鍦扮悆鍗冲皢姣佺伃鏃讹紝涓€缇ゆ帰闄╁绌胯秺铏礊瀵绘壘浜虹被鏂板鍥殑鏁呬簨銆?,
        image: "https://img2.doubanio.com/view/photo/l/public/p2206088801.webp",
        videoUrl: "https://www.youtube.com/embed/zSWdZVtXT7E"
    },
    {
        id: 6,
        title: "鐩楁ⅵ绌洪棿",
        year: 2010,
        rating: 9.3,
        category: "popular",
        description: "鍦ㄦⅵ澧冧笌鐜板疄涔嬮棿绌挎锛屼竴鍦哄叧浜庢剰璇嗕笌娼滄剰璇嗙殑缁堟瀬鎺㈢储銆?,
        detail: "銆婄洍姊︾┖闂淬€嬫槸鍏嬮噷鏂墭寮椔疯鍏版墽瀵肩殑绉戝够鎮枒鐗囷紝璁茶堪浜嗕竴缇ょ獌璐奸€氳繃杩涘叆鐩爣鐨勬ⅵ澧冩潵绐冨彇鍟嗕笟鏈哄瘑鐨勬晠浜嬨€?,
        image: "https://img2.doubanio.com/view/photo/l/public/p545232597.webp",
        videoUrl: "https://www.youtube.com/embed/8hP9D6kZseM"
    },
    {
        id: 7,
        title: "娉板潶灏煎厠鍙?,
        year: 1997,
        rating: 9.4,
        category: "popular",
        description: "璺ㄨ秺鐢熸鐨勬椃涓栫埍鎭嬶紝缁忓吀姘镐笉钀藉箷銆?,
        detail: "銆婃嘲鍧﹀凹鍏嬪彿銆嬭杩颁簡1912骞存嘲鍧﹀凹鍏嬪彿棣栬埅鏃讹紝涓嶅悓闃跺眰鐨勬澃鍏嬪拰缃椾笣涔嬮棿鐨勭埍鎯呮晠浜嬨€?,
        image: "https://img2.doubanio.com/view/photo/l/public/p2599802666.webp",
        videoUrl: "https://www.youtube.com/embed/kVrqfYjkTdQ"
    },
    {
        id: 8,
        title: "鏈哄櫒浜烘€诲姩鍛?,
        year: 2008,
        rating: 9.3,
        category: "animation",
        description: "鏈棩鏄熺悆涓婏紝涓や釜鏈哄櫒浜虹殑绾补鐖辨亱涓庡啋闄┿€?,
        detail: "銆婃満鍣ㄤ汉鎬诲姩鍛樸€嬭杩颁簡鍦ㄦ湭鏉ュ湴鐞冭鍨冨溇瑕嗙洊鏃讹紝娓呮壂鏈哄櫒浜虹摝鍔涗笌鍏堣繘鏈哄櫒浜轰紛濞冧箣闂寸殑鐖辨儏鏁呬簨銆?,
        image: "https://img2.doubanio.com/view/photo/l/public/p2360230666.webp",
        videoUrl: "https://www.youtube.com/embed/CZ1CATNbXg0"
    },
    {
        id: 9,
        title: "瀵绘ⅵ鐜父璁?,
        year: 2017,
        rating: 9.1,
        category: "animation",
        description: "鍦ㄤ骸鐏典笘鐣屽鎵捐蹇嗕笌浜叉儏锛屾俯鏆栦汉蹇冪殑鍔ㄧ敾缁忓吀銆?,
        detail: "銆婂姊︾幆娓歌銆嬫槸鐨厠鏂殑鍔ㄧ敾鐢靛奖锛岃杩颁簡涓€涓ⅷ瑗垮摜灏忕敺瀛╁湪浜＄伒鑺傛湡闂磋繘鍏ヤ骸鐏典笘鐣岋紝瀵绘壘浠栨浘鏇剧鐖剁殑鏁呬簨銆?,
        image: "https://img2.doubanio.com/view/photo/l/public/p2509456121.webp",
        videoUrl: "https://www.youtube.com/embed/5ZlNB9G17q0"
    },
    {
        id: 10,
        title: "浣犵殑鍚嶅瓧",
        year: 2016,
        rating: 9.1,
        category: "animation",
        description: "璺ㄨ秺鏃剁┖鐨勫懡杩愪箣鎭嬶紝鏂版捣璇氱殑瑙嗚鐩涘銆?,
        detail: "銆婁綘鐨勫悕瀛椼€嬫槸鏂版捣璇氱殑鍔ㄧ敾鐢靛奖锛岃杩颁簡涓や釜浠庢湭瑙侀潰鐨勯珮涓敓寮€濮嬩氦鎹㈣韩浣擄紝浠栦滑閫愭笎浜х敓浜嗚仈绯诲苟瀵绘壘褰兼鐨勬晠浜嬨€?,
        image: "https://img2.doubanio.com/view/photo/l/public/p2320974461.webp",
        videoUrl: "https://www.youtube.com/embed/xUiy9VvR2Pk"
    },
    {
        id: 11,
        title: "灏忎笐",
        year: 2019,
        rating: 8.8,
        category: "drama",
        description: "琚敓娲婚€煎叆缁濆鐨勬櫘閫氫汉锛屼竴姝ユ璧板悜榛戞殫銆?,
        detail: "銆婂皬涓戙€嬭杩颁簡涓€涓偅鏈夌簿绁炵柧鐥呯殑鍠滃墽婕斿憳鍦ㄧぞ浼氱殑鎺掓枼涓嬮€愭笎鍫曡惤鎴愪负鍙嶆淳鐨勬晠浜嬨€?,
        image: "https://img2.doubanio.com/view/photo/l/public/p2590441622.webp",
        videoUrl: "https://www.youtube.com/embed/zAGVQLHvwOY"
    },
    {
        id: 12,
        title: "瀵勭敓铏?,
        year: 2019,
        rating: 8.8,
        category: "popular",
        description: "璐瘜宸窛涓嬬殑榛戣壊瀵撹█锛屽ゥ鏂崱鏈€浣冲奖鐗囩殑闇囨捈涔嬩綔銆?,
        detail: "銆婂瘎鐢熻櫕銆嬫槸闊╁浗瀵兼紨濂変繆鏄婄殑浣滃搧锛岃杩颁簡涓€涓传鍥板搴€愭笎娓楅€忓埌涓€涓瘜瑁曞搴敓娲讳腑鐨勬晠浜嬨€?,
        image: "https://img2.doubanio.com/view/photo/l/public/p2561308671.webp",
        videoUrl: "https://www.youtube.com/embed/5xH0HfODajM"
    },
    {
        id: 13,
        title: "鐤媯鐨勯害鍏嬫柉",
        year: 2015,
        rating: 8.7,
        category: "fantasy",
        description: "鏈棩鑽掗噹涓殑鐙傞涔嬫梾锛屽叏绋嬮珮鑳界殑鍔ㄤ綔澶х墖銆?,
        detail: "銆婄柉鐙傜殑楹﹀厠鏂€嬭杩颁簡鍦ㄦ湯鏃ュ簾鍦熶腑锛岄害鍏嬫柉涓庡紬鐟炲ゥ钀ㄤ竴璧烽€冪鏆村悰缁熸不鐨勬晠浜嬨€?,
        image: "https://img2.doubanio.com/view/photo/l/public/p2216302828.webp",
        videoUrl: "https://www.youtube.com/embed/hEJnMQG9ev8"
    },
    {
        id: 14,
        title: "鏁﹀埢灏斿厠",
        year: 2017,
        rating: 8.4,
        category: "popular",
        description: "浜屾垬缁忓吀鎾ら€€鎴樺焦锛屾捣闄嗙┖涓夌嚎浜ょ粐鐨勬眰鐢熸晠浜嬨€?,
        detail: "銆婃暒鍒诲皵鍏嬨€嬫槸璇哄叞鎵у鐨勬垬浜夌墖锛岃杩颁簡浜屾垬鏈熼棿鐩熷啗鍦ㄦ暒鍒诲皵鍏嬫捣婊╂挙閫€鐨勬晠浜嬨€?,
        image: "https://img2.doubanio.com/view/photo/l/public/p2499026861.webp",
        videoUrl: "https://www.youtube.com/embed/DKeaonKujrM"
    },
    {
        id: 15,
        title: "鏁欑埗",
        year: 1972,
        rating: 9.4,
        category: "drama",
        description: "榛戝府鍙茶瘲锛岃癄閲婂鏃忋€佹潈鍔涗笌浜烘€х殑缁忓吀涔嬩綔銆?,
        detail: "銆婃暀鐖躲€嬫槸寮楁湕瑗挎柉路绂忕壒路绉戞尝鎷夋墽瀵肩殑缁忓吀榛戝府鐗囷紝璁茶堪浜嗘煰閲屾槀瀹舵棌鐨勬晠浜嬨€?,
        image: "https://img2.doubanio.com/view/photo/l/public/p2368909577.webp",
        videoUrl: "https://www.youtube.com/embed/UaVTIH8mujA"
    },
    {
        id: 16,
        title: "鏁欑埗2",
        year: 1974,
        rating: 9.2,
        category: "drama",
        description: "寤剁画瀹舵棌浼犲锛岃杩颁袱浠ｆ暀鐖剁殑娌夋诞浜虹敓銆?,
        detail: "銆婃暀鐖?銆嬪悓鏃惰杩颁簡缁村路鏌噷鏄傜殑宕涜捣鍜屼粬鍎垮瓙杩堝厠灏旂殑鏁呬簨銆?,
        image: "https://img2.doubanio.com/view/photo/l/public/p2368909580.webp",
        videoUrl: "https://www.youtube.com/embed/8KPK_XbK6k8"
    },
    {
        id: 17,
        title: "榛戞殫楠戝＋",
        year: 2008,
        rating: 9.2,
        category: "fantasy",
        description: "铦欒潬渚犱笌灏忎笐鐨勫穮宄板鍐筹紝瓒呯骇鑻遍泟鐢靛奖鐨勬爣鏉嗐€?,
        detail: "銆婇粦鏆楅獞澹€嬭杩颁簡铦欒潬渚犮€佹垐鐧诲拰鏂颁换妫€瀵熷畼涓庣姜鐘皬涓戜箣闂寸殑鏂椾簤銆?,
        image: "https://img2.doubanio.com/view/photo/l/public/p2359042644.webp",
        videoUrl: "https://www.youtube.com/embed/EXeTwQWrcwY"
    },
    {
        id: 18,
        title: "鎸囩幆鐜?",
        year: 2003,
        rating: 9.3,
        category: "fantasy",
        description: "涓湡涓栫晫缁堟瀬鍐虫垬锛屽彶璇楁晠浜嬭繋鏉ュ渾婊¤惤骞曘€?,
        detail: "銆婃寚鐜帇3锛氱帇鑰呮棤鏁屻€嬭杩颁簡鎶ゆ垝闃熸渶鍚庣殑鍐虫垬锛屼經缃楀涓庡北濮嗗畬鎴愪娇鍛界殑鏁呬簨銆?,
        image: "https://img2.doubanio.com/view/photo/l/public/p2342049817.webp",
        videoUrl: "https://www.youtube.com/embed/ddwc9876YmY"
    },
    {
        id: 19,
        title: "鎸囩幆鐜?",
        year: 2001,
        rating: 9.1,
        category: "fantasy",
        description: "鎶ゆ垝灏忛槦韪忎笂寰侀€旓紝寮€鍚畯澶х殑涓湡鍐掗櫓銆?,
        detail: "銆婃寚鐜帇1锛氭姢鎴掍娇鑰呫€嬭杩颁簡浣涚綏澶氳幏寰楄嚦灏婇瓟鎴掑悗锛屼笌浼欎即浠竴璧疯笍涓婃瘉鐏瓟鎴掔殑鏃呯▼銆?,
        image: "https://img2.doubanio.com/view/photo/l/public/p2341945188.webp",
        videoUrl: "https://www.youtube.com/embed/V7dH4x2a77g"
    },
    {
        id: 20,
        title: "鍝堝埄娉㈢壒1",
        year: 2001,
        rating: 9.2,
        category: "fantasy",
        description: "榄旀硶涓栫晫鐨勫ぇ闂ㄥ凡缁忔墦寮€锛屼竴娈靛叧浜庢垚闀夸笌鍕囨皵鐨勪紶濂囥€?,
        detail: "銆婂搱鍒┞锋尝鐗逛笌榄旀硶鐭炽€嬭杩颁簡瀛ゅ効鍝堝埄路娉㈢壒杩涘叆闇嶆牸娌冭尐榄旀硶瀛︽牎瀛︿範鐨勬晠浜嬨€?,
        image: "https://img2.doubanio.com/view/photo/l/public/p2340934417.webp",
        videoUrl: "https://www.youtube.com/embed/VyHV0BRtdxo"
    },
    {
        id: 21,
        title: "澶嶄粐鑰呰仈鐩?",
        year: 2019,
        rating: 8.5,
        category: "fantasy",
        description: "鍒濅唬澶嶄粐鑰呯粓绔狅紝鑻遍泟闆嗙粨閫嗚浆鎴樺眬銆?,
        detail: "銆婂浠囪€呰仈鐩?锛氱粓灞€涔嬫垬銆嬭杩颁簡澶嶄粐鑰呬滑鍦ㄧ伃闇稿搷鎸囧悗锛岄泦鍚堝姏閲忛€嗚浆涓€鍒囩殑鏁呬簨銆?,
        image: "https://img2.doubanio.com/view/photo/l/public/p2559697118.webp",
        videoUrl: "https://www.youtube.com/embed/gNgdBe-xhU4"
    },
    {
        id: 22,
        title: "铚樿洓渚狅細骞宠瀹囧畽",
        year: 2018,
        rating: 8.5,
        category: "animation",
        description: "澶氫釜铚樿洓渚犺法娆″厓鐩搁亣锛岀敾椋庢瀬鍏峰垱鎰忕殑鍔ㄧ敾浣充綔銆?,
        detail: "銆婅湗铔涗緺锛氬钩琛屽畤瀹欍€嬭杩颁簡杩堝皵鏂垚涓鸿湗铔涗緺鍚庯紝涓庡涓畤瀹欑殑铚樿洓渚犵浉閬囩殑鏁呬簨銆?,
        image: "https://img2.doubanio.com/view/photo/l/public/p2536681664.webp",
        videoUrl: "https://www.youtube.com/embed/shW9i6k8cB0"
    },
    {
        id: 23,
        title: "椋炲眿鐜父璁?,
        year: 2009,
        rating: 9.1,
        category: "animation",
        description: "甯︾潃姊︽兂涓庡洖蹇嗭紝椋炲悜鏈煡鐨勪粰澧冪€戝竷銆?,
        detail: "銆婇灞嬬幆娓歌銆嬭杩颁簡鑰佷汉鍗″皵甯︾潃鎴垮瓙椋炲悜鍐掗櫓锛屼笌灏忕敺瀛╃綏绱犱竴璧风粡鍘嗙殑鏁呬簨銆?,
        image: "https://img2.doubanio.com/view/photo/l/public/p2341945190.webp",
        videoUrl: "https://www.youtube.com/embed/FbXqHTR5SCc"
    },
    {
        id: 24,
        title: "澶╃┖涔嬪煄",
        year: 1986,
        rating: 9.2,
        category: "animation",
        description: "浜戠涔嬩笂鐨勭绉橀兘甯傦紝绾湡涓庡啋闄╀氦缁囩殑缁忓吀鍔ㄧ敾銆?,
        detail: "銆婂ぉ绌轰箣鍩庛€嬫槸瀹磶楠忕殑缁忓吀鍔ㄧ敾锛岃杩颁簡灏戝コ甯岃揪涓庣敺瀛╁反椴佷竴璧峰鎵惧ぉ绌轰箣鍩庢媺鏅揪鐨勫啋闄╂晠浜嬨€?,
        image: "https://img2.doubanio.com/view/photo/l/public/p1356641307.webp",
        videoUrl: "https://www.youtube.com/embed/4cYl0c87L7c"
    }
];

let currentCategory = 'all';
let currentSort = 'rating-desc';
let searchQuery = '';
let currentLightboxIndex = 0;
let lightboxImages = [];

function loadStorage() {
    const favorites = JSON.parse(localStorage.getItem('movieFavorites')) || {};
    const likes = JSON.parse(localStorage.getItem('movieLikes')) || {};
    const comments = JSON.parse(localStorage.getItem('movieComments')) || {};
    return { favorites, likes, comments };
}

function saveStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

let { favorites, likes, comments } = loadStorage();

function filterAndSortMovies() {
    let filtered = [...movies];
    
    if (currentCategory !== 'all') {
        filtered = filtered.filter(m => m.category === currentCategory);
    }
    
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(m => 
            m.title.toLowerCase().includes(query) || 
            m.description.toLowerCase().includes(query)
        );
    }
    
    const [sortField, sortDir] = currentSort.split('-');
    filtered.sort((a, b) => {
        let valA = a[sortField];
        let valB = b[sortField];
        if (typeof valA === 'string') {
            valA = valA.toLowerCase();
            valB = valB.toLowerCase();
        }
        if (sortDir === 'asc') {
            return valA > valB ? 1 : -1;
        } else {
            return valA < valB ? 1 : -1;
        }
    });
    
    return filtered;
}

function renderMovies() {
    const grid = document.getElementById('moviesGrid');
    const loading = document.getElementById('loading');
    
    loading.style.display = 'block';
    grid.innerHTML = '';
    
    setTimeout(() => {
        const filtered = filterAndSortMovies();
        loading.style.display = 'none';
        
        if (filtered.length === 0) {
            grid.innerHTML = '<p style="text-align:center;grid-column:1/-1;padding:60px;color:var(--text-muted)">娌℃湁鎵惧埌鐩稿叧鐢靛奖</p>';
            return;
        }
        
        lightboxImages = filtered.map(m => m.image);
        filtered.forEach((movie, index) => {
            const card = document.createElement('div');
            card.className = 'movie-card';
            card.dataset.id = movie.id;
            card.dataset.index = index;
            
            const isFavorite = favorites[movie.id];
            const isLiked = likes[movie.id];
            
            card.innerHTML = `
                <div class="movie-image-container">
                    <img src="${movie.image}" alt="${movie.title}" class="movie-img" loading="lazy" onerror="this.style.background='var(--bg-secondary)'">
                    <div class="movie-overlay">
                        <span>鐐瑰嚮鏌ョ湅璇︽儏</span>
                    </div>
                </div>
                <div class="movie-info">
                    <h3 class="movie-title">${movie.title}</h3>
                    <div class="movie-meta">
                        <span>${movie.year}</span>
                        <span class="movie-rating">猸?${movie.rating}</span>
                    </div>
                    <p class="movie-description">${movie.description}</p>
                    <div class="movie-actions">
                        <button class="action-btn like-btn ${isLiked ? 'active' : ''}" data-id="${movie.id}">
                            馃憤 ${isLiked ? '宸茶禐' : '鐐硅禐'}
                        </button>
                        <button class="action-btn fav-btn ${isFavorite ? 'favorited' : ''}" data-id="${movie.id}">
                            鉂わ笍 ${isFavorite ? '宸叉敹钘? : '鏀惰棌'}
                        </button>
                        <button class="action-btn share-btn" data-id="${movie.id}">
                            馃敆 鍒嗕韩
                        </button>
                    </div>
                </div>
            `;
            
            grid.appendChild(card);
            
            setTimeout(() => card.classList.add('visible'), index * 100);
        });
        
        addCardEventListeners();
    }, 300);
}

function addCardEventListeners() {
    document.querySelectorAll('.movie-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.action-btn')) {
                const movieId = parseInt(card.dataset.id);
                showMovieDetail(movieId);
            }
        });
        
        const img = card.querySelector('.movie-img');
        img.addEventListener('click', (e) => {
            e.stopPropagation();
            currentLightboxIndex = parseInt(card.dataset.index);
            openLightbox();
        });
    });
    
    document.querySelectorAll('.like-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            likes[id] = !likes[id];
            saveStorage('movieLikes', likes);
            renderMovies();
        });
    });
    
    document.querySelectorAll('.fav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            favorites[id] = !favorites[id];
            saveStorage('movieFavorites', favorites);
            renderMovies();
        });
    });
    
    document.querySelectorAll('.share-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            const movie = movies.find(m => m.id === id);
            const url = `${window.location.origin}${window.location.pathname}player.html?id=${id}`;
            if (navigator.share) {
                navigator.share({
                    title: movie.title,
                    text: movie.description,
                    url: url
                });
            } else {
                navigator.clipboard.writeText(url);
                alert('閾炬帴宸插鍒跺埌鍓创鏉匡紒');
            }
        });
    });
}

function showMovieDetail(movieId) {
    const movie = movies.find(m => m.id === movieId);
    const modal = document.getElementById('detailModal');
    const modalBody = modal.querySelector('.modal-body');
    const movieComments = comments[movie.id] || [];
        
        modalBody.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}" class="modal-image" loading="lazy" onerror="this.style.background='var(--bg-secondary)'">
        <h2>${movie.title}</h2>
        <div class="movie-meta">
            <span>${movie.year}</span>
            <span class="movie-rating">猸?${movie.rating}</span>
        </div>
        <p style="margin: 20px 0; line-height: 1.8;">${movie.detail}</p>
        <button id="watchBtn" style="display: inline-block; padding: 15px 40px; background: #00be06; color: white; border: none; border-radius: 30px; font-size: 1.1rem; font-weight: 600; cursor: pointer; transition: all 0.3s ease; margin: 20px 0;">鈻?绔嬪嵆瑙傜湅</button>
        <div style="margin-top: 30px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 20px;">
            <h3>馃挰 璇勮 (${movieComments.length})</h3>
            <div style="margin: 15px 0;">
                <input type="text" id="commentInput" placeholder="鍐欎笅浣犵殑璇勮..." style="width: 100%; padding: 12px; border: 1px solid var(--card-bg); border-radius: 8px; margin-bottom: 10px; background: var(--bg-secondary); color: var(--text-color);">
                <button id="submitComment" style="padding: 12px 25px; background: var(--primary-color); color: white; border: none; border-radius: 8px; cursor: pointer;">鍙戣〃璇勮</button>
            </div>
            <div id="commentsList">
                ${movieComments.map(c => `<div style="padding: 12px; background: var(--bg-secondary); border-radius: 8px; margin-bottom: 10px;">${c}</div>`).join('')}
            </div>
        </div>
    `;
    
    modal.classList.add('show');
    
    document.getElementById('watchBtn').addEventListener('click', () => {
        const iqiyiUrl = `https://so.iqiyi.com/so/q_${encodeURIComponent(movie.title)}`;
        window.open(iqiyiUrl, '_blank');
    });
    
    document.getElementById('submitComment').addEventListener('click', () => {
        const input = document.getElementById('commentInput');
        const text = input.value.trim();
        if (text) {
            if (!comments[movie.id]) comments[movie.id] = [];
            comments[movie.id].push(text);
            saveStorage('movieComments', comments);
            showMovieDetail(movie.id);
        }
    });
}

function openLightbox() {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightboxImg');
    img.src = lightboxImages[currentLightboxIndex];
    lightbox.classList.add('show');
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('show');
}

function navigateLightbox(direction) {
    currentLightboxIndex += direction;
    if (currentLightboxIndex < 0) currentLightboxIndex = lightboxImages.length - 1;
    if (currentLightboxIndex >= lightboxImages.length) currentLightboxIndex = 0;
    document.getElementById('lightboxImg').src = lightboxImages[currentLightboxIndex];
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            currentCategory = link.dataset.category;
            renderMovies();
        });
    });
    
    document.getElementById('searchBtn').addEventListener('click', () => {
        searchQuery = document.getElementById('searchInput').value;
        renderMovies();
    });
    
    document.getElementById('searchInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchQuery = e.target.value;
            renderMovies();
        }
    });
    
    document.getElementById('sortSelect').addEventListener('change', (e) => {
        currentSort = e.target.value;
        renderMovies();
    });
    
    document.querySelector('.close-btn').addEventListener('click', () => {
        document.getElementById('detailModal').classList.remove('show');
    });
    
    document.getElementById('detailModal').addEventListener('click', (e) => {
        if (e.target.id === 'detailModal') {
            document.getElementById('detailModal').classList.remove('show');
        }
    });
    
    document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    
    document.getElementById('lightbox').addEventListener('click', (e) => {
        if (e.target.id === 'lightbox') {
            closeLightbox();
        }
    });
    
    document.getElementById('prevBtn').addEventListener('click', () => navigateLightbox(-1));
    document.getElementById('nextBtn').addEventListener('click', () => navigateLightbox(1));
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.getElementById('detailModal').classList.remove('show');
            closeLightbox();
        }
    });
    
    renderMovies();
});
