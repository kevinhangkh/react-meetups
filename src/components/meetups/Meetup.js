import React, { useContext } from "react"
import FavoriteContext from "../context/favorite-context"
import Card from "../ui/Card"
import classes from "./Meetup.module.css"

export default function Meetup({ meetup }) {
    const favoriteContext = useContext(FavoriteContext)
    const itemIsFavorite = favoriteContext.isFavorite(meetup.id)

    function toggleFavoriteMeetupHandler() {
        if (itemIsFavorite) favoriteContext.removeFavorite(meetup.id)
        else favoriteContext.addFavorite(meetup)
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={meetup.image} alt={meetup.title} />
                </div>
                <div className={classes.content}>
                    <h3>{meetup.title}</h3>
                    <address>{meetup.address}</address>
                    <p>{meetup.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoriteMeetupHandler}>
                        {itemIsFavorite
                            ? "Remove from favorites"
                            : "Add to favorites"}
                    </button>
                </div>
            </Card>
        </li>
    )
}
