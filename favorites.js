const favoritePlanets = [

    {
        name: "Mercury",
        emoji: "☿️",
        type: "Rocky Planet"
    },

    {
        name: "Venus",
        emoji: "♀️",
        type: "Rocky Planet"
    },

    {
        name: "Earth",
        emoji: "🌎",
        type: "Rocky Planet"
    },

    {
        name: "Mars",
        emoji: "🔴",
        type: "Rocky Planet"
    },

    {
        name: "Jupiter",
        emoji: "🟠",
        type: "Gas Giant"
    },

    {
        name: "Saturn",
        emoji: "🪐",
        type: "Gas Giant"
    },

    {
        name: "Uranus",
        emoji: "🔵",
        type: "Ice Giant"
    },

    {
        name: "Neptune",
        emoji: "🔵",
        type: "Ice Giant"
    }

];


const grid =
    document.getElementById("favoriteGrid");


function displayFavorites() {

    const saved =
        getFavorites();


    const favorites =
        favoritePlanets.filter(
            planet =>
                saved.includes(planet.name)
        );


    grid.innerHTML = "";


    if (favorites.length === 0) {

        grid.innerHTML = `

            <div class="empty-message">

                <div class="empty-icon">
                    🌌
                </div>

                <h2>
                    No favorites yet
                </h2>

                <p>
                    Go to Planets and save a world.
                </p>

            </div>

        `;

        return;

    }


    favorites.forEach(planet => {

        grid.innerHTML += `

            <article class="planet-card">

                <div class="planet-visual">
                    ${planet.emoji}
                </div>

                <button
                    class="favorite-btn liked"
                    onclick="removeFavorite('${planet.name}')"
                >
                    ♥
                </button>

                <h2>
                    ${planet.name}
                </h2>

                <p class="planet-type">
                    ${planet.type}
                </p>

            </article>

        `;

    });

}


function removeFavorite(name) {

    toggleFavorite(name);

    displayFavorites();

}


displayFavorites();