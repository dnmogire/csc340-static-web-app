// Player data array
const players = [
    {
        name: "Bruno Fernandes",
        position: "Midfielder",
        nationality: "Portugal",
        number: 8,
        club: "Manchester United",
        image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400&h=300&fit=crop",
        summary: "Portuguese midfielder known for his creativity and leadership on the field. Captain of Manchester United with excellent passing and goal-scoring abilities."
    },
    {
        name: "Matheus Cunha",
        position: "Forward",
        nationality: "Brazil",
        number: 12,
        club: "Wolverhampton",
        image: "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=400&h=300&fit=crop",
        summary: "Brazilian forward with great dribbling skills and finishing ability. Known for his versatility in attacking positions and technical prowess."
    },
    {
        name: "Casemiro",
        position: "Midfielder",
        nationality: "Brazil",
        number: 18,
        club: "Manchester United",
        image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=400&h=300&fit=crop",
        summary: "Defensive midfielder with exceptional tackling and positioning. World Cup winner with Brazil and multiple Champions League titles."
    },
    {
        name: "Lisandro Martínez",
        position: "Defender",
        nationality: "Argentina",
        number: 6,
        club: "Manchester United",
        image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop",
        summary: "Argentine defender known for his aggressive style and ball-playing ability. World Cup winner and a key player in Manchester United's defense."
    },
    {
        name: "Senne Lammens",
        position: "Goalkeeper",
        nationality: "Belgium",
        number: 1,
        club: "Club Brugge",
        image: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=400&h=300&fit=crop",
        summary: "Belgian goalkeeper with excellent shot-stopping abilities and good distribution. Young talent showing promise in the Belgian league."
    }
];

// Load players when page loads
window.addEventListener('DOMContentLoaded', function() {
    displayPlayers(players);
    setupSearch();
});

// Function to display players
function displayPlayers(playerList) {
    const gallery = document.getElementById('playerGallery');
    
    if (playerList.length === 0) {
        gallery.innerHTML = '<p style="text-align: center; padding: 20px;">No players found.</p>';
        return;
    }
    
    gallery.innerHTML = '';
    
    playerList.forEach(player => {
        const card = document.createElement('div');
        card.className = 'player-card';
        
        card.innerHTML = `
            <img src="${player.image}" alt="${player.name}" class="player-image">
            <div class="player-content">
                <h3>${player.name}</h3>
                <span class="position">${player.position}</span>
                <div class="player-info">
                    <p><strong>Nationality:</strong> ${player.nationality}</p>
                    <p><strong>Number:</strong> #${player.number}</p>
                    <p><strong>Club:</strong> ${player.club}</p>
                </div>
                <div class="player-summary">
                    ${player.summary}
                </div>
            </div>
        `;
        
        gallery.appendChild(card);
    });
}

// Setup search functionality
function setupSearch() {
    const searchBar = document.getElementById('searchBar');
    
    searchBar.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        
        const filtered = players.filter(player => {
            return player.name.toLowerCase().includes(searchTerm) ||
                   player.position.toLowerCase().includes(searchTerm) ||
                   player.nationality.toLowerCase().includes(searchTerm) ||
                   player.club.toLowerCase().includes(searchTerm);
        });
        
        displayPlayers(filtered);
    });
}
