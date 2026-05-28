const movies = [
    {id:1,title:"Movie 1",year:1994,rating:9.7,category:"drama",description:"Great movie",posterUrl:"https://picsum.photos/300/450?random=1"},
    {id:2,title:"Movie 2",year:1993,rating:9.6,category:"drama",description:"Excellent film",posterUrl:"https://picsum.photos/300/450?random=2"},
    {id:3,title:"Movie 3",year:2014,rating:9.4,category:"popular",description:"Amazing sci-fi",posterUrl:"https://picsum.photos/300/450?random=3"},
    {id:4,title:"Movie 4",year:2001,rating:9.4,category:"animation",description:"Beautiful animation",posterUrl:"https://picsum.photos/300/450?random=4"},
    {id:5,title:"Movie 5",year:2010,rating:9.3,category:"popular",description:"Mind blowing",posterUrl:"https://picsum.photos/300/450?random=5"},
    {id:6,title:"Movie 6",year:1997,rating:9.4,category:"popular",description:"Epic romance",posterUrl:"https://picsum.photos/300/450?random=6"},
    {id:7,title:"Movie 7",year:2008,rating:9.3,category:"animation",description:"Heart warming",posterUrl:"https://picsum.photos/300/450?random=7"},
    {id:8,title:"Movie 8",year:2017,rating:9.1,category:"animation",description:"Wonderful story",posterUrl:"https://picsum.photos/300/450?random=8"},
    {id:9,title:"Movie 9",year:2016,rating:9.1,category:"animation",description:"Beautiful love",posterUrl:"https://picsum.photos/300/450?random=9"},
    {id:10,title:"Movie 10",year:2019,rating:8.8,category:"drama",description:"Dark story",posterUrl:"https://picsum.photos/300/450?random=10"},
    {id:11,title:"Movie 11",year:2019,rating:8.8,category:"popular",description:"Social commentary",posterUrl:"https://picsum.photos/300/450?random=11"},
    {id:12,title:"Movie 12",year:2015,rating:8.7,category:"fantasy",description:"Action packed",posterUrl:"https://picsum.photos/300/450?random=12"},
    {id:13,title:"Movie 13",year:1972,rating:9.4,category:"drama",description:"Classic gangster",posterUrl:"https://picsum.photos/300/450?random=13"},
    {id:14,title:"Movie 14",year:2008,rating:9.2,category:"fantasy",description:"Superhero epic",posterUrl:"https://picsum.photos/300/450?random=14"},
    {id:15,title:"Movie 15",year:2003,rating:9.3,category:"fantasy",description:"Fantasy masterpiece",posterUrl:"https://picsum.photos/300/450?random=15"},
    {id:16,title:"Movie 16",year:2001,rating:9.2,category:"fantasy",description:"Wizarding world",posterUrl:"https://picsum.photos/300/450?random=16"},
    {id:17,title:"Movie 17",year:2019,rating:8.5,category:"fantasy",description:"Avengers finale",posterUrl:"https://picsum.photos/300/450?random=17"},
    {id:18,title:"Movie 18",year:2009,rating:9.1,category:"animation",description:"Adventure awaits",posterUrl:"https://picsum.photos/300/450?random=18"},
    {id:19,title:"Movie 19",year:2017,rating:8.4,category:"popular",description:"War drama",posterUrl:"https://picsum.photos/300/450?random=19"},
    {id:20,title:"Movie 20",year:2001,rating:9.2,category:"fantasy",description:"Epic journey",posterUrl:"https://picsum.photos/300/450?random=20"}
];

let currentCategory = 'all';
let searchQuery = '';

function renderMovies() {
    const grid = document.getElementById('moviesGrid');
    grid.innerHTML = '';
    let filtered = movies.filter(m => currentCategory === 'all' || m.category === currentCategory);
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(m => m.title.toLowerCase().includes(query) || m.description.toLowerCase().includes(query));
    }
    filtered.sort((a, b) => b.rating - a.rating);
    filtered.forEach((movie, index) => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.innerHTML = `<div class="movie-image-container"><img src="${movie.posterUrl}" alt="${movie.title}" class="movie-img" loading="lazy"></div><div class="movie-info"><h3 class="movie-title">${movie.title}</h3><div class="movie-meta"><span>${movie.year}</span><span class="movie-rating">⭐ ${movie.rating}</span></div><p class="movie-description">${movie.description}</p></div>`;
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
