export function trackList() {
    return (
        <div class="main__centerblock centerblock">
        <div class="centerblock__search search">
          <svg class="search__svg">
            <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
          </svg>
          <input
            class="search__text"
            type="search"
            placeholder="Поиск"
            name="search" />
        </div>
        <h2 class="centerblock__h2">Треки</h2>
        <div class="centerblock__filter filter">
          <div class="filter__title">Искать по:</div>
          <div class="filter__button button-author _btn-text">
            исполнителю
          </div>
          <div class="filter__button button-year _btn-text">
            году выпуска
          </div>
          <div class="filter__button button-genre _btn-text">жанру</div>
        </div>
        <div class="centerblock__content">
          <div class="content__title playlist-title">
            <div class="playlist-title__col col01">Трек</div>
            <div class="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
            <div class="playlist-title__col col03">АЛЬБОМ</div>
            <div class="playlist-title__col col04">
              <svg class="playlist-title__svg" alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
              </svg>
            </div>
          </div>
          
          <div class="content__playlist playlist">
            <div class="playlist__item">
              <div class="playlist__track track">
                <div class="track__title">
                  <div class="track__title-image">
                    <svg class="track__title-svg" alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div class="track__title-text">
                    <a class="track__title-link" href="http://"
                    >Guilt <span class="track__title-span"></span></a>
                  </div>
                </div>
                <div class="track__author">
                  <a class="track__author-link" href="http://">Nero</a>
                </div>
                <div class="track__album">
                  <a class="track__album-link" href="http://"
                  >Welcome Reality</a>
                </div>
                <div class="track__time">
                  <svg class="track__time-svg" alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                  <span class="track__time-text">4:44</span>
                </div>
              </div>
            </div>

            <div class="playlist__item">
              <div class="playlist__track track">
                <div class="track__title">
                  <div class="track__title-image">
                    <svg class="track__title-svg" alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div class="track__title-text">
                    <a class="track__title-link" href="http://"
                    >Elektro <span class="track__title-span"></span></a>
                  </div>
                </div>
                <div class="track__author">
                  <a class="track__author-link" href="http://"
                  >Dynoro, Outwork, Mr. Gee</a>
                </div>
                <div class="track__album">
                  <a class="track__album-link" href="http://">Elektro</a>
                </div>
                <div class="track__time">
                  <svg class="track__time-svg" alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                  <span class="track__time-text">2:22</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
}