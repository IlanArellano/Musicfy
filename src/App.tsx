import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./App.css";
import { ViewManager } from "@ihaz/react-ui-utils";

function App() {
  return (
    <main>
      <ViewManager.Component />
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
