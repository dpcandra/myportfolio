import './App.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";

// ------------------Pages--------------------------
import Homepage from './pages/Homepage';
import Login from './pages/Login';

function App() {

  const router = createBrowserRouter([
      {
          path: "/",
          element: <Homepage/>,
      },
      {
          path: "/login",
          element: <Login/>,
      },
  ]);
  

  return (
    <RouterProvider router={router} />
  )
}

export default App;
