document.addEventListener("DOMContentLoaded", () => {
  // COMPREHENSIVE PRE-FED MOVIE DATABASE (30 Iconic Masterpieces)
  const MOVIES_DATABASE = [
    {
      id: "tt1375666",
      title: "Inception",
      year: 2010,
      rated: "PG-13",
      runtime: "148 min",
      genre: ["Action", "Sci-Fi", "Adventure"],
      director: "Christopher Nolan",
      actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project.",
      rating: 8.8,
      poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&auto=format&fit=crop&q=80",
      imdbUrl: "https://www.imdb.com/title/tt1375666/"
    },
    {
      id: "tt0816692",
      title: "Interstellar",
      year: 2014,
      rated: "PG-13",
      runtime: "169 min",
      genre: ["Adventure", "Drama", "Sci-Fi"],
      director: "Christopher Nolan",
      actors: "Matthew McConaughey, Anne Hathaway, Jessica Chastain, Michael Caine",
      plot: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
      rating: 8.7,
      poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop&q=80",
      imdbUrl: "https://www.imdb.com/title/tt0816692/"
    },
    {
      id: "tt0468569",
      title: "The Dark Knight",
      year: 2008,
      rated: "PG-13",
      runtime: "152 min",
      genre: ["Action", "Crime", "Drama"],
      director: "Christopher Nolan",
      actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      rating: 9.0,
      poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&auto=format&fit=crop&q=80",
      imdbUrl: "https://www.imdb.com/title/tt0468569/"
    },
    {
      id: "tt4154796",
      title: "Avengers: Endgame",
      year: 2019,
      rated: "PG-13",
      runtime: "181 min",
      genre: ["Action", "Adventure", "Sci-Fi"],
      director: "Anthony Russo, Joe Russo",
      actors: "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",
      plot: "After the devastating events of Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more to reverse Thanos' actions and restore balance.",
      rating: 8.4,
      poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=500&auto=format&fit=crop&q=80",
      imdbUrl: "https://www.imdb.com/title/tt4154796/"
    },
    {
      id: "tt0133093",
      title: "The Matrix",
      year: 1999,
      rated: "R",
      runtime: "136 min",
      genre: ["Action", "Sci-Fi"],
      director: "Lana Wachowski, Lilly Wachowski",
      actors: "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving",
      plot: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
      rating: 8.7,
      poster: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&auto=format&fit=crop&q=80",
      imdbUrl: "https://www.imdb.com/title/tt0133093/"
    },
    {
      id: "tt15398776",
      title: "Oppenheimer",
      year: 2023,
      rated: "R",
      runtime: "180 min",
      genre: ["Biography", "Drama", "History"],
      director: "Christopher Nolan",
      actors: "Cillian Murphy, Emily Blunt, Matt Damon, Robert Downey Jr.",
      plot: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II.",
      rating: 8.9,
      poster: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=500&auto=format&fit=crop&q=80",
      imdbUrl: "https://www.imdb.com/title/tt15398776/"
    },
    {
      id: "tt15239678",
      title: "Dune: Part Two",
      year: 2024,
      rated: "PG-13",
      runtime: "166 min",
      genre: ["Action", "Adventure", "Sci-Fi"],
      director: "Denis Villeneuve",
      actors: "Timothée Chalamet, Zendaya, Rebecca Ferguson, Javier Bardem",
      plot: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
      rating: 8.6,
      poster: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=500&auto=format&fit=crop&q=80",
      imdbUrl: "https://www.imdb.com/title/tt15239678/"
    },
    {
      id: "tt6751668",
      title: "Parasite",
      year: 2019,
      rated: "R",
      runtime: "132 min",
      genre: ["Drama", "Thriller"],
      director: "Bong Joon Ho",
      actors: "Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong, Choi Woo-shik",
      plot: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
      rating: 8.5,
      poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=80",
      imdbUrl: "https://www.imdb.com/title/tt6751668/"
    },
    {
      id: "tt0111161",
      title: "The Shawshank Redemption",
      year: 1994,
      rated: "R",
      runtime: "142 min",
      genre: ["Drama"],
      director: "Frank Darabont",
      actors: "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
      plot: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
      rating: 9.3,
      poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&auto=format&fit=crop&q=80",
      imdbUrl: "https://www.imdb.com/title/tt0111161/"
    },
    {
      id: "tt0068646",
      title: "The Godfather",
      year: 1972,
      rated: "R",
      runtime: "175 min",
      genre: ["Crime", "Drama"],
      director: "Francis Ford Coppola",
      actors: "Marlon Brando, Al Pacino, James Caan, Robert Duvall",
      plot: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      rating: 9.2,
      poster: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=500&auto=format&fit=crop&q=80",
      imdbUrl: "https://www.imdb.com/title/tt0068646/"
    },
    {
      id: "tt0110912",
      title: "Pulp Fiction",
      year: 1994,
      rated: "R",
      runtime: "154 min",
      genre: ["Crime", "Drama"],
      director: "Quentin Tarantino",
      actors: "John Travolta, Uma Thurman, Samuel L. Jackson, Bruce Willis",
      plot: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      rating: 8.9,
      poster: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=500&auto=format&fit=crop&q=80",
      imdbUrl: "https://www.imdb.com/title/tt0110912/"
    },
    {
      id: "tt0137523",
      title: "Fight Club",
      year: 1999,
      rated: "R",
      runtime: "139 min",
      genre: ["Drama"],
      director: "David Fincher",
      actors: "Brad Pitt, Edward Norton, Helena Bonham Carter, Meat Loaf",
      plot: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
      rating: 8.8,
      poster: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=500&auto=format&fit=crop&q=80",
      imdbUrl: "https://www.imdb.com/title/tt0137523/"
    },
    {
      id: "tt0109830",
      title: "Forrest Gump",
      year: 1994,
      rated: "PG-13",
      runtime: "142 min",
      genre: ["Drama", "Romance"],
      director: "Robert Zemeckis",
      actors: "Tom Hanks, Robin Wright, Gary Sinise, Sally Field",
      plot: "The history of the United States from the 1950s to the '70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.",
      rating: 8.8,
      poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&auto=format&fit=crop&q=80",
      imdbUrl: "https://www.imdb.com/title/tt0109830/"
    },
    {
      id: "tt0120737",
      title: "The Lord of the Rings: The Fellowship of the Ring",
      year: 2001,
      rated: "PG-13",
      runtime: "178 min",
      genre: ["Action", "Adventure", "Drama"],
      director: "Peter Jackson",
      actors: "Elijah Wood, Ian McKellen, Orlando Bloom, Viggo Mortensen",
      plot: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
      rating: 8.9,
      poster: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&auto=format&fit=crop&q=80",
      imdbUrl: "https://www.imdb.com/title/tt0120737/"
    },
    {
      id: "tt0245429",
      title: "Spirited Away",
      year: 2001,
      rated: "PG",
      runtime: "125 min",
      genre: ["Animation", "Adventure", "Family"],
      director: "Hayao Miyazaki",
      actors: "Daveigh Chase, Suzanne Pleshette, Miyu Irino, Rumi Hiiragi",
      plot: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches and spirits, a world where humans are changed into beasts.",
      rating: 8.6,
      poster: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&auto=format&fit=crop&q=80",
      imdbUrl: "https://www.imdb.com/title/tt0245429/"
    },
    {
      id: "tt4633694",
      title: "Spider-Man: Into the Spider-Verse",
      year: 2018,
      rated: "PG",
      runtime: "117 min",
      genre: ["Animation", "Action", "Adventure"],
      director: "Bob Persichetti, Peter Ramsey, Rodney Rothman",
      actors: "Shameik Moore, Jake Johnson, Hailee Steinfeld, Mahershala Ali",
      plot: "Teen Miles Morales becomes the new Spider-Man and joins other Spider-Heroes from alternate dimensions to stop a threat to all reality.",
      rating: 8.4,
      poster: "https://images.unsplash.com/photo-1604200213928-ba3cf4fc8436?w=500&auto=format&fit=crop&q=80",
      imdbUrl: "https://www.imdb.com/title/tt4633694/"
    },
    {
      id: "tt0172495",
      title: "Gladiator",
      year: 2000,
      rated: "R",
      runtime: "155 min",
      genre: ["Action", "Adventure", "Drama"],
      director: "Ridley Scott",
      actors: "Russell Crowe, Joaquin Phoenix, Connie Nielsen, Oliver Reed",
      plot: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
      rating: 8.5,
      poster: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=500&auto=format&fit=crop&q=80",
      imdbUrl: "https://www.imdb.com/title/tt0172495/"
    },
    {
      id: "tt7286456",
      title: "Joker",
      year: 2019,
      rated: "R",
      runtime: "122 min",
      genre: ["Crime", "Drama", "Thriller"],
      director: "Todd Phillips",
      actors: "Joaquin Phoenix, Robert De Niro, Zazie Beetz, Frances Conroy",
      plot: "During the 1980s, a failed stand-up comedian is driven to insanity and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
      rating: 8.4,
      poster: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=500&auto=format&fit=crop&q=80",
      imdbUrl: "https://www.imdb.com/title/tt7286456/"
    },
    {
      id: "tt1856101",
      title: "Blade Runner 2049",
      year: 2017,
      rated: "R",
      runtime: "164 min",
      genre: ["Action", "Drama", "Sci-Fi"],
      director: "Denis Villeneuve",
      actors: "Ryan Gosling, Harrison Ford, Ana de Armas, Dave Bautista",
      plot: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
      rating: 8.0,
      poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=80",
      imdbUrl: "https://www.imdb.com/title/tt1856101/"
    },
    {
      id: "tt0107290",
      title: "Jurassic Park",
      year: 1993,
      rated: "PG-13",
      runtime: "127 min",
      genre: ["Action", "Adventure", "Sci-Fi"],
      director: "Steven Spielberg",
      actors: "Sam Neill, Laura Dern, Jeff Goldblum, Richard Attenborough",
      plot: "A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
      rating: 8.2,
      poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=80",
      imdbUrl: "https://www.imdb.com/title/tt0107290/"
    },
    {
      id: "tt1130884",
      title: "Shutter Island",
      year: 2010,
      rated: "R",
      runtime: "138 min",
      genre: ["Mystery", "Thriller"],
      director: "Martin Scorsese",
      actors: "Leonardo DiCaprio, Emily Mortimer, Mark Ruffalo, Ben Kingsley",
      plot: "In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.",
      rating: 8.2,
      poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=80",
      imdbUrl: "https://www.imdb.com/title/tt1130884/"
    },
    {
      id: "tt0114388",
      title: "Se7en",
      year: 1995,
      rated: "R",
      runtime: "127 min",
      genre: ["Crime", "Drama", "Mystery"],
      director: "David Fincher",
      actors: "Morgan Freeman, Brad Pitt, Kevin Spacey, Gwyneth Paltrow",
      plot: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
      rating: 8.6,
      poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&auto=format&fit=crop&q=80",
      imdbUrl: "https://www.imdb.com/title/tt0114388/"
    },
    {
      id: "tt0910970",
      title: "WALL-E",
      year: 2008,
      rated: "G",
      runtime: "98 min",
      genre: ["Animation", "Adventure", "Family"],
      director: "Andrew Stanton",
      actors: "Ben Burtt, Elissa Knight, Jeff Garlin, Fred Willard",
      plot: "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.",
      rating: 8.4,
      poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop&q=80",
      imdbUrl: "https://www.imdb.com/title/tt0910970/"
    },
    {
      id: "tt8946378",
      title: "Knives Out",
      year: 2019,
      rated: "PG-13",
      runtime: "130 min",
      genre: ["Comedy", "Drama", "Mystery"],
      director: "Rian Johnson",
      actors: "Daniel Craig, Chris Evans, Ana de Armas, Jamie Lee Curtis",
      plot: "A detective investigates the death of the patriarch of an eccentric, combative family.",
      rating: 7.9,
      poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&auto=format&fit=crop&q=80",
      imdbUrl: "https://www.imdb.com/title/tt8946378/"
    },
    {
      id: "tt0241527",
      title: "Harry Potter and the Sorcerer's Stone",
      year: 2001,
      rated: "PG",
      runtime: "152 min",
      genre: ["Adventure", "Family", "Fantasy"],
      director: "Chris Columbus",
      actors: "Daniel Radcliffe, Rupert Grint, Emma Watson, Richard Harris",
      plot: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
      rating: 7.6,
      poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&auto=format&fit=crop&q=80",
      imdbUrl: "https://www.imdb.com/title/tt0241527/"
    },
    {
      id: "tt2543164",
      title: "Arrival",
      year: 2016,
      rated: "PG-13",
      runtime: "116 min",
      genre: ["Drama", "Mystery", "Sci-Fi"],
      director: "Denis Villeneuve",
      actors: "Amy Adams, Jeremy Renner, Forest Whitaker, Michael Stuhlbarg",
      plot: "A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.",
      rating: 7.9,
      poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop&q=80",
      imdbUrl: "https://www.imdb.com/title/tt2543164/"
    },
    {
      id: "tt10366206",
      title: "John Wick: Chapter 4",
      year: 2023,
      rated: "R",
      runtime: "169 min",
      genre: ["Action", "Crime", "Thriller"],
      director: "Chad Stahelski",
      actors: "Keanu Reeves, Donnie Yen, Bill Skarsgård, Laurence Fishburne",
      plot: "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe.",
      rating: 7.7,
      poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&auto=format&fit=crop&q=80",
      imdbUrl: "https://www.imdb.com/title/tt10366206/"
    },
    {
      id: "tt1630029",
      title: "Avatar: The Way of Water",
      year: 2022,
      rated: "PG-13",
      runtime: "192 min",
      genre: ["Action", "Adventure", "Fantasy"],
      director: "James Cameron",
      actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      plot: "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.",
      rating: 7.6,
      poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop&q=80",
      imdbUrl: "https://www.imdb.com/title/tt1630029/"
    },
    {
      id: "tt0110357",
      title: "The Lion King",
      year: 1994,
      rated: "G",
      runtime: "88 min",
      genre: ["Animation", "Adventure", "Drama"],
      director: "Roger Allers, Rob Minkoff",
      actors: "Matthew Broderick, Jeremy Irons, James Earl Jones, Whoopi Goldberg",
      plot: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
      rating: 8.5,
      poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&auto=format&fit=crop&q=80",
      imdbUrl: "https://www.imdb.com/title/tt0110357/"
    },
    {
      id: "tt1392190",
      title: "Mad Max: Fury Road",
      year: 2015,
      rated: "R",
      runtime: "120 min",
      genre: ["Action", "Adventure", "Sci-Fi"],
      director: "George Miller",
      actors: "Tom Hardy, Charlize Theron, Nicholas Hoult, Zoë Kravitz",
      plot: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper and a drifter named Max.",
      rating: 8.1,
      poster: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=500&auto=format&fit=crop&q=80",
      imdbUrl: "https://www.imdb.com/title/tt1392190/"
    }
  ];

  // WATCHLIST PERSISTENCE
  const WATCHLIST_KEY = "framefinder-watchlist";
  let watchlist = JSON.parse(localStorage.getItem(WATCHLIST_KEY) || "[]");

  function saveWatchlist() {
    localStorage.setItem(WATCHLIST_KEY, JSON.stringify(watchlist));
    updateWatchlistCount();
  }

  function updateWatchlistCount() {
    const countBadge = document.getElementById("watchlistCount");
    if (countBadge) {
      countBadge.textContent = watchlist.length;
    }
  }
  updateWatchlistCount();

  // DOM Elements
  const queryInput = document.getElementById("query");
  const clearSearchBtn = document.getElementById("clearSearch");
  const searchForm = document.getElementById("searchForm");
  const genreChips = document.querySelectorAll(".genre-chip");
  const sortSelect = document.getElementById("sortSelect");
  const resultsGrid = document.getElementById("results");
  const statusEl = document.getElementById("status");
  const noResultsEl = document.getElementById("noResults");
  const resetFiltersBtn = document.getElementById("resetFiltersBtn");
  const watchlistBtn = document.getElementById("watchlistBtn");

  // Modal Elements
  const modalBackdrop = document.getElementById("movieModal");
  const modalClose = document.getElementById("modalClose");
  const modalBody = document.getElementById("modalBody");

  // State
  let currentSearch = "";
  let selectedGenre = "all";
  let currentSort = "rating";
  let isWatchlistOnly = false;

  // Fallback SVG Poster Generator (Graceful offline/image fail)
  function createFallbackSvg(title, genre) {
    const encodedTitle = encodeURIComponent(title);
    return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="450" viewBox="0 0 300 450"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%231e293b"/><stop offset="100%" stop-color="%230f172a"/></linearGradient></defs><rect width="300" height="450" fill="url(%23g)"/><circle cx="150" cy="180" r="45" fill="%23f59e0b" opacity="0.2"/><text x="150" y="190" font-family="sans-serif" font-size="34" fill="%23f59e0b" text-anchor="middle">🎬</text><text x="150" y="270" font-family="sans-serif" font-size="16" font-weight="bold" fill="%23f8fafc" text-anchor="middle">${encodedTitle}</text><text x="150" y="300" font-family="sans-serif" font-size="12" fill="%2394a3b8" text-anchor="middle">${genre || "Cinema"}</text></svg>`;
  }

  // RENDER MOVIES
  function renderMovies() {
    let list = [...MOVIES_DATABASE];

    // Filter by Watchlist
    if (isWatchlistOnly) {
      list = list.filter((m) => watchlist.includes(m.id));
    }

    // Filter by Genre
    if (selectedGenre !== "all") {
      list = list.filter((m) => m.genre.includes(selectedGenre));
    }

    // Filter by Search Query
    if (currentSearch) {
      const q = currentSearch.toLowerCase();
      list = list.filter((m) => {
        return (
          m.title.toLowerCase().includes(q) ||
          m.director.toLowerCase().includes(q) ||
          m.actors.toLowerCase().includes(q) ||
          m.genre.some((g) => g.toLowerCase().includes(q)) ||
          String(m.year).includes(q) ||
          m.plot.toLowerCase().includes(q)
        );
      });
    }

    // Sort
    list.sort((a, b) => {
      if (currentSort === "rating") return b.rating - a.rating;
      if (currentSort === "year-desc") return b.year - a.year;
      if (currentSort === "year-asc") return a.year - b.year;
      if (currentSort === "title") return a.title.localeCompare(b.title);
      return 0;
    });

    resultsGrid.innerHTML = "";

    if (list.length === 0) {
      noResultsEl.hidden = false;
      resultsGrid.hidden = true;
      statusEl.textContent = `0 results found`;
      return;
    }

    noResultsEl.hidden = true;
    resultsGrid.hidden = false;

    // Status description
    let filterDescription = selectedGenre !== "all" ? `${selectedGenre} movies` : "titles";
    if (isWatchlistOnly) filterDescription = "saved in your Watchlist";
    if (currentSearch) filterDescription += ` matching “${currentSearch}”`;
    statusEl.textContent = `Showing ${list.length} ${filterDescription}`;

    // Render Cards
    list.forEach((movie) => {
      const card = document.createElement("article");
      card.className = "movie-card";
      card.dataset.id = movie.id;

      const isSaved = watchlist.includes(movie.id);

      card.innerHTML = `
        <div class="poster-wrap">
          <img 
            class="poster-img" 
            src="${movie.poster}" 
            alt="${movie.title} poster" 
            loading="lazy"
            onerror="this.onerror=null; this.src='${createFallbackSvg(movie.title, movie.genre[0])}'"
          >
          <div class="rating-badge">★ ${movie.rating.toFixed(1)}</div>
          <button 
            type="button" 
            class="bookmark-btn ${isSaved ? "saved" : ""}" 
            data-id="${movie.id}"
            title="${isSaved ? "Remove from Watchlist" : "Add to Watchlist"}"
            aria-label="Toggle Watchlist"
          >${isSaved ? "★" : "☆"}</button>
        </div>
        <div class="movie-info">
          <h3>${movie.title}</h3>
          <div class="movie-meta">
            <span>${movie.year}</span>
            <span>&bull;</span>
            <span>${movie.runtime}</span>
          </div>
          <div class="movie-genre-tags">
            ${movie.genre.slice(0, 2).map((g) => `<span>${g}</span>`).join("")}
          </div>
        </div>
      `;

      // Card click opens modal (unless clicking bookmark button)
      card.addEventListener("click", (e) => {
        if (e.target.closest(".bookmark-btn")) return;
        openMovieModal(movie);
      });

      // Bookmark button toggle
      const bBtn = card.querySelector(".bookmark-btn");
      bBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleWatchlist(movie.id);
      });

      resultsGrid.append(card);
    });
  }

  function toggleWatchlist(movieId) {
    if (watchlist.includes(movieId)) {
      watchlist = watchlist.filter((id) => id !== movieId);
    } else {
      watchlist.push(movieId);
    }
    saveWatchlist();
    renderMovies();
  }

  // OPEN MODAL
  function openMovieModal(movie) {
    const isSaved = watchlist.includes(movie.id);

    modalBody.innerHTML = `
      <div class="modal-poster-col">
        <img 
          src="${movie.poster}" 
          alt="${movie.title}" 
          onerror="this.onerror=null; this.src='${createFallbackSvg(movie.title, movie.genre[0])}'"
        >
      </div>
      <div class="modal-content-col">
        <h2>${movie.title}</h2>
        <div class="modal-meta-row">
          <span class="modal-rating">★ ${movie.rating.toFixed(1)}/10</span>
          <span>&bull;</span>
          <span>${movie.year}</span>
          <span>&bull;</span>
          <span>${movie.rated}</span>
          <span>&bull;</span>
          <span>${movie.runtime}</span>
        </div>

        <div class="movie-genre-tags" style="margin-bottom:16px;">
          ${movie.genre.map((g) => `<span>${g}</span>`).join("")}
        </div>

        <p class="modal-plot">${movie.plot}</p>

        <div class="modal-credits">
          <div><span>Director:</span> <strong>${movie.director}</strong></div>
          <div><span>Cast:</span> <strong>${movie.actors}</strong></div>
        </div>

        <div class="modal-actions">
          <button type="button" id="modalWatchlistBtn" class="modal-btn ${isSaved ? "secondary" : "primary"}">
            ${isSaved ? "★ In Watchlist" : "+ Add to Watchlist"}
          </button>
          <a href="${movie.imdbUrl}" target="_blank" rel="noopener noreferrer" class="modal-btn secondary">
            View on IMDb ↗
          </a>
        </div>
      </div>
    `;

    const mWatchlistBtn = document.getElementById("modalWatchlistBtn");
    mWatchlistBtn.addEventListener("click", () => {
      toggleWatchlist(movie.id);
      const nowSaved = watchlist.includes(movie.id);
      mWatchlistBtn.className = `modal-btn ${nowSaved ? "secondary" : "primary"}`;
      mWatchlistBtn.textContent = nowSaved ? "★ In Watchlist" : "+ Add to Watchlist";
    });

    modalBackdrop.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modalBackdrop.hidden = true;
    document.body.style.overflow = "";
  }

  modalClose.addEventListener("click", closeModal);
  modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modalBackdrop.hidden) closeModal();
  });

  // SEARCH INPUT HANDLERS
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    currentSearch = queryInput.value.trim();
    renderMovies();
  });

  queryInput.addEventListener("input", (e) => {
    currentSearch = e.target.value.trim();
    clearSearchBtn.hidden = currentSearch.length === 0;
    renderMovies();
  });

  clearSearchBtn.addEventListener("click", () => {
    queryInput.value = "";
    currentSearch = "";
    clearSearchBtn.hidden = true;
    renderMovies();
    queryInput.focus();
  });

  // GENRE CHIPS
  genreChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      genreChips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      selectedGenre = chip.dataset.genre;
      renderMovies();
    });
  });

  // SORT
  sortSelect.addEventListener("change", (e) => {
    currentSort = e.target.value;
    renderMovies();
  });

  // WATCHLIST TOGGLE NAV
  watchlistBtn.addEventListener("click", () => {
    isWatchlistOnly = !isWatchlistOnly;
    watchlistBtn.classList.toggle("active", isWatchlistOnly);
    renderMovies();
  });

  // RESET FILTERS
  resetFiltersBtn.addEventListener("click", () => {
    currentSearch = "";
    queryInput.value = "";
    clearSearchBtn.hidden = true;
    selectedGenre = "all";
    genreChips.forEach((c) => c.classList.toggle("active", c.dataset.genre === "all"));
    isWatchlistOnly = false;
    watchlistBtn.classList.remove("active");
    currentSort = "rating";
    sortSelect.value = "rating";
    renderMovies();
  });

  // Initial load
  renderMovies();
});