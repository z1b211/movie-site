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
        detail: "导演：弗兰克·德拉邦特\n主演：蒂姆·罗宾斯 / 摩根·弗里曼\n\n20世纪40年代末，小有成就的青年银行家安迪因涉嫌杀害妻子及其情人而锒铛入狱。",
        posterUrl: "https://picsum.photos/300/450?random=1",
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
        detail: "导演：史蒂文·斯皮尔伯格\n主演：连姆·尼森 / 本·金斯利\n\n1939年，波兰在纳粹德国的统治下，党卫军对犹太人进行了隔离统治。",
        posterUrl: "https://picsum.photos/300/450?random=2",
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
        detail: "导演：罗伯特·泽米吉斯\n主演：汤姆·汉克斯 / 罗宾·怀特\n\n阿甘是个智商只有75的低能儿，在学校里为了躲避别的孩子的欺侮而开始跑。",
        posterUrl: "https://picsum.photos/300/450?random=3",
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
        detail: "导演：宫崎骏\n配音：柊瑠美 / 入野自由\n\n千寻和爸爸妈妈一起驱车前往新家，不慎进入了神秘的隧道。",
        posterUrl: "https://picsum.photos/300/450?random=4",
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
        detail: "导演：克里斯托弗·诺兰\n主演：马修·麦康纳 / 安妮·海瑟薇\n\n在不远的未来，地球气候已经不适合人类生存。",
        posterUrl: "https://picsum.photos/300/450?random=5",
        videoUrl: "https://www.youtube.com/embed/zSWdZVtXT7E"
    },
    {
        id: 6,
        title: "盗梦空间",
        year: 2010,
        rating: 9.3,
        director: "克里斯托弗·诺兰",
        actors: "莱昂纳多·迪卡普里奥",
        category: "popular",
        description: "在梦境与现实之间穿梭，一场关于意识与潜意识的终极探索。",
        detail: "导演：克里斯托弗·诺兰\n主演：莱昂纳多·迪卡普里奥\n\n道姆·柯布是一名专门从事意识深层盗窃的高手。",
        posterUrl: "https://picsum.photos/300/450?random=6",
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
        detail: "导演：詹姆斯·卡梅隆\n主演：莱昂纳多·迪卡普里奥 / 凯特·温丝莱特\n\n1912年，豪华客轮泰坦尼克号开始了它的处女航。",
        posterUrl: "https://picsum.photos/300/450?random=7",
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
        detail: "导演：安德鲁·斯坦顿\n配音：本·贝尔特 / 艾丽莎·奈特\n\n公元2805年，地球已经被垃圾覆盖。",
        posterUrl: "https://picsum.photos/300/450?random=8",
        videoUrl: "https://www.youtube.com/embed/CZ1CATNbXg0"
    },
    {
        id: 9,
        title: "寻梦环游记",
        year: 2017,
        rating: 9.1,
        director: "李·昂克里奇",
        actors: "安东尼·冈萨雷斯",
        category: "animation",
        description: "在亡灵世界寻找记忆与亲情，温暖人心的动画经典。",
        detail: "导演：李·昂克里奇\n配音：安东尼·冈萨雷斯\n\n热爱音乐的米格尔不幸地出生在一个痛恨音乐的家庭里。",
        posterUrl: "https://picsum.photos/300/450?random=9",
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
        detail: "导演：新海诚\n配音：神木隆之介 / 上白石萌音\n\n住在乡下小镇的三叶和住在东京的泷，突然开始交换身体。",
        posterUrl: "https://picsum.photos/300/450?random=10",
        videoUrl: "https://www.youtube.com/embed/xUiy9VvR2Pk"
    },
    {
        id: 11,
        title: "小丑",
        year: 2019,
        rating: 8.8,
        director: "托德·菲利普斯",
        actors: "华金·菲尼克斯",
        category: "drama",
        description: "被生活逼入绝境的普通人，一步步走向黑暗。",
        detail: "导演：托德·菲利普斯\n主演：华金·菲尼克斯\n\n亚瑟·弗莱克是一个患有精神疾病的喜剧演员。",
        posterUrl: "https://picsum.photos/300/450?random=11",
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
        detail: "导演：奉俊昊\n主演：宋康昊 / 李善均\n\n基宇一家住在半地下室里，靠折叠披萨盒为生。",
        posterUrl: "https://picsum.photos/300/450?random=12",
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
        detail: "导演：乔治·米勒\n主演：汤姆·哈迪 / 查理兹·塞隆\n\n在末日废土世界，麦克斯是一个沉默寡言的流浪者。",
        posterUrl: "https://picsum.photos/300/450?random=13",
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
        detail: "导演：克里斯托弗·诺兰\n主演：菲恩·怀特海德 / 汤姆·哈迪\n\n1940年，40万英法联军被德军围困在敦刻尔克海滩上。",
        posterUrl: "https://picsum.photos/300/450?random=14",
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
        detail: "导演：弗朗西斯·福特·科波拉\n主演：马龙·白兰度 / 阿尔·帕西诺\n\n维多·柯里昂是纽约黑手党柯里昂家族的族长。",
        posterUrl: "https://picsum.photos/300/450?random=15",
        videoUrl: "https://www.youtube.com/embed/UaVTIH8mujA"
    },
    {
        id: 16,
        title: "黑暗骑士",
        year: 2008,
        rating: 9.2,
        director: "克里斯托弗·诺兰",
        actors: "克里斯蒂安·贝尔 / 希斯·莱杰",
        category: "fantasy",
        description: "蝙蝠侠与小丑的巅峰对决，超级英雄电影的标杆。",
        detail: "导演：克里斯托弗·诺兰\n主演：克里斯蒂安·贝尔 / 希斯·莱杰\n\n蝙蝠侠在哥谭市打击犯罪已经两年了。",
        posterUrl: "https://picsum.photos/300/450?random=16",
        videoUrl: "https://www.youtube.com/embed/EXeTwQWrcwY"
    },
    {
        id: 17,
        title: "指环王3",
        year: 2003,
        rating: 9.3,
        director: "彼得·杰克逊",
        actors: "伊利亚·伍德 / 维果·莫腾森",
        category: "fantasy",
        description: "中土世界终极决战，史诗故事迎来圆满落幕。",
        detail: "导演：彼得·杰克逊\n主演：伊利亚·伍德 / 维果·莫腾森\n\n佛罗多和山姆继续他们的旅程，前往末日火山摧毁魔戒。",
        posterUrl: "https://picsum.photos/300/450?random=17",
        videoUrl: "https://www.youtube.com/embed/ddwc9876YmY"
    },
    {
        id: 18,
        title: "哈利波特1",
        year: 2001,
        rating: 9.2,
        director: "克里斯·哥伦布",
        actors: "丹尼尔·雷德克里夫 / 艾玛·沃特森",
        category: "fantasy",
        description: "魔法世界的大门已经打开，一段关于成长与勇气的传奇。",
        detail: "导演：克里斯·哥伦布\n主演：丹尼尔·雷德克里夫 / 艾玛·沃特森\n\n孤儿哈利·波特收到了霍格沃茨魔法学校的邀请。",
        posterUrl: "https://picsum.photos/300/450?random=18",
        videoUrl: "https://www.youtube.com/embed/VyHV0BRtdxo"
    },
    {
        id: 19,
        title: "复仇者联盟4",
        year: 2019,
        rating: 8.5,
        director: "安东尼·罗素",
        actors: "小罗伯特·唐尼 / 克里斯·埃文斯",
        category: "fantasy",
        description: "初代复仇者终章，英雄集结逆转战局。",
        detail: "导演：安东尼·罗素\n主演：小罗伯特·唐尼 / 克里斯·埃文斯\n\n在灭霸打响指之后，宇宙中一半的生命消失了。",
        posterUrl: "https://picsum.photos/300/450?random=19",
        videoUrl: "https://www.youtube.com/embed/gNgdBe-xhU4"
    },
    {
        id: 20,
        title: "飞屋环游记",
        year: 2009,
        rating: 9.1,
        director: "彼特·道格特",
        actors: "爱德华·阿斯纳",
        category: "animation",
        description: "带着梦想与回忆，飞向未知的仙境瀑布。",
        detail: "导演：彼特·道格特\n配音：爱德华·阿斯纳\n\n卡尔·弗雷德里克森一直梦想着去南美洲的仙境瀑布探险。",
        posterUrl: "https://picsum.photos/300/450?random=20",
        videoUrl: "https://www.youtube.com/embed/FbXqHTR5SCc"
    }
];

let currentCategory = 'all';
let currentSort = 'rating-desc';
let searchQuery = '';
let lightboxImages = [];
let currentLightboxIndex = 0;

const PLACEHOLDER_IMG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='450' viewBox='0 0 300 450'%3E%3Crect fill='%231a1a2e' width='300' height='450'/%3E%3Ctext fill='%2395a5a6' font-family='Arial' font-size='16' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3E电影海报%3C/text%3E%3C/svg%3E";

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