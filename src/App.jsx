import React from "react";
import Profile from "./components/Profile/Profiles";
import userData from "./assets/userData.json";

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
    </>
  );
};
export default App;
