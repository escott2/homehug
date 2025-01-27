import "./App.css";
import { Home, Palette, AppLayout } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/palette", element: <Palette /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
