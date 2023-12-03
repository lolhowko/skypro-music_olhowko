import { useEffect, useState } from 'react'
import * as S from './audioPlayer.styles'

export function VolumeBlock({ audioRef }) {
    const [volume, setVolume] = useState(50);
    useEffect(() => {
      if (audioRef) {
        audioRef.current.volume = volume / 100;
      }
    }, [volume, audioRef]);

  return (
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
            min={0}
            max={100}
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
          />
        </S.VolumeProgress>
      </S.VolumeContent>
    </S.BarVolumeBlock>
  )
}

export default VolumeBlock
