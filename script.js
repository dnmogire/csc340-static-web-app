const players = [
  {
    id: "bruno-fernandes",
    name: "Bruno Fernandes",
    position: "Attacking Midfielder",
    squadNumber: "8",
    nationality: "Portugal",
    role: "Captain / Creator",
    strengths: "Chance creation, leadership, passing range, pressing",
    weakness: "High-risk passes can lead to turnovers",
    bio: "Bruno is the team’s main creator and tempo-setter. He leads with intensity, demands the ball, and consistently produces chances through through-balls, switches of play, and quick combinations.",
    image: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=800&q=60",
    summary: "United’s creative engine — constant chances, constant energy."
  },
  {
    id: "marcus-rashford",
    name: "Marcus Rashford",
    position: "Forward / Winger",
    squadNumber: "10",
    nationality: "England",
    role: "Direct attacker",
    strengths: "Speed in behind, shooting from the left, counter-attacks",
    weakness: "Form can be streaky; decision-making under pressure",
    bio: "Rashford is most dangerous running into space and attacking the box from the left. When he’s confident, he stretches defenses and creates big moments with direct dribbling and powerful finishing.",
    image: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=800&q=60",
    summary: "Explosive threat who can change a match in one run."
  },
  {
    id: "kobbie-mainoo",
    name: "Kobbie Mainoo",
    position: "Central Midfielder",
    squadNumber: "37",
    nationality: "England",
    role: "Press-resistant connector",
    strengths: "Composure, close control, smart positioning, ball retention",
    weakness: "Still developing physicality and match management",
    bio: "Mainoo plays with calm beyond his years. He receives under pressure, turns away from markers, and keeps United moving forward with simple but smart decisions.",
    image: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=800&q=60",
    summary: "Young midfielder with elite calm and clean technique."
  },
  {
    id: "lisandro-martinez",
    name: "Lisandro Martínez",
    position: "Centre-Back",
    squadNumber: "6",
    nationality: "Argentina",
    role: "Aggressive defender",
    strengths: "Tackling, anticipation, passing out from the back, intensity",
    weakness: "Can be targeted aerially by taller forwards",
    bio: "Martínez brings aggression, leadership, and ball progression from defense. He steps into midfield, breaks lines with passes, and sets the tone with front-foot defending.",
    image: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=800&q=60",
    summary: "Front-foot defender who raises the team’s intensity."
  },
  {
    id: "andre-onana",
    name: "André Onana",
    position: "Goalkeeper",
    squadNumber: "24",
    nationality: "Cameroon",
    role: "Sweeper-keeper",
    strengths: "Distribution, sweeping, composure in build-up",
    weakness: "High-risk style can punish mistakes",
    bio: "Onana is a modern goalkeeper who helps United play out from the back. He’s comfortable under pressure and can launch attacks with sharp passing, but the aggressive approach demands focus.",
    image: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=800&q=60",
    summary: "Build-up goalkeeper who helps United play through pressure."
  }
];

function qs(sel){ return document.querySelector(sel); }

function render(list){
  const grid = qs("#grid");
  grid.innerHTML = "";

  list.forEach(p => {
    const card = document.createElement("article");
    card.className = "card";

    card.innerHTML = `
      <img src="${p.image}" alt="${p.name} image">
      <div class="card-content">
        <h3>${p.name}</h3>
        <div class="meta">#${p.squadNumber} • ${p.position} • ${p.nationality}</div>
        <p class="summary">${p.summary}</p>
        <div class="actions">
          <a class="btn primary" href="details.html?id=${encodeURIComponent(p.id)}">View details</a>
          <a class="btn" href="form.html">Add a player</a>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  qs("#count").textContent = `${list.length} shown`;
}

function filter(){
  const q = qs("#search").value.trim().toLowerCase();
  const filtered = players.filter(p => {
    const blob = `${p.name} ${p.position} ${p.nationality} ${p.role} ${p.strengths} ${p.summary}`.toLowerCase();
    return blob.includes(q);
  });
  render(filtered);
}

document.addEventListener("DOMContentLoaded", () => {
  render(players);
  qs("#search").addEventListener("input", filter);
});
