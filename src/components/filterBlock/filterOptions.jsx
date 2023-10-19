import * as S from './filterBlock.styles'

export function FilterOptions() {
    return (
        <div>
            <S.FilterOptions>
                <li><S.DropdownItems href="http://">Option 1</S.DropdownItems></li>
                <li><S.DropdownItems href="http://">Option 2</S.DropdownItems></li>
                <li><S.DropdownItems href="http://">Option 3</S.DropdownItems></li>
            </S.FilterOptions>
        </div>
    );
  };

export default FilterOptions;