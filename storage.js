function getFavorites() {

    const saved =
        localStorage.getItem("cosmoFavorites");

    return saved
        ? JSON.parse(saved)
        : [];

}


function toggleFavorite(name) {

    let favorites =
        getFavorites();


    if (favorites.includes(name)) {

        favorites =
            favorites.filter(
                item => item !== name
            );

    } else {

        favorites.push(name);

    }


    localStorage.setItem(
        "cosmoFavorites",
        JSON.stringify(favorites)
    );

}