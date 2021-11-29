import React from 'react'
import classes from './Layout.module.css'
import MainNavigationBar from './MainNavigationBar'

export default function Layout({children}) {
    return (
        <div>
            <MainNavigationBar />
            <main className={classes.main}>
                {children}
            </main>
        </div>
    )
}
