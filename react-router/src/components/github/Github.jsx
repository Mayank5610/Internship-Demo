// import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/hiteshchoudhary")
  //       .then((response) => response.json())
  //       .then((result) => {
  //         console.log(result);
  //         setData(result);
  //       });
  //   }, []);

  const data = useLoaderData();

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-lg">
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="image" width={300} />
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  return response.json();
};
