import { createContext, useContext, useState } from "react";
const ThemeContext = createContext<string>("light");

   const UsercontextExample = () => {
  const [theme, setTheme] = useState<string>("light");

  return (
    <ThemeContext.Provider value={theme}>
      <Child />
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </ThemeContext.Provider>
  );
};
const Child = () => {
  const currentTheme = useContext(ThemeContext);

  return <h2>Current Theme: {currentTheme}</h2>;
}

export default UsercontextExample;