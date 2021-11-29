
import React from 'react';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_DATA = [
    {
      id: 'm1',
      title: 'This is a first meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Gold_Coast_skyline.jpg/1920px-Gold_Coast_skyline.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
      id: 'm2',
      title: 'This is a second meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg/1920px-KeizersgrachtReguliersgrachtAmsterdam.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a second, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
  ];

const AllMeetupsPage = () => {
    return (
        <section>
            <h1>All Meetups Page</h1>
            <MeetupList meetupList={DUMMY_DATA}/>
        </section>
    );
}

export default AllMeetupsPage;
