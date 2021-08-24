import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      image: "https://cdn.gamer-network.net/2016/usgamer/DayOfTheTentacleReviewSpot3.jpg/EG11/resize/656x-1/quality/70",
      name: "Alex",
      places: 3,
    },
    {
      id: "u2",
      image: "https://cdn.gamer-network.net/2016/usgamer/DayOfTheTentacleReviewSpot1.jpg/EG11/resize/656x-1/quality/70",
      name: "Mies",
      places: 2,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
