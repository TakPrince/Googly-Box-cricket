import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/hero/hero";
import Program from "./components/programs/program.jsx";
import Reasons from "./components/reasons/reasons.jsx";
// import Plan from "./components/Plans/plan.jsx";
import Testimonial from "./components/testimonial/testimonial.jsx";
import AboustUs from "./components/about-us/aboustUs.jsx";
import Footer from "./components/footer/footer.jsx";
import ProgramDetail from "./components/programDetail/ProgramDetail.jsx"; // New component for detailed program view

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Program />
                <Reasons />
                {/* <Plan /> */}
                <Testimonial />
                <AboustUs />

                <Footer />
              </>
            }
          />

          {/* Dynamic Route for Program Details using program name */}
          <Route path="/program/:programName" element={<ProgramDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
