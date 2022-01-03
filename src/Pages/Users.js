import React, { useState, useEffect } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      setError(null);
      setUsers(null);
      setLoading(true);

      const res = await axios.get("https://jsonplaceholder.typicode.com/users");

      console.log(res);
      setUsers(res.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <div>로딩중</div>;
  }
  if (error) {
    return <div>에러가 발생하였습니다.</div>;
  }
  if (!users) {
    return null;
  }

  return (
    <>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              {user.username} {user.name}
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => {
          fetchUsers();
        }}
      >
        다시 불러오기
      </button>
    </>
  );
};

export default Users;
