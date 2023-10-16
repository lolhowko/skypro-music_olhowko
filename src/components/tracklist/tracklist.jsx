import { FilterBlock } from "../filterBlock/filterBlock";
import { SearchBlock } from "../searchBlock/searchBlock";
import { Track } from "../track/track";
import './tracklist.css'


export function TrackList() {
    return (
        <div className="main__centerblock centerblock">

        <SearchBlock />
        
        <h2 className="centerblock__h2">Треки</h2>

        <FilterBlock />

        <div className="centerblock__content">
          <div className="content__title playlist-title">
            <div className="playlist-title__col col01">Трек</div>
            <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
            <div className="playlist-title__col col03">АЛЬБОМ</div>
            <div className="playlist-title__col col04">
              <svg className="playlist-title__svg" alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
              </svg>
            </div>
          </div>
          
          <div className="content__playlist playlist">


            <Track />
            <Track />
            <Track />


          </div>
        </div>
      </div>
    )
}

export default TrackList
