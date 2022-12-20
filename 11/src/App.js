import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Posts from "./11/Posts/Posts";
import Home from "./11/Home/Home";
import UserInfo from "./11/Posts/Children/UserInfo";
import Comments from "./11/Posts/Children/Comments";
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