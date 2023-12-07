import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allTracks: [],
  currentTrack: null,
  indexCurrentTrack: null,
  isPlaying: false,
  shuffle: false,
  shuffleAllTracks: [],
  favouritesTracks: [],
  currentPlaylist: [],
}

const getShuffleAllTracks = (array) => {
  const arrayTracks = new Array(...array)
  return arrayTracks.sort(() => Math.random() - 0.5)
}

export const tracksSlice = createSlice({
  name: 'tracksReducer',
  initialState,
  reducers: {
    setAllTracks: (state, action) => {
      state.allTracks = action.payload
    },

    setFavouriteTracksAll: (state, action) => {
      state.favouritesTracks = action.payload
    },

    setIsPlaying: (state, action) => {
      state.isPlaying = action.payload
    },

    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },

    setCurrentPlaylist: (state, action) => {
      state.currentPlaylist = action.payload
    },

    setCurrentTrack: (state, action) => {
      const { track, indexCurrentTrack } = action.payload
      state.currentTrack = track
      state.indexCurrentTrack = indexCurrentTrack
    },

    setNextTrack: (state, action) => {
      const { indexNextTrack, nextTrack } = action.payload
      state.currentTrack = nextTrack
      state.indexCurrentTrack = indexNextTrack
    },

    setPrevTrack: (state, action) => {
      const { indexPrevTrack, prevTrack } = action.payload
      state.currentTrack = prevTrack
      state.indexCurrentTrack = indexPrevTrack
    },

    toggleShuffleTrack: (state, action) => {
      state.shuffle = action.payload
      state.shuffleAllTracks =
        state.shuffle && getShuffleAllTracks(state.allTracks)
    },
  },
})

export const {
  setAllTracks,
  setFavouriteTracksAll,
  setIsPlaying,
  setCurrentTrack,
  setNextTrack,
  setPrevTrack,
  toggleShuffleTrack,
  setCurrentPage,
  setCurrentPlaylist,
} = tracksSlice.actions

export default tracksSlice.reducer
