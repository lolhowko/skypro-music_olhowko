const APIHOST = "https://skypro-music-api.skyeng.tech/";

export async function getTracksAll() {
    const response = await fetch(`${APIHOST}catalog/track/all/`, {
        headers: { Authorization: ``, "Content-Type": "application/json" },
      });

    const tracks = await response.json();

    if (!response.ok) {
        
         throw new Error(`Не удалось загрузить плейлист, попробуйте позже!`); // ${response.status}
       }

    return tracks;
}