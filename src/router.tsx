import { createBrowserRouter } from "react-router-dom";
import Login from "./login/Login";
import Layout from "./Layout";
import App from "./App";
import Inbox from "./inbox/Inbox";
import Today from "./today/Today";
import Notifications from "./notification/Notifications";
import ActiveProject from "./projec/active/ActiveProject";
// import ErrorPage from "./components/ErrorPage";
const router = createBrowserRouter([
  {
    element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Inbox /> },
      { path: "/app/inbox", element: <Inbox /> },
      { path: "/app/today", element: <Today /> },
      { path: "/app/what", element: <App /> },
      { path: "/app/notification", element: <Notifications /> },
      { path: "/app/projects/active", element: <ActiveProject /> },
      { path: "/app/projects/:id", element: <App /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
export default router;
