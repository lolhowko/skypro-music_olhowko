import { useParams } from 'react-router-dom'
import * as S from './category.styles'
import { categoryArr } from '../../utilitis/categoryes'
import { useDispatch, useSelector } from 'react-redux'
import {
  categoryArrSelector,
  filtersPlaylistSelector,
} from '../../store/selectors/indexSelectors'
import { useGetSelectionsQuery } from '../../serviceQuery/tracks'
import { setCategoryArr, setCurrentPage } from '../../store/slices/slices'
import TrackList from '../../components/tracklist/tracklist'
import { useEffect } from 'react'

export const Category = () => {
  const categoryArr = useSelector(categoryArrSelector)
  const filtre = useSelector(filtersPlaylistSelector)
  const params = useParams()
  const dispatch = useDispatch()

  const { data, error, isLoading } = useGetSelectionsQuery(Number(params.id))

  const tracks =
    filtre?.isActiveSort || filtre?.isActiveAuthors || filtre?.isActiveSearch
      ? filtre?.filterTracksArr
      : categoryArr

  // const curentCategory = categoryArr.find(
  //   (category) => category.id === Number(params.id)
  // )

  useEffect(() => {
    dispatch(setCategoryArr(data?.items))
  }, [filtre.isActiveSort, tracks])

  useEffect(() => {
    if (data) {
      dispatch(setCurrentPage('Category'))
      dispatch(setCategoryArr(data?.items))
    }
  }, [data])

  return (
    <TrackList
      title={data?.name}
      tracks={tracks}
      error={error}
      isLoading={isLoading}
    />
  )
}
