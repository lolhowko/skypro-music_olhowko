import { FilterBlock } from "../filterBlock/filterBlock";
import { SearchBlock } from "../searchBlock/searchBlock";
import { Track } from "../track/track";
import * as S from './tracklist.styles'


export function TrackList() {
    return (
        <S.MainCenterblock className="centerblock">

        <SearchBlock />
        
        <S.CenterblockH2>Треки</S.CenterblockH2>

        <FilterBlock />

        <S.CenterblockContent>
          <S.ContentTittle>
            <S.Col01>Трек</S.Col01>
            <S.Col02>ИСПОЛНИТЕЛЬ</S.Col02>
            <S.Col03>АЛЬБОМ</S.Col03>
            <S.Col04>
              <S.ContentTittleSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
              </S.ContentTittleSvg>
            </S.Col04>
          </S.ContentTittle>
          
          <S.ContentPlaylist className="playlist">


            <Track />
            <Track />
            <Track />


          </S.ContentPlaylist>
        </S.CenterblockContent>
      </S.MainCenterblock>
    )
}

export default TrackList
