

document.addEventListener("DOMContentLoaded", function() {
    fetch("/cliente_servidor")
    .then(response => response.json())
    .then(data => {
        const ulSongs = document.getElementById('canciones-list');
        data.forEach(data => {
        const firstFiveSongs = data.slice(0, 5);
            firstFiveSongs.forEach(element => {
            let li = document.createElement("li");
            li.textContent = `${element.song_name} - ${element.artist_name} `;
            let p = document.createElement("p");
            p.textContent = `${element.album_name}, Año: ${element.release_date.slice(0,4)}`;
            li.appendChild(p);
            ulSongs.appendChild(li);
        });
    })
    .catch(error => {
        console.error("Error al obtener el listado de clientes:", error);
    });
  });
}) 