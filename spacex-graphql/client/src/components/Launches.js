import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo";
import LaunchItem from "./LaunchItem";
import MissionKey from "./MissionKey";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

const Launches = () => {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <p>Error: {error.message}</p>;
  //   console.log(data.launches);

  return (
    <>
      <h1 className="display-4 my-3">Launches</h1>
      <MissionKey />
      {data.launches.map((launch) => {
        return <LaunchItem key={launch.flight_number} launch={launch} />;
      })}
    </>
  );
};

export default Launches;
