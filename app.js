const facts = [
    {
        title: "A day on Venus is longer than a year on Venus.",
        description:
            "Venus takes about 243 Earth days to rotate once, but only about 225 Earth days to orbit the Sun."
    },

    {
        title: "Jupiter is the largest planet in our solar system.",
        description:
            "Jupiter is so massive that more than 1,300 Earths could fit inside it."
    },

    {
        title: "Mars has the largest volcano in the solar system.",
        description:
            "Olympus Mons on Mars is about three times taller than Mount Everest."
    },

    {
        title: "Saturn could float in water.",
        description:
            "Saturn has an average density lower than water, making it the least dense planet in our solar system."
    },

    {
        title: "A year on Mercury lasts only 88 Earth days.",
        description:
            "Mercury travels around the Sun faster than any other planet in our solar system."
    },

    {
        title: "Space is completely silent.",
        description:
            "Sound needs a medium such as air to travel, and the vacuum of space has essentially no medium for sound waves."
    }
];


let currentFact = 0;


const factTitle =
    document.querySelector(".fact-section h2");

const factDescription =
    document.querySelector(
        ".fact-section > p:last-child"
    );


function showFact() {

    const fact = facts[currentFact];

    factTitle.textContent = fact.title;

    factDescription.textContent =
        fact.description;
}


function nextFact() {

    currentFact++;

    if (currentFact >= facts.length) {
        currentFact = 0;
    }

    showFact();
}


/* Change fact every 8 seconds */

setInterval(nextFact, 8000);


/* Show first fact */

showFact();