import { TrackList } from '../../components/tracklist/tracklist'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  allTracksSelector,
  filtersPlaylistSelector,
} from '../../store/selectors/indexSelectors'
import {
  setAllTracks,
  setCurrentPage,
  setCurrentTrack,
} from '../../store/slices/slices'
import { useGetTracksAllQuery } from '../../serviceQuery/tracks'

export const MainTracks = () => {
  const dispatch = useDispatch()

  const tracksAll = useSelector(allTracksSelector)

  const filtre = useSelector(filtersPlaylistSelector)

  const { data, isError, isLoading } = useGetTracksAllQuery()

  const tracks =
    filtre?.isActiveSort ||
    filtre?.isActiveAuthors ||
    filtre?.isActiveGenres ||
    filtre?.isActiveSearch
      ? filtre?.filterTracksArr
      : tracksAll;

  useEffect(() => {
    console.log(data)
    dispatch(setAllTracks(data))
  }, [filtre.isActiveSort, tracks])

  useEffect(() => {
    if (data) {
      console.log(data)
      dispatch(setCurrentPage('Main'))
      dispatch(setAllTracks(data))
    }
  }, [data])

  return (
    <>
      <TrackList title={data?.name} tracks={tracks} isLoading={isLoading} error={isError} />
    </>
  )
}
