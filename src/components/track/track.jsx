import { useEffect, useState } from 'react';
import './track.css'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


export function Track() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

      return () => clearTimeout(timer);
    }, []);


    return (
        <div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                  {isLoading ? (
                  <Skeleton count={1} width={51} height={51}/>
                    ) : (          
                      <svg className="track__title-svg" alt="music">
                        <use xlinkHref="img/icon/sprite.svg#icon-note" />
                      </svg>
                )}
                  </div>
                  <div className="track__title-text">

                  {isLoading ? (
                <Skeleton count={1} width={350}/>
                  ) : (    
                    <a className="track__title-link" href="http://">
                      Guilt <span className="track__title-span" />
                    </a>
                  )}
                  </div>
                </div>
                <div className="track__author">
                {isLoading ? (
                <Skeleton count={1} width={300}/>
                  ) : (    
                    <a className="track__author-link" href="http://">
                      Nero
                    </a>      
              )}
                </div>
                <div className="track__album">
                {isLoading ? (
                  <Skeleton count={1} width={245}/>
                    ) : (    
                      <a className="track__album-link" href="http://">
                      Welcome Reality
                      </a>     
                )}
                </div>

                {isLoading ? (
                    <Skeleton count={1}/>
                      ) : (    
                        <div className="track__time">   
                        <svg className="track__time-svg" alt="time">
                          <use xlinkHref="/musical_service/src/fonts and style/img/icon/sprite.svg#icon-like" />
                        </svg>
                        <span className="track__time-text">4:44</span>
                      </div>   
                  )}


                {/* <div className="track__time">
                  <svg className="track__time-svg" alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                  <span className="track__time-text">2:22</span>
                </div> */}
              </div>
        </div>
    )
}

export default Track
