import { TrackList } from '../../components/tracklist/tracklist'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  allTracksSelector,
} from '../../store/selectors/indexSelectors'
import { setAllTracks, setCurrentPage, setCurrentTrack } from '../../store/slices/slices'
import { useGetTracksAllQuery } from '../../serviceQuery/tracks'

export const MainTracks = () => {
  const dispatch = useDispatch()

  const tracks = useSelector(allTracksSelector)

  const { data, isError, isLoading } = useGetTracksAllQuery()

  useEffect(() => {
    if (data) {
      console.log(data)
      dispatch(setAllTracks(data))
      dispatch(setCurrentPage('Main'))
    }
  }, [data])

  return (
    <>
      <TrackList
        tracks={tracks}
        isLoading={isLoading}
        error={isError}
      />
    </>
  )
}
