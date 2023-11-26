// export const allTracksSelector = (store) => store.tracks.allTracks;
// export const isPlayingSelector = (store) => store.tracks.isPlaying;
// export const currentTrackSelector = (store) => store.tracks.currentTrack;
// export const indexCurrentTrackSelector = (store) => store.tracks.indexCurrentTrack;
// export const shuffledAllTracksSelector = (store) => store.tracks.shuffledAllTracks;
// export const shuffledSelector = (store) => store.tracks.shuffled;

export const allTracksSelector = (store) => store.tracks.allTracks;
export const currentTrackSelector = (store)=> store.tracks.currentTrack;
export const isPlayingSelector = (store) => store.tracks.isPlaying;
export const indexCurrentTrackSelector = (store) => store.tracks.indexCurrentTrack;
export const shuffleAllTracksSelector = (store)=> store.tracks.shuffleAllTracks;
export const shuffleSelector = (store)=> store.tracks.shuffle;