const missions = [

    {
        name: "Apollo 11",
        year: "1969",
        emoji: "🌕",
        description:
            "The first human mission to land astronauts on the Moon."
    },

    {
        name: "Voyager 1",
        year: "1977",
        emoji: "🛰️",
        description:
            "The farthest human-made object from Earth."
    },

    {
        name: "Hubble Space Telescope",
        year: "1990",
        emoji: "🔭",
        description:
            "A space telescope that transformed our view of the universe."
    },

    {
        name: "Mars Rover",
        year: "2012",
        emoji: "🔴",
        description:
            "Curiosity landed on Mars to investigate whether the planet could once support life."
    },

    {
        name: "James Webb",
        year: "2021",
        emoji: "✨",
        description:
            "A powerful infrared telescope exploring the earliest galaxies and distant worlds."
    },

    {
        name: "Artemis",
        year: "2022",
        emoji: "🚀",
        description:
            "NASA's program preparing for humanity's return to the Moon."
    }

];


const grid =
    document.getElementById("missionGrid");


missions.forEach(mission => {

    grid.innerHTML += `

        <article class="mission-card">

            <div class="mission-icon">
                ${mission.emoji}
            </div>

            <div>

                <span class="mission-year">
                    ${mission.year}
                </span>

                <h2>
                    ${mission.name}
                </h2>

                <p>
                    ${mission.description}
                </p>

            </div>

        </article>

    `;

});