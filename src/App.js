import "./App.css";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import { RouterProvider } from "react-router-dom";
import routes from "./layout/routes";

function App() {
  useEffect(() => {
    themeChange(false);
  }, []);
  return (
    <div className="App">
      <RouterProvider router={routes}/>
    </div>
  );
}

export default App;
