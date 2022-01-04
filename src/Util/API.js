import axios from "axios";

const handlerHello = () => {
  console.log("HelloWorld");
};

const fetchUsers = async ({ setLoading, setError, setUsers }) => {
  try {
    setLoading(true);
    setError(null);
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(res.data);
    setUsers(res.data);
  } catch (e) {
    setError(e);
  }
  setLoading(false);
};

export { handlerHello, fetchUsers };
