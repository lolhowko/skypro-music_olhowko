import { createSlice } from '@reduxjs/toolkit'

const TrackSlice = createSlice({
  name: 'tracks',
  initialState: {
    tracks: [],
    currentPlaylist: [],
  },
  resucers: {
    setPlayingTrack(state, action) {
      state.tracks[0] = {
        track: action.payload,
      }
    },

    setCurrentPlaylist(state, action) {
        state.currentPlaylist = action.payload
      },
  },
})

export const {setCurrentPlaylist, setPlayingTrack} = TrackSlice.actions

export default TrackSlice.reducer
