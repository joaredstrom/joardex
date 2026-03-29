// --- Pokemon data (10 Dragon + 10 Electric = 20 total) ---

const pokemon = [
    // Dragon types
    { id: 149, name: "Dragonite",   types: ["dragon", "flying"],   hp: 91,  attack: 134, defense: 95,  spAtk: 100, spDef: 100, speed: 80  },
    { id: 130, name: "Gyarados",    types: ["water", "dragon"],    hp: 95,  attack: 125, defense: 79,  spAtk: 60,  spDef: 100, speed: 81  },
    { id: 373, name: "Salamence",   types: ["dragon", "flying"],   hp: 95,  attack: 135, defense: 80,  spAtk: 110, spDef: 80,  speed: 100 },
    { id: 445, name: "Garchomp",    types: ["dragon", "ground"],   hp: 108, attack: 130, defense: 95,  spAtk: 80,  spDef: 85,  speed: 102 },
    { id: 384, name: "Rayquaza",    types: ["dragon", "flying"],   hp: 105, attack: 150, defense: 90,  spAtk: 150, spDef: 90,  speed: 95  },
    { id: 483, name: "Dialga",      types: ["steel", "dragon"],    hp: 100, attack: 120, defense: 120, spAtk: 150, spDef: 100, speed: 90  },
    { id: 484, name: "Palkia",      types: ["water", "dragon"],    hp: 90,  attack: 120, defense: 100, spAtk: 150, spDef: 120, speed: 100 },
    { id: 612, name: "Haxorus",     types: ["dragon"],             hp: 76,  attack: 147, defense: 90,  spAtk: 60,  spDef: 70,  speed: 97  },
    { id: 706, name: "Goodra",      types: ["dragon"],             hp: 90,  attack: 100, defense: 70,  spAtk: 110, spDef: 150, speed: 80  },
    { id: 887, name: "Dragapult",   types: ["dragon", "ghost"],    hp: 88,  attack: 120, defense: 75,  spAtk: 100, spDef: 75,  speed: 142 },

    // Electric types
    { id: 25,  name: "Pikachu",     types: ["electric"],           hp: 35,  attack: 55,  defense: 40,  spAtk: 50,  spDef: 50,  speed: 90  },
    { id: 26,  name: "Raichu",      types: ["electric"],           hp: 60,  attack: 90,  defense: 55,  spAtk: 90,  spDef: 80,  speed: 110 },
    { id: 135, name: "Jolteon",     types: ["electric"],           hp: 65,  attack: 65,  defense: 60,  spAtk: 110, spDef: 95,  speed: 130 },
    { id: 181, name: "Ampharos",    types: ["electric"],           hp: 90,  attack: 75,  defense: 85,  spAtk: 115, spDef: 90,  speed: 55  },
    { id: 243, name: "Raikou",      types: ["electric"],           hp: 90,  attack: 85,  defense: 75,  spAtk: 115, spDef: 100, speed: 115 },
    { id: 405, name: "Luxray",      types: ["electric"],           hp: 80,  attack: 120, defense: 79,  spAtk: 95,  spDef: 79,  speed: 70  },
    { id: 466, name: "Electivire",  types: ["electric"],           hp: 75,  attack: 123, defense: 67,  spAtk: 95,  spDef: 85,  speed: 95  },
    { id: 596, name: "Galvantula",  types: ["bug", "electric"],    hp: 70,  attack: 77,  defense: 60,  spAtk: 97,  spDef: 60,  speed: 108 },
    { id: 644, name: "Zekrom",      types: ["dragon", "electric"], hp: 100, attack: 150, defense: 120, spAtk: 120, spDef: 100, speed: 90  },
    { id: 807, name: "Zeraora",     types: ["electric"],           hp: 88,  attack: 112, defense: 75,  spAtk: 102, spDef: 80,  speed: 143 },
];

// Sprite URL helper (PokeAPI official sprites)
function spriteUrl(id) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}

// Cry URL helper (PokeAPI official cries)
function cryUrl(id) {
    return `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${id}.ogg`;
}

// Play a Pokemon cry
let currentCry = null;
function playCry(id) {
    if (currentCry) {
        currentCry.pause();
        currentCry = null;
    }
    currentCry = new Audio(cryUrl(id));
    currentCry.play();
}

// Group pokemon by their primary display type for our rows
const typeRows = [
    {
        type: "dragon",
        label: "Draktyper",
        pokemon: pokemon.filter((p, i) => i < 10),
    },
    {
        type: "electric",
        label: "Elektrotyper",
        pokemon: pokemon.filter((p, i) => i >= 10),
    },
];

// --- Render rows ---

const pokedexEl = document.getElementById("pokedex");

typeRows.forEach((row) => {
    const section = document.createElement("section");
    section.className = "type-section";

    section.innerHTML = `
        <div class="type-heading">
            <span class="type-badge ${row.type}">${row.label}</span>
        </div>
        <div class="pokemon-row"></div>
    `;

    const rowEl = section.querySelector(".pokemon-row");

    row.pokemon.forEach((p) => {
        const card = document.createElement("div");
        card.className = `pokemon-card ${row.type}`;
        card.innerHTML = `
            <img src="${spriteUrl(p.id)}" alt="${p.name}" loading="lazy">
            <div class="poke-id">#${String(p.id).padStart(3, "0")}</div>
            <div class="poke-name">${p.name}</div>
        `;
        card.addEventListener("click", () => openModal(p, row.type));

        // Add dot separator before card (except first)
        if (rowEl.children.length > 0) {
            const dot = document.createElement("div");
            dot.className = "dot-separator";
            rowEl.appendChild(dot);
        }

        rowEl.appendChild(card);
    });

    pokedexEl.appendChild(section);
});

// --- Modal ---

const overlay = document.getElementById("modal-overlay");
const modalBody = document.getElementById("modal-body");
const modalClose = document.getElementById("modal-close");

function openModal(p, rowType) {
    const statNames = [
        { key: "hp",      label: "HP" },
        { key: "attack",  label: "Attack" },
        { key: "defense", label: "Defense" },
        { key: "spAtk",   label: "Sp. Atk" },
        { key: "spDef",   label: "Sp. Def" },
        { key: "speed",   label: "Speed" },
    ];

    const maxStat = 255; // theoretical max for bar scaling

    const typeBadges = p.types
        .map((t) => `<span class="type-badge ${t}">${t}</span>`)
        .join("");

    const statsHtml = statNames
        .map((s) => {
            const val = p[s.key];
            const pct = Math.round((val / maxStat) * 100);
            return `
                <span class="stat-label">${s.label}</span>
                <div class="stat-bar-bg">
                    <div class="stat-bar ${rowType}" style="width: ${pct}%"></div>
                </div>
                <span class="stat-value">${val}</span>
            `;
        })
        .join("");

    modalBody.innerHTML = `
        <div class="modal-header">
            <img src="${spriteUrl(p.id)}" alt="${p.name}">
            <button class="cry-btn ${rowType}" onclick="playCry(${p.id})">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>
                Spela ljud
            </button>
            <div class="poke-id">#${String(p.id).padStart(3, "0")}</div>
            <div class="poke-name">${p.name}</div>
            <div class="modal-types">${typeBadges}</div>
        </div>
        <div class="stats-grid">${statsHtml}</div>
    `;

    overlay.classList.remove("hidden");

    // Animate bars after paint
    requestAnimationFrame(() => {
        modalBody.querySelectorAll(".stat-bar").forEach((bar) => {
            bar.style.width = bar.style.width; // trigger reflow
        });
    });
}

modalClose.addEventListener("click", () => overlay.classList.add("hidden"));
overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.classList.add("hidden");
});
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") overlay.classList.add("hidden");
});
