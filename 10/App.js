import Home from "./Home/Home";
import Search from "./Search/Search";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home />)
  },
  {
    path: '/search/:query',
    element: (<Search />),
  }
])
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
export default App;
