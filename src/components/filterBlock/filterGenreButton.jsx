import * as S from './filterBlock.styles'


export function FilterGenreButton({ onClick, isActive }) {
    const handleButtonClick = () => {
      onClick(); 
    };
  
    return (
      <S.FilterButton isActive={isActive} onClick={handleButtonClick}>исполнителю</S.FilterButton>
    );
    
  }
  
  export default FilterGenreButton