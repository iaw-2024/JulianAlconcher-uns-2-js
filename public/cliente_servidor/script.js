document.addEventListener("DOMContentLoaded", function() {
    fetch("/cliente_servidor/get_datos")
    .then(response => response.json())
    .then(data => {
        const ulSongs = document.getElementById('canciones-list');
        const cinco = data.slice(0, 5);
        cinco.forEach(element => {
                let li = document.createElement("li");
                li.textContent = `${element.song_name} - ${element.artist_name} `;
                let h4 = document.createElement("h4");
                h4.textContent = ` Album: ${element.album_name}, Año: ${element.release_date.slice(0,4)}`;
                li.appendChild(h4);
                ulSongs.appendChild(li);
        });
    })
    .catch(error => {
        console.error("Error al obtener el listado de clientes:", error);
    });
  });
  