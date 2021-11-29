import React from "react"
import classes from "./MeetupList.module.css"
import Meetup from "./Meetup"

export default function MeetupList({ meetupList }) {
    return (
        <ul className={classes.list}>
            {meetupList.map((meetup) => (
                <Meetup key={meetup.id} meetup={meetup} />
            ))}
        </ul>
    )
}
