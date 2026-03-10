import Nouveautes from "./pages/Nouveautes";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
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
import HomeSlide1 from "./pages/intro/components/HomeSlide1";
import HomeSlide2 from "./pages/intro/components/HomeSlide2";
import HomeSlide3 from "./pages/intro/components/HomeSlide3";
import HomeSlides from "./pages/intro/HomeSlides";

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
        <Route element={<PrivateRoute />}>
          <Route
            path="/home-slide-1"
            element={
              <HomeSlides>
                <HomeSlide1 />
              </HomeSlides>
            }
          />
          <Route
            path="/home-slide-2"
            element={
              <HomeSlides>
                <HomeSlide2 />
              </HomeSlides>
            }
          />
          <Route
            path="/home-slide-3"
            element={
              <HomeSlides>
                <HomeSlide3 />
              </HomeSlides>
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
            path="/vuedetail/:slug/:numero"
            element={
              <ContenuLayout>
                <VueDetail />
              </ContenuLayout>
            }
          />
        </Route>
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
