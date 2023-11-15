import {
  SET_PLAYING_TRACK,
  SET_IS_PLAYING,
  NEXT_TRACK,
  PREV_TRACK,
  TOGGLE_SHUFFLED,
} from '../types/tracksTypes'

export const setPlayingTrack = ({ playingTrack, idPlayingTrack }) => ({
  type: SET_PLAYING_TRACK,
  payload: { playingTrack, idPlayingTrack },
})

export const setIsPlaying = ({ isPlaying }) => ({
  type: SET_IS_PLAYING,
  payload: { isPlaying },
})

export const setNextTrack = ({ nextTrack, idPlayingTrack }) => ({
  type:   NEXT_TRACK,
  payload: { nextTrack, idPlayingTrack },
})

export const setPrevTrack = ({ prevTrack, idPlayingTrack }) => ({
  type:   PREV_TRACK,
  payload: { prevTrack, idPlayingTrack },
})

export const toggleShuffle = ({ isShuffled, shuffledTracks }) => ({
  type:     TOGGLE_SHUFFLED,
  payload: { isShuffled, shuffledTracks },
})