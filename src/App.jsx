import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Layout from "./components/Layout";
import MainPage from "./components/MainPage";
import Lipsticks from "./components/Lipsticks";
import Blushes from "./components/Blushes";
import NailPolishes from "./components/NailPolishes";
import Mascaras from "./components/Mascaras";
import LipLiners from "./components/LipLiners";
import Foundations from "./components/Foundations";
import Eyeshadows from "./components/Eyeshadow";
import Eyeliners from "./components/Eyeliner";
import Bronzers from "./components/Bronzers";
import Eyebrows from "./components/Eyebrows";

function App() {
  return (
    <>
      <Header />
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/lipsticks" element={<Lipsticks />} />
          <Route path="/blushes" element={<Blushes />} />
          <Route path="/nailpolishes" element={<NailPolishes />} />
          <Route path="/mascaras" element={<Mascaras />} />
          <Route path="/lipliners" element={<LipLiners />} />
          <Route path="/foundations" element={<Foundations />} />
          <Route path="/eyeshadows" element={<Eyeshadows />} />
          <Route path="/eyeliners" element={<Eyeliners />} />
          <Route path="/eyebrows" element={<Eyebrows />} />
          <Route path="/bronzers" element={<Bronzers />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
