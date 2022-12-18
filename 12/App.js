import SavedTime from "./SavedTime";
import Home from "./Home/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter(
  [{
    path: "/",
    element: (<Home />)
  },
  {
    path: "/time/:timer",
    element: (<SavedTime />)
  }]
)
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
export default App;