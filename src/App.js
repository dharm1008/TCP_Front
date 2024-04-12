import { useRoutes } from "react-router-dom";
import PublicRoutes from "./routes/Public";
import PrivateRoutes from "./routes/Private";
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";

function App() {
  let isLoggedIn = false;
  const routes = useRoutes([{ path: "/*", element: isLoggedIn ? <PrivateRoutes /> : <PublicRoutes /> }]);

  return <PrimeReactProvider>{routes}</PrimeReactProvider>;
}

export default App;
