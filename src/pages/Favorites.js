import React, { useContext } from "react"
import FavoriteContext from "../components/context/favorite-context"
import MeetupList from "../components/meetups/MeetupList"

export default function FavoritesPage() {
    const favoriteContext = useContext(FavoriteContext)
    let content

    if (favoriteContext.totalFavorites === 0)
        content = <p>You have no favorites yet. Start adding some?</p>
    else content = <MeetupList meetupList={favoriteContext.favorites} />

    return (
        <section>
            <h1>Favorite Meetups Page</h1>
            {content}
        </section>
    )
}
