import React from "react"
import { useNavigate } from "react-router-dom"
import MeetupForm from "../components/meetups/MeetupForm"

export default function NewMeetupPage() {
    const navigate = useNavigate()

    function addMeetupHandler(meetupData) {
        fetch(
            "https://react-meetups-a50a6-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
            {
                method: "POST",
                body: JSON.stringify(meetupData),
                headers: {
                    "Content-Type": "application/json"
                }
            }
        ).then(() => {
            navigate("/");
        })
    }

    return (
        <div>
            <h1>New Meetup Page</h1>
            <MeetupForm addNewMeetup={addMeetupHandler} />
        </div>
    )
}
