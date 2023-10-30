import { useEffect, useState } from 'react';
import { trackArr } from '../../utilitis/trackArr';

import * as S from './track.styles'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


export function Track({ isLoading, tracks, handleCurrentTrack }) {

  const fullPlayList = tracks.map((track) =>
    <S.PlaylistItem key={track.id} onClick={() => handleCurrentTrack(track)}>
      <S.PlaylistTrack className="track">
        <S.TrackTittle>
          <S.TrackTittleImage>
          {isLoading ? (          
              <S.TrackTittleSvg alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note" />
              </S.TrackTittleSvg>
        ) : (
          <Skeleton count={1} width={51} height={51}/>
        )}
          </S.TrackTittleImage>
          <div className="track__title-text">

          {isLoading ? (    
            <S.TrackTittleLink href="http://">
              {track.name} 
              {track.remix ? (<S.TrackTittleSpan>{track.remix}</S.TrackTittleSpan>) : ("")}
            </S.TrackTittleLink>
          ) :
          (
            <Skeleton count={1} width={350}/>
              )
          }
          </div>
        </S.TrackTittle>
        <S.TrackAuthor>
        {isLoading ? (    
            <S.TrackAuthorLink href="http://">
            {track.author}
            </S.TrackAuthorLink>      
      ) : (
        <Skeleton count={1} width={300}/>
          )}

        </S.TrackAuthor>
        <S.TrackAlbum>
        {isLoading ?  (    
              <S.TrackAlbumLink href="http://">
              {track.album}
              </S.TrackAlbumLink>     
        ) : (
          <Skeleton count={1} width={245}/>
          )}
        </S.TrackAlbum>

        {isLoading ? (    
                <div className="track__time">   
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref="/musical_service/src/fonts and style/img/icon/sprite.svg#icon-like" />
                </S.TrackTimeSvg>
                <S.TrackTimeText>{track.duration_in_seconds}</S.TrackTimeText>
              </div>   
          ) :
          (
            <Skeleton count={1}/>
          )}
      </S.PlaylistTrack>
    </S.PlaylistItem>
)

    return(fullPlayList)
}

export default Track
