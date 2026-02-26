import Nouveautes from "./pages/Nouveautes";
import { Route, Routes } from "react-router-dom";
import Suggestions from "./pages/Suggestions";
import Collection from "./pages/Collection";
import Fil from "./pages/Fil";
import Recherche from "./pages/Recherche";
import VueDetail from "./pages/VueDetail";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import HomeIntro from "./pages/intro/HomeIntro";
import IntroLayout from "./layouts/IntroLayout";
import ContenuLayout from "./layouts/ContenuLayout";
import HomeSlide1 from "./pages/intro/HomeSlide1";
import HomeSlide2 from "./pages/intro/HomeSlide2";
import HomeSlide3 from "./pages/intro/HomeSlide3";

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Routes>
        <Route
          path="/"
          element={
            <IntroLayout>
              <HomeIntro />
            </IntroLayout>
          }
        />
        <Route
          path="/home-slide-1"
          element={
            <IntroLayout>
              <HomeSlide1 />
            </IntroLayout>
          }
        />
        <Route
          path="/home-slide-2"
          element={
            <IntroLayout>
              <HomeSlide2 />
            </IntroLayout>
          }
        />
        <Route
          path="/home-slide-3"
          element={
            <IntroLayout>
              <HomeSlide3 />
            </IntroLayout>
          }
        />
        <Route
          path="/nouveautes"
          element={
            <ContenuLayout>
              <Nouveautes />
            </ContenuLayout>
          }
        />
        <Route
          path="/suggestions"
          element={
            <ContenuLayout>
              <Suggestions />
            </ContenuLayout>
          }
        />
        <Route
          path="/collection"
          element={
            <ContenuLayout>
              <Collection />
            </ContenuLayout>
          }
        />
        <Route
          path="/fil"
          element={
            <ContenuLayout>
              <Fil />
            </ContenuLayout>
          }
        />
        <Route
          path="/recherche"
          element={
            <ContenuLayout>
              <Recherche />
            </ContenuLayout>
          }
        />
        <Route
          path="/vuedetail/:id"
          element={
            <ContenuLayout>
              <VueDetail />
            </ContenuLayout>
          }
        />
        <Route
          path="/login"
          element={
            <IntroLayout>
              <Login />
            </IntroLayout>
          }
        />
        <Route
          path="/register"
          element={
            <IntroLayout>
              <Register />
            </IntroLayout>
          }
        />
      </Routes>
      {/* <SideBarre /> */}
    </div>
  );
}

export default App;
