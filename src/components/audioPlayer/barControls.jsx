import * as S from './audioPlayer.styles'

export function BarControls ({handleStartStop, repeatTrack, toggleTrackRepeat, isPlaying}) {
    return (
<S.BarControls>
  <S.PlayerBtnPrev
  alt="prev"
  onClick={() => {
    alert('Еще не реализовано')
  }}>
    <S.PlayerBtnPrevSvg alt="prev">
      <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
    </S.PlayerBtnPrevSvg>
  </S.PlayerBtnPrev>
  <S.PlayerBtnPlay className="_btn" onClick={handleStartStop}>
    <S.PlayerBtnPlaySvg alt="play">
    {isPlaying ? (
            <use xlinkHref="/img/icon/sprite.svg#icon-pause" />
          ) : (
            <use xlinkHref="/img/icon/sprite.svg#icon-play" />
          )}
    </S.PlayerBtnPlaySvg>
  </S.PlayerBtnPlay>
  <S.PlayerBtnNext alt="next"
      onClick={() => {
        alert('Еще не реализовано')
      }}>
    <S.PlayerBtnNextSvg>
      <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
    </S.PlayerBtnNextSvg>
  </S.PlayerBtnNext>
  <S.PlayerBtnRepeat
    className="_btn-icon"
    alt="repeat"
    onClick={toggleTrackRepeat}
    repeatTrack={repeatTrack}
  >
    <S.PlayerBtnRepeatSvg alt="repeat">
      <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
    </S.PlayerBtnRepeatSvg>
  </S.PlayerBtnRepeat>
  <S.PlayerBtnShuffle
    className="_btn-icon"
    alt="shuffle"
    onClick={() => {
      alert('Еще не реализовано')
    }}
  >
    <S.PlayerBtnShuffletSvg alt="shuffle">
      <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
    </S.PlayerBtnShuffletSvg>
  </S.PlayerBtnShuffle>
</S.BarControls>

    )
}

export default BarControls

