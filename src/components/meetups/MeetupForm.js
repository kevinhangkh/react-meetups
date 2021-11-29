import React from 'react'
import Card from '../ui/Card'
import classes from './MeetupForm.module.css'

export default function MeetupForm() {
    return (
        <Card>
            <form action="" className={classes.form}>
                <div className={classes.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" id="title" required />
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input type="url" id="image" required />
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Meetup Address</label>
                    <input type="text" id="address" required />
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Meetup Description</label>
                    <textarea type="text" id="description" required rows="5" />
                </div>
                <div className={classes.actions}>
                    <button>Submit Meetup</button>
                </div>
            </form>
        </Card>
    )
}
