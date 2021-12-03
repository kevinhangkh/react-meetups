import React, { useContext } from "react"
import { Link } from "react-router-dom"
import FavoriteContext from "../context/favorite-context"
import classes from "./MainNavigationBar.module.css"

export default function MainNavigationBar() {
    const favoriteContext = useContext(FavoriteContext)

    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">All Meetups</Link>
                    </li>
                    <li>
                        <Link to="/new-meetup">Add New Meetups</Link>
                    </li>
                    <li>
                        <Link to="/favorites">
                            My Favorites
                            <span className={classes.badge}>
                                {favoriteContext.totalFavorites}
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
