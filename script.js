// Player data
const players = [
    {
        name: "Bruno Fernandes",
        position: "Midfielder",
        nationality: "Portugal",
        number: 8,
        role: "Captain & Playmaker",
        summary: "Creative midfielder and team captain known for exceptional vision, passing ability, and goal-scoring prowess from midfield."
    },
    {
        name: "Marcus Rashford",
        position: "Forward",
        nationality: "England",
        number: 10,
        role: "Winger & Forward",
        summary: "Pacey forward with clinical finishing and dribbling skills. Known for his social activism and community work off the pitch."
    },
    {
        name: "Casemiro",
        position: "Midfielder",
        nationality: "Brazil",
        number: 18,
        role: "Defensive Midfielder",
        summary: "World-class defensive midfielder providing protection to the backline with exceptional tackling and positioning."
    },
    {
        name: "Lisandro Martínez",
        position: "Defender",
        nationality: "Argentina",
        number: 6,
        role: "Center Back",
        summary: "Tenacious defender known for his aggressive style, ball-playing ability, and leadership at the heart of defense."
    },
    {
        name: "André Onana",
        position: "Goalkeeper",
        nationality: "Cameroon",
        number: 24,
        role: "Goalkeeper",
        summary: "Modern goalkeeper excellent with his feet, commanding presence in the box, and shot-stopping abilities."
    }
];

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    renderPlayers(players);
    setupSearch();
    animateOnScroll();
});

// Render player cards
function renderPlayers(playersToRender) {
    const grid = document.getElementById('playersGrid');
    const noResults = document.getElementById('noResults');
    const resultCount = document.getElementById('resultCount');
    
    if (playersToRender.length === 0) {
        grid.innerHTML = '';
        noResults.classList.add('show');
        resultCount.textContent = '0';
        return;
    }
    
    noResults.classList.remove('show');
    resultCount.textContent = playersToRender.length;
    
    grid.innerHTML = playersToRender.map((player, index) => `
        <div class="player-card" style="animation: fadeInUp 0.6s ease ${index * 0.1}s both">
            <div class="player-image">
                #${player.number}
            </div>
            <div class="player-info">
                <h3 class="player-name">${player.name}</h3>
                <span class="player-position">${player.position}</span>
                <div class="player-details">
                    <div class="detail-row">
                        <span class="detail-label">Nationality</span>
                        <span class="detail-value">${player.nationality}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Number</span>
                        <span class="detail-value">#${player.number}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Role</span>
                        <span class="detail-value">${player.role}</span>
                    </div>
                </div>
                <p class="player-summary">${player.summary}</p>
            </div>
        </div>
    `).join('');
}

// Setup search functionality
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        
        if (searchTerm === '') {
            renderPlayers(players);
            return;
        }
        
        const filteredPlayers = players.filter(player => {
            return (
                player.name.toLowerCase().includes(searchTerm) ||
                player.position.toLowerCase().includes(searchTerm) ||
                player.nationality.toLowerCase().includes(searchTerm) ||
                player.role.toLowerCase().includes(searchTerm) ||
                player.number.toString().includes(searchTerm)
            );
        });
        
        renderPlayers(filteredPlayers);
    });
    
    // Clear search on Escape key
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            searchInput.value = '';
            renderPlayers(players);
        }
    });
}

// Animate elements on scroll
function animateOnScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate
    document.querySelectorAll('.player-card, .search-section, .footer-section').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Add smooth scrolling to navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
