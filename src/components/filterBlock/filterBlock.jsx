import { useState } from 'react';
import './filterBlock.css'
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
        <div className="centerblock__filter filter">
          <div className="filter__title">Искать по:</div>

          <div>
            <FilterAuthorButton
              isActive={visible === "author"}
              onClick={() => {
                handleButtonClick("author");
              }}
            />
            {visible === "author" && <FilterOptions />}
          </div>

            {/* <div className="filter__button button-author _btn-text">
            исполнителю
            </div> */}

          <div>
            <FilterYearButton
              isActive={visible === "year"}
              onClick={() => {
                handleButtonClick("year");
              }}
            />
            {visible === "year" && <FilterOptions />}
          </div>

            {/* <div className="filter__button button-year _btn-text">
            году выпуска
            </div> */}

          <div>
            <FilterGenreButton
              isActive={visible === "genre"}
              onClick={() => {
                handleButtonClick("genre");
              }}
            />
            {visible === "genre" && <FilterOptions />}
          </div>

            {/* <div className="filter__button button-genre _btn-text">жанру</div> */}
      </div>
    )
}

export default FilterBlock
