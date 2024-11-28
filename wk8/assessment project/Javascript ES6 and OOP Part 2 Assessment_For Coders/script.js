// Get references to HTML elements
const clubList = document.getElementById('club-list');
const searchInput = document.getElementById('search');
const clubDetailsContainer = document.getElementById('main');

// Attach an input event listener for the search input
searchInput.addEventListener('input', handleSearchInput);

// Initialize football club data and display all clubs
let clubData = footballClubs; 
displayClubs(footballClubs);


// Display football clubs in the club list
function displayClubs(clubs) {
    // Generate HTML for club cards and set it in the clubList element
    const clubCardsHTML = clubs.map(createClubCardHTML).join('');
    clubList.innerHTML = clubCardsHTML;
}

// Create HTML for a football club card
function createClubCardHTML(club) {
    return `
        <div class="club-card" onclick="handleClubClick(this);"><!-- Add onclick event -->
            <h2>${club.name}</h2>
            <img src="${club.image}" alt="${club.name} Image" style="width:100%; height:20vh;">
            <p><b>League: </b>${club.league}</p>
            <p><b>City: </b>${club.city}</p>
            <button onclick="viewClubPlayers('${club.name}'); event.stopPropagation();" style="width:100%;">View Players</button>
        </div>
    `;
}

// Handle clicking on a football club card
function handleClubClick(element) {
    // Write your code here for task1
    let clubName = element.querySelector( "h2" ).textContent

    if( clubName ) {
        let selectedClub = clubData.find( ( club ) => {
            if( club.name === clubName )
                return club
        })
        
        displayClubDetails( selectedClub )
    }
}

// Display football club details
function displayClubDetails(club) {
   // Write your code here for task2
   let clubDetailsHTML = `
        <div id="club-details">
        <button onclick = "window.location.reload()">Back</button>
        <h2>${club.name}</h2>
        <img src = ${club.image} alt="${club.name} Image" style="width:100%; height:20vh;">
        <p><b>League: </b>${club.league}</p>
        <p><b>City: </b>${club.city}</p>
        <p><b>Stadium: </b>${club.stadium}</p>
        <button onclick = "viewClubPlayers('${club.name}'); event.stopPropagation();">View Players</button>
        <p><b>Description: </b>${club.description}</p>
        </div>
    `

    clubDetailsContainer.innerHTML = clubDetailsHTML;
}

// Function to view club players
function viewClubPlayers(clubName) {
   // Write your code here for task3
   let selectedClub = {};

   if( clubName ) {
        selectedClub = clubData.find( ( club ) => {
            if( club.name === clubName )
                return club
        })
    }

    displayClubPlayers( selectedClub )
}

function displayClubPlayers( club ) {
    let clubPlayersHTML = `
        <button onclick = "window.location.reload()">Back</button>
        <h2>${club.name} Players</h2>
    `
    let { players } = club

    players.map( (player) => {
        clubPlayersHTML += `
            <p><b>Name: </b>${player.name}</p>
            <p><b>Position: </b>${player.position}</p>
            <p><b>Goals: </b>${player.goals}</p>
            <p><b>Assists: </b>${player.assists}</p>
            <hr>
        `
    } )

    clubDetailsContainer.innerHTML = clubPlayersHTML;
}


// Handle search input and filter clubs
function handleSearchInput() {
    // Write your code here for task4
    let filteredClubs = clubData.filter( filterClubs )

    displayClubs( filteredClubs )
}

function filterClubs( club ) {
    let searchTerm = searchInput.value.toLowerCase()

    let searchString = `${club.name}${club.league}${club.city}`.toLowerCase()

    let searchClub =  searchString.includes( searchTerm )

    return searchClub
}