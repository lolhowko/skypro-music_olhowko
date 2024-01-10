import { useEffect, useState } from 'react'
import * as S from './filterBlock.styles'
import { useDispatch, useSelector } from 'react-redux'
import { filtersPlaylistSelector } from '../../store/selectors/indexSelectors'
import { TracksFilterCategory } from './trackFilterCategory'
import { uniq } from 'lodash'
import { setFilterPlaylist } from '../../store/slices/slices'

export function FilterBlock({ selectedArrListFilter, currentPage }) {
  const dispatch = useDispatch()
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('')
  const selectedFiltersPlaylist = useSelector(filtersPlaylistSelector)

  useEffect(() => {
    console.log('author filter: ', selectedFiltersPlaylist?.authors)
  }, [selectedFiltersPlaylist?.authors])

  useEffect(() => {
    console.log('genres filter: ', selectedFiltersPlaylist?.genres)
  }, [selectedFiltersPlaylist?.genres])

  // const [visible, setVisible] = useState(null)

  // const handleButtonClick = (filter) => {
  //   setVisible((currentVisible) => (currentVisible === filter ? null : filter))
  // }

  return (
    <S.CenterBlockFilter className="filter">
      <S.filterDiv>
        <S.filterTitle>Искать по:</S.filterTitle>

        <TracksFilterCategory
          nameCategory="исполнителю"
          numberSelectedValues={selectedFiltersPlaylist?.authors.length}
          content={uniq(
            selectedArrListFilter?.map((track) => track?.author)
          ).map((author) => (
            <S.FilterItem
              key={author}
              onClick={() => {
                dispatch(setFilterPlaylist({ authors: author }))
              }}
              $isSelected={selectedFiltersPlaylist?.authors.includes(author)}
            >
              {author}
            </S.FilterItem>
          ))}
          isActiveCategory={activeCategoryFilter}
          setActiveCategory={setActiveCategoryFilter}
        />

        {currentPage !== 'Category' && (
          <TracksFilterCategory
            nameCategory="жанру"
            isActiveCategory={activeCategoryFilter}
            setActiveCategory={setActiveCategoryFilter}
            numberSelectedValues={selectedFiltersPlaylist?.genres.length}
            content={uniq(
              selectedArrListFilter?.map((track) => track.genre)
            ).map((genre) => (
              <S.FilterItem
                key={genre}
                onClick={() => {
                  dispatch(setFilterPlaylist({ genres: genre }))
                }}
                $isSelected={selectedFiltersPlaylist?.genres.includes(genre)}
              >
                {genre}
              </S.FilterItem>
            ))}
          />
        )}
      </S.filterDiv>

      <S.filterDiv>
        <S.filterTitle>Сортировка:</S.filterTitle>
        <TracksFilterCategory
          nameCategory={selectedFiltersPlaylist?.sort}
          isActiveCategory={activeCategoryFilter}
          setActiveCategory={setActiveCategoryFilter}
          numberSelectedValues={
            selectedFiltersPlaylist?.sort === "По умолчанию" ? 0 : 1
          }
          content={["По умолчанию", "Сначала новые", "Сначала старые"].map(
            (item) => (
              <S.FilterItem
                key={item}
                onClick={() => {
                  dispatch(setFilterPlaylist({ sort: item }));
                }}
                $isSelected={selectedFiltersPlaylist?.sort.includes(item)}
              >
                {item}
              </S.FilterItem>
            )
          )}
        />
      </S.filterDiv>

      {/* <div>
        <FilterAuthorButton
          isActive={visible === 'author'}
          onClick={() => {
            handleButtonClick('author')
          }}
        />
        {visible === 'author' && <FilterOptions />}

        <FilterYearButton
          isActive={visible === 'year'}
          onClick={() => {
            handleButtonClick('year')
          }}
        />
        {visible === 'year' && <FilterOptions />}
 
        <FilterGenreButton
          isActive={visible === 'genre'}
          onClick={() => {
            handleButtonClick('genre')
          }}
        />
        {visible === 'genre' && <FilterOptions />}
      </div> */}
    </S.CenterBlockFilter>
  )
}

export default FilterBlock
