
let song_name = ["Fuiste tu", "La mordidita" ,"Clint Eastwood" ,"Danza kuduro" ,"Peluquita"]
let artist_name = ["Ricardo Arjona", "Ricky Martin", "Gorillaz","Don Omar" ,"El kuelgue"]
let album_name = ["Independiente", "A quien quiera escuchar", "Gorillaz", "Meet the Orphans" ,"Hola precioso"]
let release_date = ["2011", "2015", "2001", "2010", "2023"]

let ulSongs = document.getElementById("canciones-list")

for (let i = 0; i < song_name.length; i++) {
    let li = document.createElement("li")
    li.textContent = `${song_name[i]} - ${artist_name[i]} `
    let p = document.createElement("p")
    p.textContent =  `${album_name[i]}, Año: ${release_date[i]}`
    li.appendChild(p)
    ulSongs.appendChild(li)
}




