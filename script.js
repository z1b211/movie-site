const movies = [
    {
        id: 1,
        title: "肖申克的救赎",
        year: 1994,
        rating: 9.7,
        director: "弗兰克·德拉邦特",
        actors: "蒂姆·罗宾斯 / 摩根·弗里曼",
        category: "drama",
        description: "希望是美好的事物，也许是最美好的，而美好的事物永不消逝。",
        detail: "导演：弗兰克·德拉邦特\n主演：蒂姆·罗宾斯 / 摩根·弗里曼\n\n20世纪40年代末，小有成就的青年银行家安迪因涉嫌杀害妻子及其情人而锒铛入狱。在这座名为肖申克的监狱内，希望似乎虚无缥缈，终身监禁的惩罚无疑注定了安迪接下来灰暗绝望的人生。未过多久，安迪尝试接近囚犯中颇有声望的瑞德，请求对方帮自己搞来小锤子。以此为契机，二人逐渐熟稔，安迪也仿佛在鱼龙混杂、罪恶横生、黑白混淆的牢狱中找到属于自己的求生之道。他利用自身的专业知识，帮助监狱管理层逃税、洗黑钱，同时凭借与瑞德的交往在犯人中间也渐渐受到礼遇。表面看来，他已如瑞德那样对那堵高墙从憎恨转变为处之泰然，但是对自由的渴望仍促使他朝着心中的希望和目标前进。",
        posterUrl: "https://image.tmdb.org/t/p/w500/9O7gLzmreU0nGkI316yBngB9lC.jpg",
        videoUrl: "https://www.youtube.com/embed/6hB3S9bIaco"
    },
    {
        id: 2,
        title: "辛德勒的名单",
        year: 1993,
        rating: 9.6,
        director: "史蒂文·斯皮尔伯格",
        actors: "连姆·尼森 / 本·金斯利",
        category: "drama",
        description: "在黑暗中闪耀的人性光辉，一段不可磨灭的历史记忆。",
        detail: "导演：史蒂文·斯皮尔伯格\n主演：连姆·尼森 / 本·金斯利 / 拉尔夫·费因斯\n\n1939年，波兰在纳粹德国的统治下，党卫军对犹太人进行了隔离统治。德国商人奥斯卡·辛德勒来到德军统治下的克拉科夫，开设了一间搪瓷厂，生产军需用品。他雇佣犹太人工作，大发战争财。1943年，克拉科夫的犹太人遭到了惨绝人寰的大屠杀，辛德勒目睹这一切，受到了极大的震撼，他贿赂军官，让自己的工厂成为犹太人的避难所。在战争接近尾声时，纳粹对犹太人进行了疯狂的屠杀，辛德勒倾家荡产买下了1200名犹太人的生命。",
        posterUrl: "https://image.tmdb.org/t/p/w500/onSrc3DnyRwXrC1e65zD8j1WnWz.jpg",
        videoUrl: "https://www.youtube.com/embed/ttGP8w12340"
    },
    {
        id: 3,
        title: "阿甘正传",
        year: 1994,
        rating: 9.5,
        director: "罗伯特·泽米吉斯",
        actors: "汤姆·汉克斯 / 罗宾·怀特",
        category: "drama",
        description: "人生就像一盒巧克力，你永远不知道下一颗是什么味道。",
        detail: "导演：罗伯特·泽米吉斯\n主演：汤姆·汉克斯 / 罗宾·怀特 / 加里·西尼斯\n\n阿甘是个智商只有75的低能儿。在学校里为了躲避别的孩子的欺侮，听从一个朋友珍妮的话而开始"跑"。他跑着躲避别人的捉弄。在中学时，他为了躲避别人而跑进了一所学校的橄榄球场，就这样跑进了大学。阿甘被破格录取，并成了橄榄球巨星，受到了肯尼迪总统的接见。在大学毕业后，阿甘又应征入伍去了越南。在那里，他有了两个朋友：热衷捕虾的布巴和令人敬畏的长官邓·泰勒上尉。战争结束后，阿甘作为英雄受到了约翰逊总统的接见。",
        posterUrl: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
        videoUrl: "https://www.youtube.com/embed/bLvqoHBptjg"
    },
    {
        id: 4,
        title: "千与千寻",
        year: 2001,
        rating: 9.4,
        director: "宫崎骏",
        actors: "柊瑠美 / 入野自由",
        category: "animation",
        description: "宫崎骏的奇幻世界，关于成长与勇气的永恒寓言。",
        detail: "导演：宫崎骏\n配音：柊瑠美 / 入野自由 / 夏木真理\n\n千寻和爸爸妈妈一起驱车前往新家，在郊外的小路上不慎进入了神秘的隧道——他们去到了另外一个诡异世界——一个中世纪的小镇。远处飘来食物的香味，爸爸妈妈大快朵颐，孰料之后变成了猪！这时小镇上渐渐来了许多样子古怪、半透明的人。千寻仓皇逃出，一个叫小白的人救了她，喂了她阻止身体消失的药，并且告诉她怎样去找锅炉爷爷以及汤婆婆，而且必须获得一份工作才能不被变成动物。",
        posterUrl: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
        videoUrl: "https://www.youtube.com/embed/ByXuk9QqQkk"
    },
    {
        id: 5,
        title: "星际穿越",
        year: 2014,
        rating: 9.4,
        director: "克里斯托弗·诺兰",
        actors: "马修·麦康纳 / 安妮·海瑟薇",
        category: "popular",
        description: "穿越虫洞，跨越时空，为人类寻找新家园的壮丽史诗。",
        detail: "导演：克里斯托弗·诺兰\n主演：马修·麦康纳 / 安妮·海瑟薇 / 杰西卡·查斯坦\n\n在不远的未来，地球气候已经不适合人类生存。一队探险队员承担起人类历史上最重要的任务：穿越虫洞，去寻找适合人类居住的新家园。前宇航员库珀与其他三名专家队员踏上了这个冒险之旅。在浩瀚的宇宙中，他们经历了虫洞、黑洞等神奇的天体，也面临着时间膨胀、引力异常等前所未有的挑战。库珀必须在对女儿的爱和人类的未来之间做出艰难的抉择。",
        posterUrl: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        videoUrl: "https://www.youtube.com/embed/zSWdZVtXT7E"
    },
    {
        id: 6,
        title: "盗梦空间",
        year: 2010,
        rating: 9.3,
        director: "克里斯托弗·诺兰",
        actors: "莱昂纳多·迪卡普里奥 / 约瑟夫·高登-莱维特",
        category: "popular",
        description: "在梦境与现实之间穿梭，一场关于意识与潜意识的终极探索。",
        detail: "导演：克里斯托弗·诺兰\n主演：莱昂纳多·迪卡普里奥 / 约瑟夫·高登-莱维特 / 艾伦·佩吉\n\n道姆·柯布是一名专门从事意识深层盗窃的高手，他能够潜入目标的梦境中窃取机密。但他也因此成为国际通缉犯，无法回到自己的孩子身边。一个神秘的商人找到柯布，提出一个不可能的任务：在目标的潜意识中植入一个想法，而不是窃取。为了完成这个任务，柯布组建了一支团队，深入多层梦境。每一层梦境都有不同的时间流速和危险。",
        posterUrl: "https://image.tmdb.org/t/p/w500/89W962aAnPS3N3BdKgy2BvUhnCh.jpg",
        videoUrl: "https://www.youtube.com/embed/8hP9D6kZseM"
    },
    {
        id: 7,
        title: "泰坦尼克号",
        year: 1997,
        rating: 9.4,
        director: "詹姆斯·卡梅隆",
        actors: "莱昂纳多·迪卡普里奥 / 凯特·温丝莱特",
        category: "popular",
        description: "跨越生死的旷世爱恋，经典永不落幕。",
        detail: "导演：詹姆斯·卡梅隆\n主演：莱昂纳多·迪卡普里奥 / 凯特·温丝莱特 / 比利·赞恩\n\n1912年4月10日，被誉为"世界工业史上的奇迹"的豪华客轮泰坦尼克号开始了它的处女航，从英国的南安普顿出发驶往美国纽约。富家少女露丝与母亲及未婚夫卡尔坐上了头等舱；另一边，放荡不羁的少年画家杰克也在码头的一场赌博中赢得了下等舱的船票。露丝对上流社会的虚伪生活感到厌倦，准备投海自尽，被杰克救起。很快，美丽活泼的露丝与英俊开朗的杰克相爱了。",
        posterUrl: "https://image.tmdb.org/t/p/w500/lFYUkUPcFXDzZzSfkiCDsvHIJxj.jpg",
        videoUrl: "https://www.youtube.com/embed/kVrqfYjkTdQ"
    },
    {
        id: 8,
        title: "机器人总动员",
        year: 2008,
        rating: 9.3,
        director: "安德鲁·斯坦顿",
        actors: "本·贝尔特 / 艾丽莎·奈特",
        category: "animation",
        description: "末日星球上，两个机器人的纯粹爱恋与冒险。",
        detail: "导演：安德鲁·斯坦顿\n配音：本·贝尔特 / 艾丽莎·奈特 / 杰夫·格尔林\n\n公元2805年，地球已经被垃圾覆盖，人类已经移居到太空船"公理号"上生活。唯一留在地球上的机器人瓦力，日复一日地清理着堆积如山的垃圾。一天，一艘飞船降落，带来了先进的探测机器人伊娃。瓦力对伊娃一见钟情，并跟随她展开了一场穿越宇宙的冒险。在这个过程中，他们发现了人类重返地球的秘密，并帮助人类重新建立了与地球的联系。",
        posterUrl: "https://image.tmdb.org/t/p/w500/hg2Z4rD1CkplEZENYEMDBsMWcxK.jpg",
        videoUrl: "https://www.youtube.com/embed/CZ1CATNbXg0"
    },
    {
        id: 9,
        title: "寻梦环游记",
        year: 2017,
        rating: 9.1,
        director: "李·昂克里奇",
        actors: "安东尼·冈萨雷斯 / 盖尔·加西亚·贝纳尔",
        category: "animation",
        description: "在亡灵世界寻找记忆与亲情，温暖人心的动画经典。",
        detail: "导演：李·昂克里奇\n配音：安东尼·冈萨雷斯 / 盖尔·加西亚·贝纳尔 / 本杰明·布拉特\n\n热爱音乐的米格尔不幸地出生在一个痛恨音乐的家庭里。在亡灵节这一天，米格尔意外进入了亡灵世界，他必须在太阳升起之前得到一位亲人的祝福，否则就会永远留在这个世界。在亡灵世界里，米格尔找到了他的曾曾祖父，并揭开了家族的秘密。影片以墨西哥亡灵节为背景，讲述了一个关于亲情、记忆和追寻梦想的温暖故事。",
        posterUrl: "https://image.tmdb.org/t/p/w500/zrhUypo2z3aRX9htuzGpoVWE4jo.jpg",
        videoUrl: "https://www.youtube.com/embed/5ZlNB9G17q0"
    },
    {
        id: 10,
        title: "你的名字",
        year: 2016,
        rating: 9.1,
        director: "新海诚",
        actors: "神木隆之介 / 上白石萌音",
        category: "animation",
        description: "跨越时空的命运之恋，新海诚的视觉盛宴。",
        detail: "导演：新海诚\n配音：神木隆之介 / 上白石萌音 / 长泽雅美\n\n住在乡下小镇的三叶和住在东京的泷，突然开始交换身体。他们体验着对方的生活，留下手机短信作为交流。渐渐地，他们互相产生了感情。然而，他们发现彼此身处不同的时空，而彗星即将撞击地球。为了拯救三叶所在的小镇，泷踏上了寻找三叶的旅程。影片以其精美的画面和动人的故事打动了无数观众。",
        posterUrl: "https://image.tmdb.org/t/p/w500/vRQ7wpxpHt2aV8RnOkwHlOQAMKe.jpg",
        videoUrl: "https://www.youtube.com/embed/xUiy9VvR2Pk"
    },
    {
        id: 11,
        title: "小丑",
        year: 2019,
        rating: 8.8,
        director: "托德·菲利普斯",
        actors: "华金·菲尼克斯 / 罗伯特·德尼罗",
        category: "drama",
        description: "被生活逼入绝境的普通人，一步步走向黑暗。",
        detail: "导演：托德·菲利普斯\n主演：华金·菲尼克斯 / 罗伯特·德尼罗 / 莎姬·贝兹\n\n亚瑟·弗莱克是一个患有精神疾病的喜剧演员，他梦想成为一名脱口秀演员。但在哥谭市这个充满腐败和冷漠的城市里，他屡屡遭受挫折和羞辱。随着生活的不断打击，亚瑟逐渐走向疯狂，最终化身为哥谭市最可怕的罪犯——小丑。影片深刻探讨了社会对边缘人群的冷漠和忽视。",
        posterUrl: "https://image.tmdb.org/t/p/w500/6wRhlfO6CKdN1U49c3ZJ0MZtV4D.jpg",
        videoUrl: "https://www.youtube.com/embed/zAGVQLHvwOY"
    },
    {
        id: 12,
        title: "寄生虫",
        year: 2019,
        rating: 8.8,
        director: "奉俊昊",
        actors: "宋康昊 / 李善均",
        category: "popular",
        description: "贫富差距下的黑色寓言，奥斯卡最佳影片的震撼之作。",
        detail: "导演：奉俊昊\n主演：宋康昊 / 李善均 / 赵如珍\n\n基宇一家住在半地下室里，靠折叠披萨盒为生。一次偶然的机会，基宇的朋友将他介绍到一个富裕家庭担任家教。基宇发现这是一个绝佳的机会，他开始策划让全家人都渗透进这个富裕家庭。他们伪造身份，分别担任不同的职位。然而，当他们以为成功融入这个家庭时，一个隐藏的秘密逐渐浮出水面。",
        posterUrl: "https://image.tmdb.org/t/p/w500/nwTQE4vWe6NoFSEgxGu4hO9J4Tv.jpg",
        videoUrl: "https://www.youtube.com/embed/5xH0HfODajM"
    },
    {
        id: 13,
        title: "疯狂的麦克斯",
        year: 2015,
        rating: 8.7,
        director: "乔治·米勒",
        actors: "汤姆·哈迪 / 查理兹·塞隆",
        category: "fantasy",
        description: "末日荒野中的狂飙之旅，全程高能的动作大片。",
        detail: "导演：乔治·米勒\n主演：汤姆·哈迪 / 查理兹·塞隆 / 尼古拉斯·霍尔特\n\n在末日废土世界，麦克斯是一个沉默寡言的流浪者。他被军阀不死乔的手下抓获，成为了他们的血袋。与此同时，不死乔的指挥官弗瑞奥萨决定背叛，带着不死乔的妻子们逃离。麦克斯加入了她们的逃亡队伍，与弗瑞奥萨一起在沙漠中展开了一场惊心动魄的追逐战。",
        posterUrl: "https://image.tmdb.org/t/p/w500/jGMjF2SRawSsp8taI7BL8cC2Gp7.jpg",
        videoUrl: "https://www.youtube.com/embed/hEJnMQG9ev8"
    },
    {
        id: 14,
        title: "敦刻尔克",
        year: 2017,
        rating: 8.4,
        director: "克里斯托弗·诺兰",
        actors: "菲恩·怀特海德 / 汤姆·哈迪",
        category: "popular",
        description: "二战经典撤退战役，海陆空三线交织的求生故事。",
        detail: "导演：克里斯托弗·诺兰\n主演：菲恩·怀特海德 / 汤姆·哈迪 / 马克·里朗斯\n\n1940年，二战初期，40万英法联军被德军围困在敦刻尔克海滩上。影片从陆地、海洋和空中三个角度讲述了这场著名的撤退战役。士兵们在海滩上等待救援，平民船只冒着炮火前来营救，飞行员在空中与德军战机殊死搏斗。影片以其独特的叙事结构和紧张的节奏展现了战争的残酷和人性的光辉。",
        posterUrl: "https://image.tmdb.org/t/p/w500/2HG3jCpmgw2eFCnjYosttnCtJSJ.jpg",
        videoUrl: "https://www.youtube.com/embed/DKeaonKujrM"
    },
    {
        id: 15,
        title: "教父",
        year: 1972,
        rating: 9.4,
        director: "弗朗西斯·福特·科波拉",
        actors: "马龙·白兰度 / 阿尔·帕西诺",
        category: "drama",
        description: "黑帮史诗，诠释家族、权力与人性的经典之作。",
        detail: "导演：弗朗西斯·福特·科波拉\n主演：马龙·白兰度 / 阿尔·帕西诺 / 詹姆斯·凯恩\n\n维多·柯里昂是纽约黑手党柯里昂家族的族长，他被称为"教父"。影片讲述了柯里昂家族的故事，以及他的小儿子迈克尔如何从一个正直的青年逐渐成为新一代教父。影片深刻探讨了权力、家族和人性的主题，被认为是电影史上最伟大的黑帮电影之一。",
        posterUrl: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        videoUrl: "https://www.youtube.com/embed/UaVTIH8mujA"
    },
    {
        id: 16,
        title: "教父2",
        year: 1974,
        rating: 9.2,
        director: "弗朗西斯·福特·科波拉",
        actors: "阿尔·帕西诺 / 罗伯特·德尼罗",
        category: "drama",
        description: "延续家族传奇，讲述两代教父的沉浮人生。",
        detail: "导演：弗朗西斯·福特·科波拉\n主演：阿尔·帕西诺 / 罗伯特·德尼罗 / 罗伯特·杜瓦尔\n\n影片采用双线叙事，一方面讲述了迈克尔·柯里昂在成为教父后的故事，他试图将家族事业合法化，但却陷入了更深的暴力和背叛之中。另一方面，影片回溯了维多·柯里昂年轻时的经历，讲述了他如何从一个西西里移民成长为纽约黑手党领袖。影片探讨了权力的腐蚀和家族的代价。",
        posterUrl: "https://image.tmdb.org/t/p/w500/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg",
        videoUrl: "https://www.youtube.com/embed/8KPK_XbK6k8"
    },
    {
        id: 17,
        title: "黑暗骑士",
        year: 2008,
        rating: 9.2,
        director: "克里斯托弗·诺兰",
        actors: "克里斯蒂安·贝尔 / 希斯·莱杰",
        category: "fantasy",
        description: "蝙蝠侠与小丑的巅峰对决，超级英雄电影的标杆。",
        detail: "导演：克里斯托弗·诺兰\n主演：克里斯蒂安·贝尔 / 希斯·莱杰 / 艾伦·艾克哈特\n\n蝙蝠侠在哥谭市打击犯罪已经两年了，城市的犯罪率有所下降。但一个新的敌人出现了——小丑。小丑是一个混乱的化身，他不追求金钱或权力，只是为了制造混乱和破坏。蝙蝠侠必须在正义和复仇之间做出选择，同时还要面对新的威胁和背叛。希斯·莱杰饰演的小丑成为影史上最经典的反派之一。",
        posterUrl: "https://image.tmdb.org/t/p/w500/xUX0sVHmukGTYLTyqmSF5hpktOU.jpg",
        videoUrl: "https://www.youtube.com/embed/EXeTwQWrcwY"
    },
    {
        id: 18,
        title: "指环王3",
        year: 2003,
        rating: 9.3,
        director: "彼得·杰克逊",
        actors: "伊利亚·伍德 / 维果·莫腾森",
        category: "fantasy",
        description: "中土世界终极决战，史诗故事迎来圆满落幕。",
        detail: "导演：彼得·杰克逊\n主演：伊利亚·伍德 / 维果·莫腾森 / 伊恩·麦克莱恩\n\n佛罗多和山姆继续他们的旅程，前往末日火山摧毁魔戒。与此同时，阿拉贡、甘道夫和其他中土世界的勇士们集结力量，与索伦的军队展开最终决战。影片展现了中土世界的最后一场大战，以及佛罗多完成使命的艰难历程。影片获得了11项奥斯卡奖，成为影史上最成功的三部曲之一。",
        posterUrl: "https://image.tmdb.org/t/p/w500/kKUgYEOVebuu21N0KnQiGpIStiN.jpg",
        videoUrl: "https://www.youtube.com/embed/ddwc9876YmY"
    },
    {
        id: 19,
        title: "指环王1",
        year: 2001,
        rating: 9.1,
        director: "彼得·杰克逊",
        actors: "伊利亚·伍德 / 伊恩·麦克莱恩",
        category: "fantasy",
        description: "护戒小队踏上征途，开启宏大的中土冒险。",
        detail: "导演：彼得·杰克逊\n主演：伊利亚·伍德 / 伊恩·麦克莱恩 / 维果·莫腾森\n\n霍比特人佛罗多·巴金斯从比尔博·巴金斯那里继承了一枚神秘的戒指。甘道夫发现这枚戒指正是邪恶的至尊魔戒，它拥有毁灭整个中土世界的力量。为了阻止黑暗魔君索伦获得魔戒，佛罗多踏上了前往末日火山销毁魔戒的旅程。他与一群同伴组成护戒远征队，开始了一段充满危险和奇迹的冒险。",
        posterUrl: "https://image.tmdb.org/t/p/w500/dvNHlWMxba5f9r8xS9tILLUig8m.jpg",
        videoUrl: "https://www.youtube.com/embed/V7dH4x2a77g"
    },
    {
        id: 20,
        title: "哈利波特1",
        year: 2001,
        rating: 9.2,
        director: "克里斯·哥伦布",
        actors: "丹尼尔·雷德克里夫 / 艾玛·沃特森",
        category: "fantasy",
        description: "魔法世界的大门已经打开，一段关于成长与勇气的传奇。",
        detail: "导演：克里斯·哥伦布\n主演：丹尼尔·雷德克里夫 / 艾玛·沃特森 / 鲁伯特·格林特\n\n孤儿哈利·波特在11岁生日那天收到了一封神秘的信，邀请他前往霍格沃茨魔法学校学习魔法。哈利发现自己是一个巫师，他的父母是被邪恶的黑巫师伏地魔杀害的。在霍格沃茨，哈利结交了好友罗恩和赫敏，并开始学习魔法。但他也发现伏地魔并没有完全消失，他必须面对自己的命运。",
        posterUrl: "https://image.tmdb.org/t/p/w500/4oglmTTSAZb9FSO3IFuMK8F7qQ3.jpg",
        videoUrl: "https://www.youtube.com/embed/VyHV0BRtdxo"
    },
    {
        id: 21,
        title: "复仇者联盟4",
        year: 2019,
        rating: 8.5,
        director: "安东尼·罗素 / 乔·罗素",
        actors: "小罗伯特·唐尼 / 克里斯·埃文斯",
        category: "fantasy",
        description: "初代复仇者终章，英雄集结逆转战局。",
        detail: "导演：安东尼·罗素 / 乔·罗素\n主演：小罗伯特·唐尼 / 克里斯·埃文斯 / 斯嘉丽·约翰逊\n\n在灭霸打响指之后，宇宙中一半的生命消失了。复仇者们陷入了绝望，但他们决定穿越时空，收集无限宝石，逆转灭霸的所作所为。影片集结了漫威电影宇宙的所有英雄，展开了一场史诗级的最终决战。这是初代复仇者的最后一次集结，也是一个时代的结束。",
        posterUrl: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        videoUrl: "https://www.youtube.com/embed/gNgdBe-xhU4"
    },
    {
        id: 22,
        title: "蜘蛛侠：平行宇宙",
        year: 2018,
        rating: 8.5,
        director: "鲍勃·佩尔西凯蒂",
        actors: "沙梅克·摩尔 / 杰克·约翰逊",
        category: "animation",
        description: "多个蜘蛛侠跨次元相遇，画风极具创意的动画佳作。",
        detail: "导演：鲍勃·佩尔西凯蒂 / 彼得·拉姆齐\n配音：沙梅克·摩尔 / 杰克·约翰逊 / 海莉·斯坦菲尔德\n\n迈尔斯·莫拉莱斯是一个普通的布鲁克林少年，在一次意外中获得了蜘蛛能力。他发现自己并不是唯一的蜘蛛侠，来自不同宇宙的蜘蛛侠们因为一个超级反派的实验而聚集到了一起。迈尔斯必须与这些来自不同宇宙的蜘蛛侠合作，阻止反派的阴谋，并找到自己作为蜘蛛侠的意义。",
        posterUrl: "https://image.tmdb.org/t/p/w500/mc9icNYFRNSwl9PItTpVI5QmugW.jpg",
        videoUrl: "https://www.youtube.com/embed/shW9i6k8cB0"
    },
    {
        id: 23,
        title: "飞屋环游记",
        year: 2009,
        rating: 9.1,
        director: "彼特·道格特",
        actors: "爱德华·阿斯纳 / 乔丹·长井",
        category: "animation",
        description: "带着梦想与回忆，飞向未知的仙境瀑布。",
        detail: "导演：彼特·道格特\n配音：爱德华·阿斯纳 / 乔丹·长井 / 克里斯托弗·普卢默\n\n卡尔·弗雷德里克森是一个退休的气球销售员，他一直梦想着去南美洲的仙境瀑布探险。在妻子去世后，卡尔决定用气球将自己的房子飞起来，前往仙境瀑布。途中，他遇到了一个年轻的探险爱好者罗素。两人一起经历了一段充满冒险和感动的旅程，卡尔也学会了放下过去，拥抱新的生活。",
        posterUrl: "https://image.tmdb.org/t/p/w500/mFvoEwSfLqbcWwFsDjQebn9bzFe.jpg",
        videoUrl: "https://www.youtube.com/embed/FbXqHTR5SCc"
    },
    {
        id: 24,
        title: "天空之城",
        year: 1986,
        rating: 9.2,
        director: "宫崎骏",
        actors: "田中真弓 / 横泽启子",
        category: "animation",
        description: "云端之上的神秘都市，纯真与冒险交织的经典动画。",
        detail: "导演：宫崎骏\n配音：田中真弓 / 横泽启子 / 初井言荣\n\n少女希达拥有一块神秘的飞行石，这块石头与传说中的天空之城拉普达有关。在逃亡过程中，希达遇到了少年巴鲁，两人一起踏上了寻找拉普达的冒险之旅。他们必须躲避海盗和军方的追捕，同时揭开天空之城的秘密。影片探讨了科技与自然、战争与和平的主题，是宫崎骏早期的经典作品之一。",
        posterUrl: "https://image.tmdb.org/t/p/w500/nCpXBPravHiEzjv6cCGp2lt2E28.jpg",
        videoUrl: "https://www.youtube.com/embed/8a1B_XtXcLQ"
    }
];

let currentCategory = 'all';
let currentSort = 'rating-desc';
let searchQuery = '';
let lightboxImages = [];
let currentLightboxIndex = 0;

const PLACEHOLDER_IMG = "https://via.placeholder.com/300x450/1a1a2e/95a5a6?text=%E6%97%A0%E6%B5%B7%E6%8A%A5";

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
            grid.innerHTML = '<p style="text-align:center;grid-column:1/-1;padding:60px;color:var(--text-muted)">没有找到相关电影</p>';
            return;
        }

        lightboxImages = filtered.map(m => m.posterUrl);
        filtered.forEach((movie, index) => {
            const card = document.createElement('div');
            card.className = 'movie-card';
            card.dataset.id = movie.id;
            card.dataset.index = index;

            const isFavorite = favorites[movie.id];
            const isLiked = likes[movie.id];

            card.innerHTML = `
                <div class="movie-image-container">
                    <img src="${movie.posterUrl}" alt="${movie.title}" class="movie-img" loading="lazy" onerror="this.onerror=null;this.src='${PLACEHOLDER_IMG}';">
                    <div class="movie-overlay">
                        <span>点击查看详情</span>
                    </div>
                </div>
                <div class="movie-info">
                    <h3 class="movie-title">${movie.title}</h3>
                    <div class="movie-meta">
                        <span>${movie.year}</span>
                        <span class="movie-rating">⭐ ${movie.rating}</span>
                    </div>
                    <p class="movie-description">${movie.description}</p>
                    <div class="movie-actions">
                        <button class="action-btn like-btn ${isLiked ? 'active' : ''}" data-id="${movie.id}">
                            👍 ${isLiked ? '已赞' : '点赞'}
                        </button>
                        <button class="action-btn fav-btn ${isFavorite ? 'favorited' : ''}" data-id="${movie.id}">
                            ❤️ ${isFavorite ? '已收藏' : '收藏'}
                        </button>
                        <button class="action-btn share-btn" data-id="${movie.id}">
                            🔗 分享
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
            const url = `${window.location.origin}${window.location.pathname}?id=${id}`;
            if (navigator.share) {
                navigator.share({
                    title: movie.title,
                    text: movie.description,
                    url: url
                });
            } else {
                navigator.clipboard.writeText(url);
                alert('链接已复制到剪贴板！');
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
        <img src="${movie.posterUrl}" alt="${movie.title}" class="modal-image" loading="lazy" onerror="this.onerror=null;this.src='${PLACEHOLDER_IMG}';">
        <h2>${movie.title}</h2>
        <div class="movie-meta">
            <span>${movie.year}</span>
            <span class="movie-rating">⭐ ${movie.rating}</span>
        </div>
        <p style="margin: 20px 0; line-height: 1.8; white-space: pre-line;">${movie.detail}</p>
        <button id="watchBtn" style="display: inline-block; padding: 15px 40px; background: #00be06; color: white; border: none; border-radius: 30px; font-size: 1.1rem; font-weight: 600; cursor: pointer; transition: all 0.3s ease; margin: 20px 0;">▶ 立即观看</button>
        <div style="margin-top: 30px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 20px;">
            <h3>💬 评论 (${movieComments.length})</h3>
            <div style="margin: 15px 0;">
                <input type="text" id="commentInput" placeholder="写下你的评论..." style="width: 100%; padding: 12px; border: 1px solid var(--card-bg); border-radius: 8px; margin-bottom: 10px; background: var(--bg-secondary); color: var(--text-color);">
                <button id="submitComment" style="padding: 12px 25px; background: var(--primary-color); color: white; border: none; border-radius: 8px; cursor: pointer;">发表评论</button>
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
    img.onerror = function() { this.onerror=null; this.src=PLACEHOLDER_IMG; };
    lightbox.classList.add('show');
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('show');
}

function navigateLightbox(direction) {
    currentLightboxIndex += direction;
    if (currentLightboxIndex < 0) currentLightboxIndex = lightboxImages.length - 1;
    if (currentLightboxIndex >= lightboxImages.length) currentLightboxIndex = 0;
    const img = document.getElementById('lightboxImg');
    img.src = lightboxImages[currentLightboxIndex];
    img.onerror = function() { this.onerror=null; this.src=PLACEHOLDER_IMG; };
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
