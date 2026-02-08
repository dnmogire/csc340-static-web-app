const characters = [
  {
    id: "nova-kai",
    name: "Nova Kai",
    alias: "Skyline Sentinel",
    role: "Hero",
    faction: "Aether Guard",
    power: "Gravity stitching (can “sew” space for short bursts)",
    weakness: "Overuse causes vertigo + temporary tunnel vision",
    firstAppearance: "Issue #1 (fictional)",
    image: "https://images.unsplash.com/photo-1520975958225-79b0f4aa3f5a?auto=format&fit=crop&w=600&q=60",
    summary: "A calm protector who stabilizes collapsing zones in the floating city of Lumenrise.",
    bio: "Nova Kai is known for precision under pressure. She patrols Lumenrise’s sky-bridges, preventing disasters before they happen. Her gravity stitching is powerful but dangerously disorienting if pushed too far."
  },
  {
    id: "riven-drax",
    name: "Riven Drax",
    alias: "Neon Warden",
    role: "Anti-Hero",
    faction: "Independent",
    power: "Light refraction armor (hard-light shields + illusions)",
    weakness: "Bright sunlight weakens shield cohesion",
    firstAppearance: "Issue #2 (fictional)",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=60",
    summary: "A street-level protector who bends light to hide civilians and expose corrupt deals.",
    bio: "Riven walks the line between justice and revenge. He uses hard-light projections to redirect violence, but his tools fail in harsh daylight—forcing him to rely on strategy and allies."
  },
  {
    id: "mira-solene",
    name: "Mira Solène",
    alias: "Archivist of Ash",
    role: "Hero",
    faction: "Cinder Library",
    power: "Memory ignition (reads object histories via “ember echoes”)",
    weakness: "Can absorb traumatic memories unintentionally",
    firstAppearance: "Issue #3 (fictional)",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=60",
    summary: "A historian-hero who solves mysteries by reading the past imprinted on artifacts.",
    bio: "Mira’s gift helps recover lost truths. She’s invaluable in investigations, but the emotional toll of carrying others’ memories is heavy—and sometimes dangerous."
  },
  {
    id: "jax-orrin",
    name: "Jax Orrin",
    alias: "Pulse Runner",
    role: "Hero",
    faction: "Aether Guard",
    power: "Bioelectric sprint (short, explosive bursts of speed)",
    weakness: "Heart rhythm can destabilize under stress",
    firstAppearance: "Issue #4 (fictional)",
    image: "https://images.unsplash.com/photo-1520975869010-0f1d5ea4f7aa?auto=format&fit=crop&w=600&q=60",
    summary: "A rescue specialist who outruns collapsing structures to pull people to safety.",
    bio: "Jax is fearless and fast—sometimes too fast. He must manage his pulse carefully or risk blackout at the worst moment."
  },
  {
    id: "vanta-nyx",
    name: "Vanta Nyx",
    alias: "Null Siren",
    role: "Villain",
    faction: "Black Choir",
    power: "Silence field (cancels sound + weakens comms)",
    weakness: "Needs line-of-sight to expand the field",
    firstAppearance: "Issue #5 (fictional)",
    image: "https://images.unsplash.com/photo-1520975682031-a0f5bd02ef91?auto=format&fit=crop&w=600&q=60",
    summary: "A feared saboteur who shuts down entire districts by erasing communication.",
    bio: "Vanta’s silence field creates panic and confusion. When teams can’t coordinate, she strikes. Her limitation is visibility—block her sightlines and her power shrinks."
  }
];

function qs(sel){ return document.querySelector(sel); }

function render(list){
  const grid = qs("#grid");
  grid.innerHTML = "";

  list.forEach(c => {
    const card = document.createElement("article");
    card.className = "card";
    card.setAttribute("data-name", c.name.toLowerCase());
    card.setAttribute("data-alias", c.alias.toLowerCase());
    card.setAttribute("data-role", c.role.toLowerCase());

    card.innerHTML = `
      <img src="${c.image}" alt="${c.name} portrait">
      <div class="card-content">
        <h3>${c.name}</h3>
        <div class="meta">${c.alias} • ${c.role} • ${c.faction}</div>
        <p class="summary">${c.summary}</p>
        <div class="actions">
          <a class="btn primary" href="details.html?id=${encodeURIComponent(c.id)}">View details</a>
          <a class="btn" href="form.html">Suggest a character</a>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  qs("#count").textContent = `${list.length} shown`;
}

function filter(){
  const q = qs("#search").value.trim().toLowerCase();
  const filtered = characters.filter(c => {
    const blob = `${c.name} ${c.alias} ${c.role} ${c.faction} ${c.summary}`.toLowerCase();
    return blob.includes(q);
  });
  render(filtered);
}

document.addEventListener("DOMContentLoaded", () => {
  render(characters);
  qs("#search").addEventListener("input", filter);
});
