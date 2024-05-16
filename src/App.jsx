import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {Banner} from "./components/Banner";

function App() {
  return (
    <Router>
        {/* <AppBar /> */}
        <Banner />
        {/* <Vorteile />
        <Ablauf />
        <RemoveNegative />
        <Faq />
        <Message />
        <Footer /> */}
    </Router>
  );
}

export default App;
