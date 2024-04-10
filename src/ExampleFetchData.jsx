import { useEffect, useState } from "react";

const ExampleFetchData = () => {
    const [data, setFetchData] = useState([]);
  const URL = "https://jsonplaceholder.typicode.com/posts";
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
    const data = await response.json();
    console.log(data);
    setFetchData(data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>ExampleFetchData</h1>
    </div>
  );
};

export default ExampleFetchData;
