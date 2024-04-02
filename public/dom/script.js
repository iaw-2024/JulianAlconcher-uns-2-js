const ApiEndPoint = "https://6600c5a387c91a116419a29f.mockapi.io/songs";

let ulSongs = document.getElementById("canciones-list");

axios.get(ApiEndPoint)
    .then((response) => {
        const datos = response.data;
        if (Array.isArray(datos)) {
            const firstFiveSongs = datos.slice(0, 5);
            firstFiveSongs.forEach(element => {
                let li = document.createElement("li");
                li.textContent = `${element.song_name} - ${element.artist_name} `;
                let h4 = document.createElement("h4");
                h4.textContent = `Album: ${element.album_name}, Año: ${element.release_date.slice(0,4)}`;
                li.appendChild(h4);
                ulSongs.appendChild(li);
            });
        } else {
            console.error("Bad request: data is not an array.");
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
});





