import Home from "./10/Home/Home";
import Search from "./10/Search/Search";
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