import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

const App = () => {
  return (
    <UserContextProvider>
      <h1>Hello</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
};

export default App;
