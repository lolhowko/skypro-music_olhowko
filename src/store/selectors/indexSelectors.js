import { store } from '../indexStore'

export const trackSelector = (store) => store.tracks

export const playingTrackSelector = (store) => store.tracks.playingTrack
export const setPlayingTrackSelector = (store) => store.tracks.setPlayingTrack
export const isPlayingSelector = (store) => store.tracks.isPlaying
export const idPlayingTrackSelector = (store) =>store.tracks.idPlayingTrack
export const shuffledTracksSelector = (store) => store.tracks.shuffledTracks
