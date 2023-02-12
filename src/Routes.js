import React from "react";
import DribbbleShoot from "pages/DribbbleShoot";
import Frame from "pages/Frame";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/frame" element={<Frame />} />
        <Route path="/dribbbleshoot" element={<DribbbleShoot />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
