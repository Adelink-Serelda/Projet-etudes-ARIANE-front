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
        <Route
          path="/home-slide-1"
          element={
            <PrivateRoute>
              <HomeSlides>
                <HomeSlide1 />
              </HomeSlides>
            </PrivateRoute>
          }
        />
        <Route
          path="/home-slide-2"
          element={
            <PrivateRoute>
              <HomeSlides>
                <HomeSlide2 />
              </HomeSlides>
            </PrivateRoute>
          }
        />
        <Route
          path="/home-slide-3"
          element={
            <PrivateRoute>
              <HomeSlides>
                <HomeSlide3 />
              </HomeSlides>
            </PrivateRoute>
          }
        />
        <Route
          path="/nouveautes"
          element={
            <PrivateRoute>
              <ContenuLayout>
                <Nouveautes />
              </ContenuLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/suggestions"
          element={
            <PrivateRoute>
              <ContenuLayout>
                <Suggestions />
              </ContenuLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/collection"
          element={
            <PrivateRoute>
              <ContenuLayout>
                <Collection />
              </ContenuLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/fil"
          element={
            <PrivateRoute>
              <ContenuLayout>
                <Fil />
              </ContenuLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/recherche"
          element={
            <PrivateRoute>
              <ContenuLayout>
                <Recherche />
              </ContenuLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/vuedetail/:id"
          element={
            <PrivateRoute>
              <ContenuLayout>
                <VueDetail />
              </ContenuLayout>
            </PrivateRoute>
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
