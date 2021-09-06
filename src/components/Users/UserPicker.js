import React from "react";
import { users } from "../../static.json";

const UserPicker = () => {
  return (
    <select>
      {users.map((user) => (
        <option key={user.id} value={user.name}>
          {user.name}
        </option>
      ))}
    </select>
  );
};

export default UserPicker;
