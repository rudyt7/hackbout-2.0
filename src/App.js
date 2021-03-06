import React, { Fragment } from "react";

import Landing from "./views/Landing/Landing";
import About from "./views/About/About";
import Tracks from "./views/Tracks/Tracks";
import Mentors from "./views/Mentors/Mentors";
import Sponsors from "./views/Sponsors/Sponsors";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Landing />
      <About />
      <Tracks />
      <Mentors />
      <Sponsors />
      <Footer />
    </Fragment>
  );
}

export default App;
