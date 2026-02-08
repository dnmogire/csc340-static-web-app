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
    image: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=900&q=60",
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
    image: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=900&q=60",
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
    image: "https://images.unsplash.com/photo-1520975919032-1c3f7d1f0a2f?auto=format&fit=crop&w=900&q=60",
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
    image: "https://images.unsplash.com/photo-1520975909018-9e8df35c8f1d?auto=format&fit=crop&w=900&q=60",
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
    image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=900&q=60",
    summary: "Build-up goalkeeper who helps United play through pressure."
  }
];

function getId(){
  const params = new URLSearchParams(window.location.search);
  return params.get("id") || "bruno-fernandes";
}

document.addEventListener("DOMContentLoaded", () => {
  const id = getId();
  const p = players.find(x => x.id === id) || players[0];

  document.querySelector("#img").src = p.image;
  document.querySelector("#img").alt = `${p.name} image`;
  document.querySelector("#name").textContent = p.name;
  document.querySelector("#summary").textContent = p.summary;

  document.querySelector("#number").textContent = p.squadNumber;
  document.querySelector("#position").textContent = p.position;
  document.querySelector("#nationality").textContent = p.nationality;
  document.querySelector("#role").textContent = p.role;
  document.querySelector("#strengths").textContent = p.strengths;
  document.querySelector("#weakness").textContent = p.weakness;
  document.querySelector("#bio").textContent = p.bio;

  const other = document.querySelector("#other");
  other.innerHTML = "";
  players.filter(x => x.id !== p.id).forEach(x => {
    const a = document.createElement("a");
    a.className = "btn";
    a.href = `details.html?id=${encodeURIComponent(x.id)}`;
    a.textContent = x.name;
    other.appendChild(a);
  });
});
