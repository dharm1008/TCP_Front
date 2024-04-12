import { useRoutes } from "react-router-dom";
import PublicRoutes from "./routes/Public";
import PrivateRoutes from "./routes/Private";

function App() {
  let isLoggedIn = false;
  const routes = useRoutes([{ path: "/*", element: isLoggedIn ? <PrivateRoutes /> : <PublicRoutes /> }]);

  return <div>{routes}</div>;
}

export default App;
