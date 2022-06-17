import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [activeUserIndex, setActiveUserIndex] = useState(0);
  const [userInfo, setUserInfo] = useState(null);
  let users = ["getify", "RahulMandyal1", "nnnkit"];

  useEffect(() => {
    fetch(`https://api.github.com/users/${users[activeUserIndex]}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("this is the response of this website", data);
        setUserInfo(data);
      });
  }, [activeUserIndex]);

  return (
    <>
      {users.map((user, index) => {
        return (
          <button
            className="userbutton"
            onClick={() => setActiveUserIndex(index)}
            key={user}
          >
            {user}
          </button>
        );
      })}
      <div className="user-info-container">
        <figure>
          {userInfo && <img src={userInfo.avatar_url} alt="user-profile" />}
        </figure>
      </div>
      ;
    </>
  );
}

export default App;
