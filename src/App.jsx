import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import Homepage from "./pages/Homepage.jsx";
import MapPage from "./pages/MapPage.jsx";
import reactLogo from "./assets/react.svg";

// import "./App.css";
// import "./styles/style.css";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />}></Route>
            <Route path="mappage" element={<MapPage />}></Route>
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
