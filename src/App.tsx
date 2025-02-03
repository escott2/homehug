import "./App.css";
import { Home, Palette, AppLayout, ErrorPage } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PaintPalette } from "./features";
import PaintDetail from "./features/PaintDetail/PaintDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/palette",
        element: <Palette />,
        children: [
          { index: true, element: <PaintPalette /> },
          { path: "/palette/swatch/:id", element: <PaintDetail /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
