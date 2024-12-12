console.log( songs )
const originalPlaylist = [...songs]

const playButton = document.getElementById( "play-button" )
const audio = document.getElementById( "audio" )
const nextButton = document.getElementById( "next-button" )
const prevButton = document.getElementById( "prev-button" )
const songTitleText = document.getElementById( "song-title" )
const songArtistText = document.getElementById( "song-artist" )
const songList = document.getElementById( "song-list" )
const searchInput = document.getElementById( "search-input" )
const shuffleButton = document.getElementById( "shuffle-button" )


let currentSongIndex = 0
let isShuffleMode = false


function updateNowPlaying() {
    songTitleText.textContent = songs[currentSongIndex].title
    songArtistText.textContent = songs[currentSongIndex]["artist-name"]
}

function playCurrentSong( playlist ) {
    audio.src = playlist[currentSongIndex].url
    audio.play()

    updateNowPlaying()
}

function displayPlaylist( playlist ) {
    songList.innerHTML = ""

    for (const song of playlist) {
        songItem = document.createElement( "li" )
        songItem.innerHTML = song.title

        songList.appendChild( songItem )
    }
}

playButton.addEventListener( "click", () => playCurrentSong( isShuffleMode ? songs : originalPlaylist ) )

nextButton.addEventListener( "click", () => {
    currentSongIndex = ( currentSongIndex + 1 ) % songs.length

    playCurrentSong( isShuffleMode ? songs : originalPlaylist )
} )

prevButton.addEventListener( "click", () => {
    currentSongIndex = ( currentSongIndex - 1 + songs.length ) % songs.length

    playCurrentSong( isShuffleMode ? songs : originalPlaylist )
} )

songList.addEventListener( "click", ( event ) => {
    if( event.target.tagName === "LI" ) {
        currentSongIndex = [...songList.children].indexOf( event.target )
        playCurrentSong( isShuffleMode ? songs : originalPlaylist )
    }
} )

searchInput.addEventListener( "input", ( event ) => {
    const searchTerm = event.target.value.toLowerCase()

    console.log( searchTerm )

    const searchList = songs.filter( ( song ) => {
        return song.title.toLowerCase().includes( searchTerm ) 
    } )

    displayPlaylist( searchList )
} )

shuffleButton.addEventListener( "click", ( event ) => {
    isShuffleMode = !isShuffleMode
    currentSongIndex = 0

    if (isShuffleMode) {
        event.target.textContent = "Click to UnShuffle"
        
        for ( let i = songs.length - 1; i > 0 ; i-- ) {
            const j = Math.floor( Math.random() * ( i + 1 ) );

            [ songs[i], songs[j] ] = [ songs[j], songs[i] ] 
        }

        displayPlaylist( songs )
        playCurrentSong( songs )
    } else {
        event.target.textContent = "Click to Shuffle"
        displayPlaylist( originalPlaylist )
        playCurrentSong( originalPlaylist )
    }
} )


updateNowPlaying()
displayPlaylist( songs )