import { Header } from "./components/Header/Header";
import { Route } from "react-router-dom";
import { RoutesWithNotFound } from "./Utilities/RoutesWithNotFound";
import PageTest from "./pages/PageTest/PageTest";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Header />
      <RoutesWithNotFound>
        <Route path="/" element={<Home />} />
        <Route path="/:test" element={<PageTest />} />
      </RoutesWithNotFound>
    </>
  );
}

export default App;
