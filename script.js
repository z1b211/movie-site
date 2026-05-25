const movies = [
    {
        id: 1,
        title: "盗梦空间",
        year: 2010,
        rating: 9.3,
        category: "popular",
        description: "在梦境与现实之间穿梭，一场关于意识与潜意识的终极探索。",
        detail: "《盗梦空间》是克里斯托弗·诺兰执导的科幻悬疑片，讲述了一群窃贼通过进入目标的梦境来窃取商业机密的故事。影片以其复杂的叙事结构和惊人的视觉效果闻名。",
        image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=inception%20movie%20poster%20dreams%20mind%20bending&image_size=square_hd"
    },
    {
        id: 2,
        title: "星际穿越",
        year: 2014,
        rating: 9.4,
        category: "popular",
        description: "穿越虫洞，跨越时空，为人类寻找新家园的壮丽史诗。",
        detail: "《星际穿越》是诺兰的另一部科幻巨作，讲述了在未来地球即将毁灭时，一群探险家穿越虫洞寻找人类新家园的故事。影片探讨了爱、时间和人类的命运。",
        image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=interstellar%20movie%20space%20blackhole%20cosmos&image_size=square_hd"
    },
    {
        id: 3,
        title: "寄生虫",
        year: 2019,
        rating: 9.0,
        category: "popular",
        description: "贫富差距下的黑色寓言，奥斯卡最佳影片的震撼之作。",
        detail: "《寄生虫》是韩国导演奉俊昊的作品，讲述了一个贫困家庭逐渐渗透到一个富裕家庭生活中的故事。影片以黑色幽默的方式探讨了社会阶级差异。",
        image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=parasite%20movie%20thriller%20dark%20suspense&image_size=square_hd"
    },
    {
        id: 4,
        title: "肖申克的救赎",
        year: 1994,
        rating: 9.7,
        category: "drama",
        description: "希望是美好的事物，也许是最美好的，而美好的事物永不消逝。",
        detail: "《肖申克的救赎》改编自斯蒂芬·金的小说，讲述了银行家安迪被冤枉入狱后，在肖申克监狱中度过的岁月以及他与狱友瑞德的友谊。",
        image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=shawshank%20redemption%20prison%20hope%20friendship&image_size=square_hd"
    },
    {
        id: 5,
        title: "阿甘正传",
        year: 1994,
        rating: 9.5,
        category: "drama",
        description: "人生就像一盒巧克力，你永远不知道下一颗是什么味道。",
        detail: "《阿甘正传》讲述了一个智商只有75的男子阿甘的传奇人生。他虽然智力有限，但纯洁善良，见证了美国历史上的许多重大事件。",
        image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=forrest%20gump%20running%20life%20journey&image_size=square_hd"
    },
    {
        id: 6,
        title: "辛德勒的名单",
        year: 1993,
        rating: 9.6,
        category: "drama",
        description: "在黑暗中闪耀的人性光辉，一段不可磨灭的历史记忆。",
        detail: "《辛德勒的名单》根据真实故事改编，讲述了德国商人奥斯卡·辛德勒在二战期间拯救了上千名犹太人的故事。影片以黑白摄影呈现，震撼人心。",
        image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=schindlers%20list%20movie%20black%20and%20white%20oscar%20schindler%20jewish%20survivors&image_size=square_hd"
    },
    {
        id: 7,
        title: "指环王三部曲",
        year: 2001,
        rating: 9.4,
        category: "fantasy",
        description: "中土世界的壮丽史诗，勇气与友情的永恒赞歌。",
        detail: "《指环王》三部曲改编自J.R.R.托尔金的同名小说，讲述了霍比特人佛罗多和他的伙伴们摧毁至尊魔戒的冒险旅程。",
        image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=lord%20of%20the%20rings%20middle%20earth%20fantasy%20epic&image_size=square_hd"
    },
    {
        id: 8,
        title: "哈利波特系列",
        year: 2001,
        rating: 9.1,
        category: "fantasy",
        description: "魔法世界的大门已经打开，一段关于成长与勇气的传奇。",
        detail: "《哈利波特》系列电影改编自J.K.罗琳的小说，讲述了孤儿哈利波特在霍格沃茨魔法学校的成长经历以及他与伏地魔的斗争。",
        image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=harry%20potter%20magic%20hogwarts%20wizard&image_size=square_hd"
    },
    {
        id: 9,
        title: "潘神的迷宫",
        year: 2006,
        rating: 8.8,
        category: "fantasy",
        description: "现实与幻想交织的黑暗童话，一部视觉与情感的杰作。",
        detail: "《潘神的迷宫》是吉尔莫·德尔·托罗执导的暗黑童话，讲述了二战期间西班牙的一个小女孩进入一个神秘迷宫的故事。",
        image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pans%20labyrinth%20dark%20fairy%20tale%20maze&image_size=square_hd"
    },
    {
        id: 10,
        title: "千与千寻",
        year: 2001,
        rating: 9.4,
        category: "animation",
        description: "宫崎骏的奇幻世界，关于成长与勇气的永恒寓言。",
        detail: "《千与千寻》是宫崎骏的经典动画，讲述了一个小女孩千寻在神灵世界的冒险，她必须工作才能拯救自己变成猪的父母。",
        image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=spirited%20away%20anime%20ghibli%20fantasy&image_size=square_hd"
    },
    {
        id: 11,
        title: "你的名字",
        year: 2016,
        rating: 9.1,
        category: "animation",
        description: "跨越时空的命运之恋，新海诚的视觉盛宴。",
        detail: "《你的名字》是新海诚的动画电影，讲述了两个从未见面的高中生开始交换身体，他们逐渐产生了联系并寻找彼此的故事。",
        image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=your%20name%20anime%20comet%20sky%20romance&image_size=square_hd"
    },
    {
        id: 12,
        title: "寻梦环游记",
        year: 2017,
        rating: 9.1,
        category: "animation",
        description: "在亡灵世界寻找记忆与亲情，温暖人心的动画经典。",
        detail: "《寻梦环游记》是皮克斯的动画电影，讲述了一个墨西哥小男孩在亡灵节期间进入亡灵世界，寻找他曾曾祖父的故事。",
        image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=coco%20movie%20mexican%20day%20of%20the%20dead%20music&image_size=square_hd"
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
            grid.innerHTML = '<p style="text-align:center;grid-column:1/-1;padding:60px;">没有找到相关电影</p>';
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
                    <img src="${movie.image}" alt="${movie.title}" class="movie-img">
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
            if (navigator.share) {
                navigator.share({
                    title: movie.title,
                    text: movie.description,
                    url: window.location.href
                });
            } else {
                navigator.clipboard.writeText(window.location.href);
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
        <img src="${movie.image}" alt="${movie.title}" class="modal-image">
        <h2>${movie.title}</h2>
        <div class="movie-meta">
            <span>${movie.year}</span>
            <span class="movie-rating">⭐ ${movie.rating}</span>
        </div>
        <p style="margin: 20px 0; line-height: 1.8;">${movie.detail}</p>
        <div style="margin-top: 30px; border-top: 1px solid #eee; padding-top: 20px;">
            <h3>💬 评论 (${movieComments.length})</h3>
            <div style="margin: 15px 0;">
                <input type="text" id="commentInput" placeholder="写下你的评论..." style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 8px; margin-bottom: 10px;">
                <button id="submitComment" style="padding: 10px 20px; background: var(--primary-color); color: white; border: none; border-radius: 8px; cursor: pointer;">发表评论</button>
            </div>
            <div id="commentsList">
                ${movieComments.map(c => `<div style="padding: 10px; background: #f5f5f5; border-radius: 8px; margin-bottom: 10px;">${c}</div>`).join('')}
            </div>
        </div>
    `;
    
    modal.classList.add('show');
    
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

function observeScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.movie-card').forEach(card => observer.observe(card));
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
    document.getElementById('prevBtn').addEventListener('click', () => navigateLightbox(-1));
    document.getElementById('nextBtn').addEventListener('click', () => navigateLightbox(1));
    document.getElementById('lightbox').addEventListener('click', (e) => {
        if (e.target.id === 'lightbox') closeLightbox();
    });
    
    document.addEventListener('keydown', (e) => {
        if (document.getElementById('lightbox').classList.contains('show')) {
            if (e.key === 'ArrowLeft') navigateLightbox(-1);
            if (e.key === 'ArrowRight') navigateLightbox(1);
            if (e.key === 'Escape') closeLightbox();
        }
        if (document.getElementById('detailModal').classList.contains('show')) {
            if (e.key === 'Escape') {
                document.getElementById('detailModal').classList.remove('show');
            }
        }
    });
    
    renderMovies();
});
