import React from 'react'
import Card from '../ui/Card'
import classes from './Meetup.module.css'

export default function Meetup({meetup}) {
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
                <button>Add to favorites</button>
            </div>
            </Card>
        </li>
    )
}
