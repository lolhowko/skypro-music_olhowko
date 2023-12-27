import { useParams } from 'react-router-dom'
import * as S from './category.styles'
import { categoryArr } from '../../utilitis/categoryes'
import { useDispatch, useSelector } from 'react-redux'
import { categoryArrSelector, filtersPlaylistSelector } from '../../store/selectors/indexSelectors'

export const Category = () => {
  const categoryArr = useSelector(categoryArrSelector)
  const filtre = useSelector(filtersPlaylistSelector)
  const params = useParams()
  const dispatch = useDispatch()


  const curentCategory = categoryArr.find(
    (category) => category.id === Number(params.id)
  )

  return (
    <S.CategoryBlock>
      <h1>CategoryPage {curentCategory.id}</h1>
      <img src={curentCategory.img} alt={curentCategory.alt} />
    </S.CategoryBlock>
  )
}
