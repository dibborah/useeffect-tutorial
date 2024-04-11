import { Fragment, useEffect, useState } from "react";
import User from "./User";

const ExampleFetchData = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const URL = "https://jsonplaceholder.typicode.com/users";
  // fetching using 2 approaches:
  // 1. promises
  // 2. using async await

  // using normal functions
  //   async function fetchData() {
  // using promises

  // fetch(URL)
  //   .then((response) => {
  //      return response.json();// you have to return the response in a json format than only after one more .than you'll can catch the data
  //   })
  //   .then((data) => {
  //     console.log(data);
  //   });

  // using async await
  // const response = await fetch(URL);
  // const data = await response.json();
  // console.log(data);
  //   }

  // using arraw function
  const fetchData = async () => {
    setIsLoading(true);
    // using promises

    // fetch(URL)
    //   .then((response) => {
    //      return response.json();// you have to return the response in a json format than only after one more .than you'll can catch the data
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   });

    // using async await
    const response = await fetch(URL);
    console.log(response);
    if(!(response.status >= 200 && response.status < 300)){
      setIsError(true);
      setErrorMsg(`${response.status} Error`)
      setIsLoading(false);
      return;// Write return statement if you do not want to excute the further code in the function if the if condition is true
    }
    const data = await response.json();
    console.log("Executed response.json()");
    setUsers(data);
    console.log("Executed setUser()");
    // setTimeout(() => {
      setIsLoading(false);
    // }, 2000);
    console.log("Executed setTimeout");
  };
  useEffect(() => {
    fetchData();
  }, []); // empty dependency => useEffect ek bar hi call hoga initial render ke baad

  if (isLoading) {
    return (
      <h1 style={{ textAlign: "center", margin: "10rem 0" }}>...Loading</h1>
    );
  }

  if(isError){
    return <h1 style={{ textAlign: "center", margin: "10rem 0", color: "red" }}>{errorMsg}</h1>
  }

  return (
    <Fragment>
      {users.map((user) => (
        <User {...user} key={user.id} />
      ))}
    </Fragment>
  );
};

export default ExampleFetchData;

// Learn Todo:

// 1. learn the different scenerios when useEffect goes in an infinite loop
