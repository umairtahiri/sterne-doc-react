import React from "react";
import { AppBar } from "./components/AppBar/AppBar";
import CollapsedHeader from "./components/CollapsedHeader/CollapsedHeader";
import Banner from "./components/Banner/Banner";
import Vorteile from "./components/Vorteile/Vorteile";
import Ablauf from "./components/Ablauf/Ablauf";
import RemoveNegative from "./components/RemoveNegtive/RemoveNegative";
import Faq from "./components/Faq/Faq";
import Message from "./components/Message/Message";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <AppBar />
      <CollapsedHeader />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Vorteile />
              <Ablauf />
              <RemoveNegative />
              <Faq />
              <Message />
            </>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
