console.log('Movie site loaded');

var movies = [
    {id:1,title:"Movie 1",year:1994,rating:9.7,category:"drama",description:"Great movie",posterUrl:"https://picsum.photos/300/450?random=1"},
    {id:2,title:"Movie 2",year:1993,rating:9.6,category:"drama",description:"Excellent film",posterUrl:"https://picsum.photos/300/450?random=2"},
    {id:3,title:"Movie 3",year:2014,rating:9.4,category:"popular",description:"Amazing sci-fi",posterUrl:"https://picsum.photos/300/450?random=3"},
    {id:4,title:"Movie 4",year:2001,rating:9.4,category:"animation",description:"Beautiful animation",posterUrl:"https://picsum.photos/300/450?random=4"},
    {id:5,title:"Movie 5",year:2010,rating:9.3,category:"popular",description:"Mind blowing",posterUrl:"https://picsum.photos/300/450?random=5"},
    {id:6,title:"Movie 6",year:1997,rating:9.4,category:"popular",description:"Epic romance",posterUrl:"https://picsum.photos/300/450?random=6"},
    {id:7,title:"Movie 7",year:2008,rating:9.3,category:"animation",description:"Heart warming",posterUrl:"https://picsum.photos/300/450?random=7"},
    {id:8,title:"Movie 8",year:2017,rating:9.1,category:"animation",description:"Wonderful story",posterUrl:"https://picsum.photos/300/450?random=8"},
    {id:9,title:"Movie 9",year:2016,rating:9.1,category:"animation",description:"Beautiful love",posterUrl:"https://picsum.photos/300/450?random=9"},
    {id:10,title:"Movie 10",year:2019,rating:8.8,category:"drama",description:"Dark story",posterUrl:"https://picsum.photos/300/450?random=10"}
];

var currentCategory = 'all';
var searchQuery = '';

function renderMovies() {
    console.log('Rendering movies...');
    var grid = document.getElementById('moviesGrid');
    if (!grid) {
        console.error('moviesGrid not found');
        return;
    }
    grid.innerHTML = '';
    
    var filtered = movies.filter(function(m) {
        return currentCategory === 'all' || m.category === currentCategory;
    });
    
    if (searchQuery) {
        var query = searchQuery.toLowerCase();
        filtered = filtered.filter(function(m) {
            return m.title.toLowerCase().indexOf(query) !== -1 || m.description.toLowerCase().indexOf(query) !== -1;
        });
    }
    
    filtered.sort(function(a, b) {
        return b.rating - a.rating;
    });
    
    filtered.forEach(function(movie, index) {
        var card = document.createElement('div');
        card.className = 'movie-card';
        card.innerHTML = '<div class="movie-image-container"><img src="' + movie.posterUrl + '" alt="' + movie.title + '" class="movie-img" loading="lazy"></div><div class="movie-info"><h3 class="movie-title">' + movie.title + '</h3><div class="movie-meta"><span>' + movie.year + '</span><span class="movie-rating">⭐ ' + movie.rating + '</span></div><p class="movie-description">' + movie.description + '</p></div>';
        grid.appendChild(card);
        setTimeout(function() {
            card.classList.add('visible');
        }, index * 50);
    });
    
    console.log('Movies rendered:', filtered.length);
}

function init() {
    console.log('Initializing...');
    
    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            navLinks.forEach(function(l) { l.classList.remove('active'); });
            this.classList.add('active');
            currentCategory = this.dataset.category;
            renderMovies();
        });
    });
    
    var searchBtn = document.getElementById('searchBtn');
    var searchInput = document.getElementById('searchInput');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            searchQuery = searchInput.value;
            renderMovies();
        });
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchQuery = this.value;
                renderMovies();
            }
        });
    }
    
    renderMovies();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
