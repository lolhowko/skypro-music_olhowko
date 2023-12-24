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
  categoryArr: [],
  FiltersPlaylist: {
    authors: [],
    isActiveAuthors: false,
    genres: [],
    isActiveGenres: false,
    sort: 'По умолчанию',
    isActiveSort: false,
    search: '',
    isActiveSearch: false,
    filterTracksArr: [],
  },
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

    setFilterPlaylist: (state, action) => {
      const { sort, authors, genres, search } = action.payload

      if (authors === '') {
        state.FiltersPlaylist.authors = []
      } else if (authors) {
        if (state.FiltersPlaylist.authors.includes(authors)) {
          state.FiltersPlaylist.authors = state.FiltersPlaylist.authors.filter(
            (item) => item !== authors
          )
        } else {
          state.FiltersPlaylist.authors = [
            ...state.FiltersPlaylist.authors,
            authors,
          ]
        }
      }

      if (genres === '') {
        state.FiltersPlaylist.genres = []
        if (state.FiltersPlaylist.genres.includes(genres)) {
          state.FiltersPlaylist.genres = state.FiltersPlaylist.genres.filter(
            (item) => item !== genres
          )
        } else {
          state.FiltersPlaylist.genres = [
            ...state.FiltersPlaylist.genres,
            genres,
          ]
        }
      }

      if (sort) {
        state.FiltersPlaylist.sort = sort
      }

      if (search?.length > 0) {
        state.FiltersPlaylist.search = search
      } else {
        state.FiltersPlaylist.search = ''
        state.FiltersPlaylist.isActiveSearch = false
      }

      const getFilteredTracks = () => {
        let filterArray = []
        if (state.currentPage === 'Main') {
          filterArray = state.allTracks
        }
        if (state.currentPage === 'Favourites') {
          filterArray = state.favouritesTracks
        }

        if (state.currentPage === 'Category') {
          filterArray = state.categoryArr
        }

         // фильтрация

        // по исполнителю

        if (state.FiltersPlaylist.authors.length > 0) {
          state.FiltersPlaylist.isActiveAuthors = true;

          filterArray = filterArray.filter((track) =>
            state.FiltersPlaylist.authors.includes(track.author)
          );
        }

         // по жанру
         if (state.FiltersPlaylist.genres.length > 0) {
          state.FiltersPlaylist.isActiveGenres = true;

          filterArray = filterArray.filter((track) =>
            state.FiltersPlaylist.genres.includes(track.genre)
          );
        }

         // по датам
         if (state.FiltersPlaylist.sort === "Сначала новые") {
          state.FiltersPlaylist.isActiveSort = true;

          filterArray = filterArray.sort(
            (a, b) => new Date(b.release_date) - new Date(a.release_date)
          );
        } else if (state.FiltersPlaylist.sort === "Сначала старые") {
          state.FiltersPlaylist.isActiveSort = true;

          filterArray = filterArray.sort(
            (a, b) => new Date(a.release_date) - new Date(b.release_date)
          );
        } else {
          state.FiltersPlaylist.isActiveSort = false;
        }

         // поиск
         if (state.FiltersPlaylist.search.length > 0) {
          state.FiltersPlaylist.isActiveSearch = true;

          filterArray = filterArray.filter((item) =>
            item.name
              .toLocaleLowerCase()
              .includes(state.FiltersPlaylist.search.toLocaleLowerCase())
          );
        }

        return filterArray;
      }

      state.FiltersPlaylist.filterTracksArr = getFilteredTracks();
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
  setCategoryArr,
  setFilterPlaylist,
} = tracksSlice.actions

export default tracksSlice.reducer
