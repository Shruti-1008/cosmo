const planets = [

    {
        name: "Mercury",
        emoji: "☿️",
        type: "Rocky Planet",
        distance: "57.9 million km",
        temperature: "167°C",
        moons: 0
    },

    {
        name: "Venus",
        emoji: "♀️",
        type: "Rocky Planet",
        distance: "108.2 million km",
        temperature: "464°C",
        moons: 0
    },

    {
        name: "Earth",
        emoji: "🌎",
        type: "Rocky Planet",
        distance: "149.6 million km",
        temperature: "15°C",
        moons: 1
    },

    {
        name: "Mars",
        emoji: "🔴",
        type: "Rocky Planet",
        distance: "227.9 million km",
        temperature: "-65°C",
        moons: 2
    },

    {
        name: "Jupiter",
        emoji: "🟠",
        type: "Gas Giant",
        distance: "778.5 million km",
        temperature: "-110°C",
        moons: 95
    },

    {
        name: "Saturn",
        emoji: "🪐",
        type: "Gas Giant",
        distance: "1.43 billion km",
        temperature: "-140°C",
        moons: 146
    },

    {
        name: "Uranus",
        emoji: "🔵",
        type: "Ice Giant",
        distance: "2.87 billion km",
        temperature: "-195°C",
        moons: 28
    },

    {
        name: "Neptune",
        emoji: "🔵",
        type: "Ice Giant",
        distance: "4.5 billion km",
        temperature: "-200°C",
        moons: 16
    }

];


const grid =
    document.getElementById("planetGrid");


function displayPlanets(list) {

    grid.innerHTML = "";


    if (list.length === 0) {

        grid.innerHTML = `
            <div class="empty-message">
                <h2>Nothing found 🌌</h2>
                <p>Try another planet.</p>
            </div>
        `;

        return;
    }


    list.forEach((planet) => {

        const isFavorite =
            getFavorites().includes(planet.name);


        grid.innerHTML += `

            <article class="planet-card">

                <div class="planet-visual">
                    ${planet.emoji}
                </div>

                <button
                    class="favorite-btn
                    ${isFavorite ? "liked" : ""}"
                    onclick="togglePlanetFavorite('${planet.name}')"
                >
                    ${isFavorite ? "♥" : "♡"}
                </button>

                <h2>
                    ${planet.name}
                </h2>

                <p class="planet-type">
                    ${planet.type}
                </p>

                <div class="planet-info">

                    <div>
                        <span>Distance</span>
                        <strong>${planet.distance}</strong>
                    </div>

                    <div>
                        <span>Temperature</span>
                        <strong>${planet.temperature}</strong>
                    </div>

                    <div>
                        <span>Moons</span>
                        <strong>${planet.moons}</strong>
                    </div>

                </div>

            </article>

        `;

    });

}


function togglePlanetFavorite(name) {

    toggleFavorite(name);

    displayPlanets(
        getFilteredPlanets()
    );

}


let currentList = planets;


function getFilteredPlanets() {
    return currentList;
}


const search =
    document.getElementById("planetSearch");


search.addEventListener(
    "input",
    () => {

        const query =
            search.value.toLowerCase();


        currentList =
            planets.filter(planet =>
                planet.name
                    .toLowerCase()
                    .includes(query)
            );


        displayPlanets(currentList);

    }
);


displayPlanets(planets);