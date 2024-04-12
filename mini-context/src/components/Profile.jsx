import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <h1>Not Logged In</h1>;
  return (
    <div>
      <h1>Profile: {user.userName}</h1>
    </div>
  );
};

export default Profile;
