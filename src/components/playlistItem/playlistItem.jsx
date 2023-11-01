import { useEffect, useState } from 'react';
import * as S from './playListItem.styles'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { categoryArr } from '../../utilitis/categoryes';
import { NavLink } from 'react-router-dom';


export function PlaylistItem() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);


  const fullCategory = categoryArr.map((category) => (
    <S.SidebarItem key={category.id}>
      {isLoading ? (
        <Skeleton count={1} width={250} height={150} />
      ) : (
        <NavLink to={`/category/${category.id}`}>
        <S.SidebarImg src={category.img} alt={category.alt} />
      </NavLink>
      )}
    </S.SidebarItem>
  ))

return(fullCategory)

}

export default PlaylistItem