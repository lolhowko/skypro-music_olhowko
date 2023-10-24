import { useEffect, useState } from 'react';
import { trackArr } from '../../utilitis/trackArr';

import * as S from './track.styles'
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

  const fullPlayList = trackArr.map((track) =>
    <S.PlaylistItem key={track.id}>
      <S.PlaylistTrack className="track">
        <S.TrackTittle>
          <S.TrackTittleImage>
          {isLoading ? (
          <Skeleton count={1} width={51} height={51}/>
            ) : (          
              <S.TrackTittleSvg alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note" />
              </S.TrackTittleSvg>
        )}
          </S.TrackTittleImage>
          <div className="track__title-text">

          {isLoading ? (
        <Skeleton count={1} width={350}/>
          ) : (    
            <S.TrackTittleLink href="http://">
              {track.trackTitleLink.title} <S.TrackTittleSpan/>
            </S.TrackTittleLink>
          )}
          </div>
        </S.TrackTittle>
        <S.TrackAuthor>
        {isLoading ? (
        <Skeleton count={1} width={300}/>
          ) : (    
            <S.TrackAuthorLink href="http://">
            {track.trackAuthorLink}
            </S.TrackAuthorLink>      
      )}
        </S.TrackAuthor>
        <S.TrackAlbum>
        {isLoading ? (
          <Skeleton count={1} width={245}/>
            ) : (    
              <S.TrackAlbumLink href="http://">
              {track.trackAlbumLink}
              </S.TrackAlbumLink>     
        )}
        </S.TrackAlbum>

        {isLoading ? (
            <Skeleton count={1}/>
              ) : (    
                <div className="track__time">   
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref="/musical_service/src/fonts and style/img/icon/sprite.svg#icon-like" />
                </S.TrackTimeSvg>
                <S.TrackTimeText>{track.trackTimeText}</S.TrackTimeText>
              </div>   
          )}
      </S.PlaylistTrack>
    </S.PlaylistItem>
)
    // return (
    //     <S.PlaylistItem>
    //           <S.PlaylistTrack className="track">
    //             <S.TrackTittle>
    //               <S.TrackTittleImage>
    //               {isLoading ? (
    //               <Skeleton count={1} width={51} height={51}/>
    //                 ) : (          
    //                   <S.TrackTittleSvg alt="music">
    //                     <use xlinkHref="img/icon/sprite.svg#icon-note" />
    //                   </S.TrackTittleSvg>
    //             )}
    //               </S.TrackTittleImage>
    //               <div className="track__title-text">

    //               {isLoading ? (
    //             <Skeleton count={1} width={350}/>
    //               ) : (    
    //                 <S.TrackTittleLink href="http://">
    //                   Guilt <S.TrackTittleSpan/>
    //                 </S.TrackTittleLink>
    //               )}
    //               </div>
    //             </S.TrackTittle>
    //             <S.TrackAuthor>
    //             {isLoading ? (
    //             <Skeleton count={1} width={300}/>
    //               ) : (    
    //                 <S.TrackAuthorLink href="http://">
    //                   Nero
    //                 </S.TrackAuthorLink>      
    //           )}
    //             </S.TrackAuthor>
    //             <S.TrackAlbum>
    //             {isLoading ? (
    //               <Skeleton count={1} width={245}/>
    //                 ) : (    
    //                   <S.TrackAlbumLink href="http://">
    //                   Welcome Reality
    //                   </S.TrackAlbumLink>     
    //             )}
    //             </S.TrackAlbum>

    //             {isLoading ? (
    //                 <Skeleton count={1}/>
    //                   ) : (    
    //                     <div className="track__time">   
    //                     <S.TrackTimeSvg alt="time">
    //                       <use xlinkHref="/musical_service/src/fonts and style/img/icon/sprite.svg#icon-like" />
    //                     </S.TrackTimeSvg>
    //                     <S.TrackTimeText>4:44</S.TrackTimeText>
    //                   </div>   
    //               )}


    //             {/* <div className="track__time">
    //               <svg className="track__time-svg" alt="time">
    //                 <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
    //               </svg>
    //               <span className="track__time-text">2:22</span>
    //             </div> */}
    //           </S.PlaylistTrack>
    //     </S.PlaylistItem>
    // )

    return(fullPlayList)
}

export default Track
