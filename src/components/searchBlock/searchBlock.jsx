// import './searchBlock.css'
import { useDispatch } from 'react-redux'
import * as S from './searchBlock.styles'
import { setFilterPlaylist } from '../../store/slices/slices'

export function SearchBlock() {
  const dispatch = useDispatch()
  
  return (
    <S.CenterblockSearch className="search">
      <S.SearchSvg>
        <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
      </S.SearchSvg>
      <S.SearchText
        type="search"
        placeholder="Поиск"
        name="search"
        onChange={(e) => {
          dispatch(
            setFilterPlaylist({
              search: e.target.value,
            })
          )
        }}
      />
    </S.CenterblockSearch>
  )
}

export default SearchBlock
