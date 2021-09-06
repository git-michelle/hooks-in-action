import React, { useState, Fragment } from "react";
import { users } from "../../static.json";

const UsersList = () => {
  const [userIndex, setUserIndex] = useState(null);
  const currentUser = users[userIndex];

  return (
    <Fragment>
      <ul>
        {users.map((user, index) => (
          <li key={user.id}>
            <button
              className={userIndex === index ? "selected btn" : "btn"}
              onClick={() => setUserIndex(index)}
            >
              {user.name}
            </button>
          </li>
        ))}
      </ul>
      <div>
        <h2>{currentUser.name}</h2>
        <h3>{currentUser.title}</h3>
        <p>{currentUser.notes}</p>
      </div>
    </Fragment>
  );
};

export default UsersList;
