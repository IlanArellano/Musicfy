import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./App.css";
import { viewManager } from "./ui/view";

function App() {
  return (
    <main>
      <viewManager.Component />
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
