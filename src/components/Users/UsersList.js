import React, { useState } from "react";
import { users } from "../../static.json";

const UsersList = () => {
  const [userIndex, setUserIndex] = useState(null);
  console.log(users);
  return (
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
  );
};

export default UsersList;
