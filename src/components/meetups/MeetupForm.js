import React from 'react'
import { useRef } from 'react';
import Card from '../ui/Card'
import classes from './MeetupForm.module.css'

export default function MeetupForm({ addNewMeetup }) {

    const meetupTitle = useRef();
    const meetupImage = useRef();
    const meetupAddress = useRef();
    const meetupDesc = useRef();

    function handleSubmit(event) {
        event.preventDefault();

        const title = meetupTitle.current.value;
        const image = meetupImage.current.value;
        const address = meetupAddress.current.value;
        const desc = meetupDesc.current.value;

        const meetupData = {
            title: title,
            image: image,
            address: address,
            description: desc,
        };
        
        addNewMeetup(meetupData);
    }

    return (
        <Card>
            <form action="" className={classes.form} onSubmit={handleSubmit}>
                <div className={classes.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" id="title" required ref={meetupTitle}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input type="url" id="image" required ref={meetupImage}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Meetup Address</label>
                    <input type="text" id="address" required ref={meetupAddress}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Meetup Description</label>
                    <textarea type="text" id="description" required rows="5" ref={meetupDesc}/>
                </div>
                <div className={classes.actions}>
                    <button>Submit Meetup</button>
                </div>
            </form>
        </Card>
    )
}
