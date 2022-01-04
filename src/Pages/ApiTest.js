import React, { useState, useEffect } from "react";
import axios from "axios";
import { handlerHello } from "../Util/API";

const ApiTest = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState(null);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log(res.data);
      setUsers(res.data);
    } catch (e) {
      setError(e);
      console.error(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        로딩중
      </div>
    );
  }
  if (error) {
    return <div>에러가 발생했습니다.</div>;
  }
  if (!users) {
    return null;
  }
  return (
    <>
      <div
        style={{
          marginTop: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <ul>
            {users.map((el) => {
              return (
                <li key={el?.id}>
                  {el?.username}({el?.name})
                </li>
              );
            })}
          </ul>
        </div>
        <div style={{ marginTop: 20 }}>
          <button
            onClick={() => {
              fetchUsers();
            }}
          >
            리스트 불러오기
          </button>
        </div>
      </div>
    </>
  );
};

export default ApiTest;
