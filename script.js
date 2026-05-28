const movies = [
    {id:1,title:"The Shawshank Redemption",year:1994,rating:9.7,category:"drama",description:"Hope is a good thing, maybe the best of things.",image:"https://picsum.photos/300/450?random=1"},
    {id:2,title:"Forrest Gump",year:1994,rating:9.5,category:"drama",description:"Life is like a box of chocolates.",image:"https://picsum.photos/300/450?random=2"},
    {id:3,title:"Interstellar",year:2014,rating:9.4,category:"popular",description:"Love transcends time and space.",image:"https://picsum.photos/300/450?random=3"},
    {id:4,title:"Inception",year:2010,rating:9.3,category:"popular",description:"Dreams within dreams.",image:"https://picsum.photos/300/450?random=4"},
    {id:5,title:"Titanic",year:1997,rating:9.4,category:"popular",description:"A love story for the ages.",image:"https://picsum.photos/300/450?random=5"},
    {id:6,title:"Spirited Away",year:2001,rating:9.4,category:"animation",description:"A magical adventure.",image:"https://picsum.photos/300/450?random=6"},
    {id:7,title:"Your Name",year:2016,rating:9.1,category:"animation",description:"Love across time.",image:"https://picsum.photos/300/450?random=7"},
    {id:8,title:"The Godfather",year:1972,rating:9.4,category:"drama",description:"The epic mafia story.",image:"https://picsum.photos/300/450?random=8"},
    {id:9,title:"The Dark Knight",year:2008,rating:9.2,category:"fantasy",description:"Batman vs Joker.",image:"https://picsum.photos/300/450?random=9"},
    {id:10,title:"Avengers",year:2019,rating:8.5,category:"fantasy",description:"Heroes assemble.",image:"https://picsum.photos/300/450?random=10"}
];

let currentCategory = 'all';
let searchQuery = '';

function renderMovies() {
    const grid = document.getElementById('moviesGrid');
    if (!grid) return;
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
        card.innerHTML = `
            <div class="movie-image-container">
                <img src="${movie.image}" alt="${movie.title}" class="movie-img">
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
