import { useParams } from "react-router-dom"
import * as S from './category.styles'
import { categoryArr } from "../../utilitis/categoryes"

export const Category = () => {

    const params = useParams()

    const curentCategory = categoryArr.find(
        (category) => category.id === Number(params.id),
      )

    return (
          <S.CategoryBlock>
          <h1>CategoryPage {curentCategory.id}</h1>
          <img src={curentCategory.img} alt={curentCategory.alt} />
        </S.CategoryBlock>
    )
}