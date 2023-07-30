import { RouterProvider } from "react-router-dom";
import router from "./router";
import UIUncontrolledComponents from "./ui/component";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

import "./App.css";

function App() {
  return (
    <main>
      <UIUncontrolledComponents />
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
