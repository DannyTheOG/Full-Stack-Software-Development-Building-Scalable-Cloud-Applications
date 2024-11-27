let mainPage = document.getElementById( "main" )
let movieList = document.getElementById( "movie-list" )
let searchInput = document.getElementById( "search" )

let moviesData = movies

// display all movies
function displayMovies( moviesData ) {
    let moviesCard = moviesData.map( createMovieCardHTML ).join("")
 
    movieList.innerHTML = moviesCard;
}

function createMovieCardHTML( movie ) {
    let card = `
        <div class = "movie-card" onclick= "movieDetails( this )">
            <h2>${movie.title}</h2>
            <img src = ${movie.image} style = "width: 100%;">
            <p>Genre: ${movie.genre}</p>
            <p>Director: ${movie.director}</p>
            <p>Release Year: ${movie.releaseYear}</p>
        </div>
    `
    return card
}


// search movies by term
searchInput.addEventListener( "input", searchMovie )

function searchMovie() {
    let filteredMovies = moviesData.filter( filterMovies )

    displayMovies( filteredMovies )
}

function filterMovies( movie ) {
    let searchTeam = searchInput.value.toLowerCase()

    let searchString = `${movie.title}${movie.genre}${movie.director}${movie.cast.join('')}`.toLowerCase()

    let searchResult = searchString.includes( searchTeam )

    return searchResult;
}

function movieDetails( element ) {
    let movieTitle = element.querySelector( "h2" ).textContent 

    if( movieTitle ) {
        let selectedMovie = moviesData.find( ( movie ) => {
            if( movie.title === movieTitle)
                return movie
        } )

        displayMovieDetails( selectedMovie )
    }
}

function displayMovieDetails( movie ) {
    let movieDetailsHTML = `
        <button onclick = "window.location.reload()">Back</button>
        <h2>${movie.title}</h2>
        <img src = ${movie.image}>
        <p>Genre: ${movie.genre}</p>
        <p>Director: ${movie.director}</p>
        <p>Release Year: ${movie.releaseYear}</p>
        <p>Plot: ${movie.plot}</p>
        <p>Cast: ${movie.cast}</p>
    `

    mainPage.innerHTML = movieDetailsHTML;
}


displayMovies( moviesData )