import { useState } from 'react';
import * as S from './filterBlock.styles'
import FilterAuthorButton from './filterAuthorButton';
import FilterOptions from './filterOptions';
import FilterYearButton from './filterYearButton';
import FilterGenreButton from './filterGenreButton';


export function FilterBlock () {
    const [visible, setVisible] = useState(null);

    const handleButtonClick = (filter) => {
        setVisible((currentVisible) => (currentVisible === filter ? null : filter));
      };

    return (
        <S.CenterBlockFilter className="filter">
          <S.FilterTittle>Искать по:</S.FilterTittle>

          <div>
            <FilterAuthorButton
              isActive={visible === "author"}
              onClick={() => {
                handleButtonClick("author");
              }}
            />
            {visible === "author" && <FilterOptions />}
          </div>

          <div>
            <FilterYearButton
              isActive={visible === "year"}
              onClick={() => {
                handleButtonClick("year");
              }}
            />
            {visible === "year" && <FilterOptions />}
          </div>

          <div>
            <FilterGenreButton
              isActive={visible === "genre"}
              onClick={() => {
                handleButtonClick("genre");
              }}
            />
            {visible === "genre" && <FilterOptions />}
          </div>
          
      </S.CenterBlockFilter>
    )
}

export default FilterBlock
