import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Posts from "./Posts/Posts";
import Home from "./Home/Home";
import UserInfo from "./Posts/Children/UserInfo";
import Comments from "./Posts/Children/Comments";
const router = createBrowserRouter(
  [{
    path: "/",
    element: (<Home />)
  },
  {
    path: "/posts/:id",
    element: (<Posts />),
    children: [
      {
        path: "comments/:id",
        element: (<Comments />)
      },
      {
        path: "userInfos/:id",
        element: (<UserInfo />)
      }
    ]
  }
  ]
)
function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App
