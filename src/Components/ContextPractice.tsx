import { createContext, useContext } from "react";

const UserContext = createContext<string>("Guest");

const App = () => {
  return (
    <UserContext.Provider value="Livyashree">
      <Child />
    </UserContext.Provider>
  );
};

const Child = () => {
  const user = useContext(UserContext);

  return <h2>Hello {user}</h2>;
};

export default App;
