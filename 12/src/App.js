import SavedTime from "./12/SavedTime";
import Home from "./12/Home/Home";
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