import React, { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

// const DUMMY_DATA = [
//   {
//     id: "m1",
//     title: "This is the first meetup",
//     image:
//       "https://media.newyorker.com/photos/5d72aa6d39947c00093272d8/16:9/w_2560,h_1440,c_limit/SundayReading-AmericanCityscapes.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, an amazing meetup you definitely should not miss. It will be fun ",
//   },
//   {
//     id: "m2",
//     title: "This is the first meetup",
//     image:
//       "https://media.newyorker.com/photos/5d72aa6d39947c00093272d8/16:9/w_2560,h_1440,c_limit/SundayReading-AmericanCityscapes.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, an amazing meetup you definitely should not miss. It will be fun ",
//   },
// ];

const AllMeetups = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://react-meetup-f9c15-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>.....Loading</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>

      <MeetupList meetups={loadedMeetups} />
    </section>
  );
};

export default AllMeetups;
