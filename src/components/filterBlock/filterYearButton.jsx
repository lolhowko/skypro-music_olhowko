import './filterBlock.css'
// import * as S from './filterBlock.styles'

export function FilterYearButton({ onClick, isActive }) {
    const handleButtonClick = () => {
      onClick(); 
    };
  
    return (
        <div onClick={handleButtonClick} 
        className = {`filter__button button-author ${isActive ? '_btn-text_active _btn-icon_active' : ''}`}>году выпуска</div>
      );
    
  }
  
  export default FilterYearButton