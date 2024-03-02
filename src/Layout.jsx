import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Overlay from "./components/overlayWin.jsx";
import "./styles/style.css";

const Layout = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [inData, setinData] = useState(0);

  const changeState = (childdata, value) => {
    setIsOverlayOpen(childdata);
    setinData(value);
  };
  console.log(isOverlayOpen);
  // onValueChange = { handleValueChange };
  return (
    <div>
      <Overlay
        isOpen={isOverlayOpen}
        // onClose={() => setIsOverlayOpen(false)}
        overlayToLayout={changeState}
        inData={inData}
      />
      <Header headerToLayout={changeState} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
