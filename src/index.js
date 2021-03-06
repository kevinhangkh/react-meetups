import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import "./index.css"
import App from "./App"
import { FavoriteContextProvider } from "./components/context/favorite-context"

ReactDOM.render(
    <FavoriteContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </FavoriteContextProvider>,
    document.getElementById("root")
)
