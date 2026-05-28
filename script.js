const movies = [
    {
        id: 1,
        title: "肖申克的救赎",
        year: 1994,
        rating: 9.7,
        category: "drama",
        description: "希望是美好的事物，也许是最美好的，而美好的事物永不消逝。",
        posterUrl: "https://picsum.photos/300/450?random=1"
    },
    {
        id: 2,
        title: "辛德勒的名单",
        year: 1993,
        rating: 9.6,
        category: "drama",
        description: "在黑暗中闪耀的人性光辉，一段不可磨灭的历史记忆。",
        posterUrl: "https://picsum.photos/300/450?random=2"
    },
    {
        id: 3,
        title: "阿甘正传",
        year: 1994,
        rating: 9.5,
        category: "drama",
        description: "人生就像一盒巧克力，你永远不知道下一颗是什么味道。",
        posterUrl: "https://picsum.photos/300/450?random=3"
    },
    {
        id: 4,
        title: "千与千寻",
        year: 2001,
        rating: 9.4,
        category: "animation",
        description: "宫崎骏的奇幻世界，关于成长与勇气的永恒寓言。",
        posterUrl: "https://picsum.photos/300/450?random=4"
    },
    {
        id: 5,
        title: "星际穿越",
        year: 2014,
        rating: 9.4,
        category: "popular",
        description: "穿越虫洞，跨越时空，为人类寻找新家园的壮丽史诗。",
        posterUrl: "https://picsum.photos/300/450?random=5"
    },
    {
        id: 6,
        title: "盗梦空间",
        year: 2010,
        rating: 9.3,
        category: "popular",
        description: "在梦境与现实之间穿梭，一场关于意识与潜意识的终极探索。",
        posterUrl: "https://picsum.photos/300/450?random=6"
    },
    {
        id: 7,
        title: "泰坦尼克号",
        year: 1997,
        rating: 9.4,
        category: "popular",
        description: "跨越生死的旷世爱恋，经典永不落幕。",
        posterUrl: "https://picsum.photos/300/450?random=7"
    },
    {
        id: 8,
        title: "机器人总动员",
        year: 2008,
        rating: 9.3,
        category: "animation",
        description: "末日星球上，两个机器人的纯粹爱恋与冒险。",
        posterUrl: "https://picsum.photos/300/450?random=8"
    },
    {
        id: 9,
        title: "寻梦环游记",
        year: 2017,
        rating: 9.1,
        category: "animation",
        description: "在亡灵世界寻找记忆与亲情，温暖人心的动画经典。",
        posterUrl: "https://picsum.photos/300/450?random=9"
    },
    {
        id: 10,
        title: "你的名字",
        year: 2016,
        rating: 9.1,
        category: "animation",
        description: "跨越时空的命运之恋，新海诚的视觉盛宴。",
        posterUrl: "https://picsum.photos/300/450?random=10"
    },
    {
        id: 11,
        title: "小丑",
        year: 2019,
        rating: 8.8,
        category: "drama",
        description: "被生活逼入绝境的普通人，一步步走向黑暗。",
        posterUrl: "https://picsum.photos/300/450?random=11"
    },
    {
        id: 12,
        title: "寄生虫",
        year: 2019,
        rating: 8.8,
        category: "popular",
        description: "贫富差距下的黑色寓言，奥斯卡最佳影片的震撼之作。",
        posterUrl: "https://picsum.photos/300/450?random=12"
    },
    {
        id: 13,
        title: "疯狂的麦克斯",
        year: 2015,
        rating: 8.7,
        category: "fantasy",
        description: "末日荒野中的狂飙之旅，全程高能的动作大片。",
        posterUrl: "https://picsum.photos/300/450?random=13"
    },
    {
        id: 14,
        title: "教父",
        year: 1972,
        rating: 9.4,
        category: "drama",
        description: "黑帮史诗，诠释家族、权力与人性的经典之作。",
        posterUrl: "https://picsum.photos/300/450?random=14"
    },
    {
        id: 15,
        title: "黑暗骑士",
        year: 2008,
        rating: 9.2,
        category: "fantasy",
        description: "蝙蝠侠与小丑的巅峰对决，超级英雄电影的标杆。",
        posterUrl: "https://picsum.photos/300/450?random=15"
    },
    {
        id: 16,
        title: "指环王3",
        year: 2003,
        rating: 9.3,
        category: "fantasy",
        description: "中土世界终极决战，史诗故事迎来圆满落幕。",
        posterUrl: "https://picsum.photos/300/450?random=16"
    },
    {
        id: 17,
        title: "哈利波特1",
        year: 2001,
        rating: 9.2,
        category: "fantasy",
        description: "魔法世界的大门已经打开，一段关于成长与勇气的传奇。",
        posterUrl: "https://picsum.photos/300/450?random=17"
    },
    {
        id: 18,
        title: "复仇者联盟4",
        year: 2019,
        rating: 8.5,
        category: "fantasy",
        description: "初代复仇者终章，英雄集结逆转战局。",
        posterUrl: "https://picsum.photos/300/450?random=18"
    },
    {
        id: 19,
        title: "飞屋环游记",
        year: 2009,
        rating: 9.1,
        category: "animation",
        description: "带着梦想与回忆，飞向未知的仙境瀑布。",
        posterUrl: "https://picsum.photos/300/450?random=19"
    },
    {
        id: 20,
        title: "敦刻尔克",
        year: 2017,
        rating: 8.4,
        category: "popular",
        description: "二战经典撤退战役，海陆空三线交织的求生故事。",
        posterUrl: "https://picsum.photos/300/450?random=20"
    }
];

let currentCategory = 'all';
let currentSort = 'rating-desc';
let searchQuery = '';

function renderMovies() {
    const grid = document.getElementById('moviesGrid');
    grid.innerHTML = '';
    
    let filtered = movies.filter(m => currentCategory === 'all' || m.category === currentCategory);
    
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(m => 
            m.title.toLowerCase().includes(query) ||
            m.description.toLowerCase().includes(query)
        );
    }
    
    filtered.sort((a, b) => b.rating - a.rating);
    
    filtered.forEach((movie, index) => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.innerHTML = `
            <div class="movie-image-container">
                <img src="${movie.posterUrl}" alt="${movie.title}" class="movie-img" loading="lazy">
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
            </div>
        `;
        grid.appendChild(card);
        setTimeout(() => card.classList.add('visible'), index * 50);
    });
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
    
    renderMovies();
});
