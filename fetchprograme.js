import React, { useEffect, useState } from "react";

const fetchprograme = () => {
  const [users, setUsers] = useState();
  const url = "https://jsonplaceholder.typicode.com/users";

  const fetchData = () => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return setUsers(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default fetchprograme;
