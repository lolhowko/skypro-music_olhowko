import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';
import * as S from './audioPlayer.styles'



export function AudioPlayer({isLoading, currentTrack}) {

    return (
        <S.Bar>
        <S.BarContent>
          <S.BarPlayeerProgress></S.BarPlayeerProgress>
          <S.BarPlayerBlock>
            <S.BarPlayer>
              <S.BarControls>
                <S.PlayerBtnPrev>
                  <S.PlayerBtnPrevSvg alt="prev">
                    <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                  </S.PlayerBtnPrevSvg>
                </S.PlayerBtnPrev>
                <S.PlayerBtnPlay className="_btn">
                  <S.PlayerBtnPlaySvg alt="play">
                    <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                  </S.PlayerBtnPlaySvg>
                </S.PlayerBtnPlay>
                <S.PlayerBtnNext>
                  <S.PlayerBtnNextSvg alt="next">
                    <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                  </S.PlayerBtnNextSvg>
                </S.PlayerBtnNext>
                <S.PlayerBtnRepeat className="_btn-icon">
                  <S.PlayerBtnRepeatSvg alt="repeat">
                    <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                  </S.PlayerBtnRepeatSvg>
                </S.PlayerBtnRepeat>
                <S.PlayerBtnShuffle className="_btn-icon">
                  <S.PlayerBtnShuffletSvg alt="shuffle">
                    <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                  </S.PlayerBtnShuffletSvg>
                </S.PlayerBtnShuffle>
              </S.BarControls>

              <S.PlayerTrackPlay>
                <S.PlayerContain>
                  <S.TrackPlayImage>
                  {isLoading ?  (
                    <S.TrackPlaySvg alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </S.TrackPlaySvg>
                  ) : (
                    <Skeleton count={1} width={51} height={51} />
                    )}

                  </S.TrackPlayImage>
                  <S.TrackPlayAuthor>

                    {isLoading ? (<S.TrackPlayAuthorLink href="http://">{currentTrack.name}.</S.TrackPlayAuthorLink>
                        ) : (
                          <Skeleton count={1} />
                          )}

                  </S.TrackPlayAuthor>
                  <S.TrackPlayAlbum >

                    {isLoading ?  (
                            <S.TrackPlayAlbumLink href="http://">{currentTrack.author}</S.TrackPlayAlbumLink>
                          ) : (
                            <Skeleton count={1} />
                            )}
                    
                  </S.TrackPlayAlbum>
                </S.PlayerContain>

                <S.TrackPlayLikeDis>
                  <S.TrackPlayLike className="_btn-icon">
                    <S.TrackPlayLikeSvg alt="like">
                      <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    </S.TrackPlayLikeSvg>
                  </S.TrackPlayLike>
                  <S.TrackPlayDisike className="_btn-icon">
                    <S.TrackPlayDisikeSvg alt="dislike">
                      <use
                        xlinkHref="img/icon/sprite.svg#icon-dislike"
                      ></use>
                    </S.TrackPlayDisikeSvg>
                  </S.TrackPlayDisike>
                </S.TrackPlayLikeDis>
              </S.PlayerTrackPlay>
            </S.BarPlayer>
            <S.BarVolumeBlock className="volume">
              <S.VolumeContent>
                <S.VolumeImage>
                  <S.VolumeSvg alt="volume">
                    <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                  </S.VolumeSvg>
                </S.VolumeImage>
                <S.VolumeProgress className="_btn">
                  <S.VolumeProgressLine
                    className=" _btn"
                    type="range"
                    name="range" />
                </S.VolumeProgress>
              </S.VolumeContent>
            </S.BarVolumeBlock>
          </S.BarPlayerBlock>
        </S.BarContent>
      </S.Bar>
    )
}

export default AudioPlayer