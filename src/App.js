import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import Layout from "./Layout";


function App() {
  // const lang = "en" && ""
  const lang = ""

  return (
    <div className="app">
      <Routes>
        <Route path={`/${lang}/`} element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path={`/${lang}/about-us`} element={<AboutUs />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
