import { useDispatch, useSelector } from "react-redux"
import TrackList from "../../components/tracklist/tracklist"
import { useGetFavouriteTracksAllQuery } from "../../serviceQuery/tracks";
import { favouritesTracksSelector } from "../../store/selectors/indexSelectors";
import { useEffect } from "react";
import { setCurrentPage, setFavouriteTracksAll } from "../../store/slices/slices";

export const Favorites = () => {
  const dispatch = useDispatch();

  const { data, error, isLoading } = useGetFavouriteTracksAllQuery();

  const favouritesTracks = useSelector(favouritesTracksSelector);

  useEffect(() => {
    if(data) {
        dispatch(setFavouriteTracksAll(data))
        dispatch(setCurrentPage("Favourites"))
    }
  }, [data])

  return (
    <>
      <TrackList
        title="Мои треки"
        tracks={favouritesTracks}
        error={error}
        isLoading={isLoading}
        isFavorites
      />
      {isLoading && <div>Загрузка...</div>}
      {error && <div>{error}</div>}
    </>
  )
}
