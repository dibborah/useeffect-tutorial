import { useEffect, useState } from "react";
import User from "./User";

// strict mode

// on component mount

// Effect callback
// clean fc
// effect callback

const ExampleFetchDataInStrictMode = () => {
    console.log("Component Rendered");
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const URL = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    console.log("UseEffect callback");
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
        const response = await fetch(URL, {signal:signal});
        if (!(response.status >= 200 && response.status < 300)) {
          setIsError(true);
          setErrorMsg(`${response.status} Error`);
          setIsLoading(false);
          return;
        }
        const data = await response.json();
        console.log(data);
        setUsers(data);
        setIsLoading(false);
      };
    fetchData();
    return () => {
      console.log("Cleanup fc");
      controller.abort();
    };
  }, []);

  if (isLoading) {
    return (
      <h1 style={{ textAlign: "center", margin: "10rem 0" }}>...Loading</h1>
    );
  }

  if (isError) {
    return (
      <h1 style={{ textAlign: "center", margin: "10rem 0", color: "red" }}>
        {errorMsg}
      </h1>
    );
  }
  return (
    <div>
      {users.map((user) => (
        <User {...user} key={user.id} />
      ))}
    </div>
  );
};

export default ExampleFetchDataInStrictMode;
