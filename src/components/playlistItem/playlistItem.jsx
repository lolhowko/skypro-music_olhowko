import { useEffect, useState } from 'react';
// import './playlistItem.css'
import * as S from './playListItem.styles'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export function PlaylistItem() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);


    return(
      <div className="sidebar__list">

        <S.SidebarItem>

          {isLoading ? (
          <Skeleton count={1} width={250} height={150} />
          ) : (
          <>
          <S.SidebarLink href="#">
          <S.SidebarImg
          src="img/playlist01.png"
          alt="day's playlist" />
          </S.SidebarLink>
          </>
          )}
        </S.SidebarItem>

        <S.SidebarItem>

        {isLoading ? (
          <Skeleton count={1} width={250} height={150} />
          ) : (
            <>
          <S.SidebarLink href="#">
            <S.SidebarImg
  
              src="img/playlist02.png"
              alt="day's playlist" />
          </S.SidebarLink>
                </>
              )}
      </S.SidebarItem>
      
      </div>
      
    )
}

export default PlaylistItem