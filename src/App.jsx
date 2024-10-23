// eslint-disable-next-line no-unused-vars
import React from "react";
import Profile from "./components/Profile/Profiles";
import FriendList from "./components/FriendList/FriendList";
import userData from "./assets/userData.json";
import friends from "./assets/friends.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </>
  );
};
export default App;
