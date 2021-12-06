import React from "react"
import { useState, createContext } from "react"

const FavoriteContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (meetup) => {},
    removeFavorite: (meetupId) => {},
    isFavorite: (meetupId) => {}
})

export function FavoriteContextProvider({ children }) {
    const [userFavorites, setUserFavorites] = useState([]);
    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        isFavorite: isFavoriteHandler
    };

    function addFavoriteHandler(meetup) {
        setUserFavorites((prevFavorites) => {
            return prevFavorites.concat(meetup)
        })
    }
    
    function removeFavoriteHandler(meetupId) {
        setUserFavorites((prevFavorites) => {
            return prevFavorites.filter(meetup => meetup.id !== meetupId)
        })
    }
    
    function isFavoriteHandler(meetupId) {
        return userFavorites.some(meetup => meetup.id === meetupId)
    }

    return (
        <FavoriteContext.Provider value={context}>
            {children}
        </FavoriteContext.Provider>
    )
}

export default FavoriteContext;