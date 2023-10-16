import { useEffect, useState } from 'react';
import './playlistItem.css'
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

        <div className="sidebar__item">

          {isLoading ? (
          <Skeleton count={1} width={250} height={150} />
          ) : (
          <>
          <a className="sidebar__link" href="#">
          <img
          className="sidebar__img"
          src="img/playlist01.png"
          alt="day's playlist" />
          </a>
          </>
          )}
        </div>

      <div className="sidebar__item">

        {isLoading ? (
          <Skeleton count={1} width={250} height={150} />
          ) : (
            <>
          <a className="sidebar__link" href="#">
            <img
              className="sidebar__img"
              src="img/playlist02.png"
              alt="day's playlist" />
          </a>
                </>
              )}
      </div>
      
      </div>
      
    )
}

export default PlaylistItem