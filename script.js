// const movies = [
//     { title: "Movie 1", image: "https://source.unsplash.com/random/200x300?sig=1" },
//     { title: "Movie 2", image: "https://source.unsplash.com/random/200x300?sig=2" },
//     { title: "Movie 3", image: "https://source.unsplash.com/random/200x300?sig=3" },
//     { title: "Movie 4", image: "https://source.unsplash.com/random/200x300?sig=4" },
//     { title: "Movie 5", image: "https://source.unsplash.com/random/200x300?sig=5" },
// ];

const movieRow = document.getElementById('trending');

movies.forEach(movie => {
    const movieElement = document.createElement('div');
    movieElement.classList.add('movie');
    
    const movieImage = document.createElement('img');
    movieImage.src = movie.image;
    movieImage.alt = movie.title;

    movieElement.appendChild(movieImage);
    movieRow.appendChild(movieElement);
});
