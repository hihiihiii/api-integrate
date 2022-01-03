import React, { useState, useEffect } from "react";
import axios from "axios";

const Test = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      setError(null);
      setUsers(null);
      setLoading(true);

      const res = await axios.get("https://jsonplaceholder.typicode.com/users");

      console.log(res.data);
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
    return <div>에러 발생</div>;
  }
  if (!users) {
    return null;
  }
  return (
    <>
      <div>
        <ul>
          {users?.map((el) => {
            return (
              <li key={el?.id}>
                {el?.username}({el?.name})
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
        <button
          onClick={() => {
            fetchUsers();
          }}
        >
          새로고침
        </button>
      </div>
    </>
  );
};

export default Test;
