import { useRoutes } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import ConstructionExisting from "./page/ConstructionExisting";
import ConstViolation from "./page/ConstViolation";
import Demolitionexercise from "./page/Demolitionexercise";
import DemolitionSchedule from "./page/DemolitionSchedule";
import FirMemo from "./page/FirMemo";
import FollowUp from "./page/FollowUp";
import IllegalLand from "./page/IllegalLand";
import IndependentConstruction from "./page/IndependentConstruction";
import MisuseLand from "./page/MisuseLand";
import MisuseReport from "./page/MisuseReport";
import NatureofViolation from "./page/NatureofViolation";
import OfficeProposal from "./page/OfficeProposal";
import OrderDTP from "./page/OrderDTP";
import PrmCompetentAuth from "./page/PrmCompetentAuth";
import RevenueEstate from "./page/RevenueEstate";
import SearchFilling from "./page/SearchFilling";
import SearchIllegal from "./page/SearchIllegal";
import SearchUC from "./page/SearchUC";
import SubDivision from "./page/SubDivision";
import Tcp from "./page/Tcp";

const Layout = ({ children }) => (
  <div>
    <Header />
    <div>{children}</div>
    <Footer />
  </div>
);

function App() {
  let element = useRoutes([
    { path: "/construction-existing", element: <ConstructionExisting /> },
    { path: "/const-violation", element: <ConstViolation /> },
    { path: "/demolitionexercise", element: <Demolitionexercise /> },
    { path: "/demolition-schedule", element: <DemolitionSchedule /> },
    { path: "/fir-memo", element: <FirMemo /> },
    { path: "/follow-up", element: <FollowUp /> },
    { path: "/illegal-land", element: <IllegalLand /> },
    { path: "/independent-construction", element: <IndependentConstruction /> },
    { path: "/misuse-land", element: <MisuseLand /> },
    { path: "/misuse-report", element: <MisuseReport /> },
    { path: "/natureof-violation", element: <NatureofViolation /> },
    { path: "/office-proposal", element: <OfficeProposal /> },
    { path: "/order-dtp", element: <OrderDTP /> },
    { path: "/prm-competent-auth", element: <PrmCompetentAuth /> },
    { path: "/revenue-estate", element: <RevenueEstate /> },
    { path: "/search-filling", element: <SearchFilling /> },
    { path: "/search-illegal", element: <SearchIllegal /> },
    { path: "/search-uc", element: <SearchUC /> },
    { path: "/sub-division", element: <SubDivision /> },
    { path: "/tcp", element: <Tcp /> },
  ]);

  return <Layout>{element}</Layout>;
}

export default App;
