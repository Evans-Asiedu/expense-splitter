import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import GroupDetailsPage from "./components/pages/GroupDetailsPage";
import GroupListPage from "./components/pages/GroupListPage";
import HomePage from "./components/pages/HomePage";

function AnimatedRoutes() {
  const location = useLocation();

  const [fadeKey, setFadeKey] = useState(location.pathname);

  // Update animation when route changes
  useEffect(() => {
    setFadeKey(location.pathname);
  }, [location]);

  return (
    <div
      key={fadeKey}
      className="fade-in transition-all duration-500 ease-in-out"
    >
      <Routes location={location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/groups" element={<GroupListPage />} />
        <Route path="/groups/:id" element={<GroupDetailsPage />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <BrowserRouter>
          <NavBar />
          <AnimatedRoutes />
        </BrowserRouter>
      </div>
    </>
  );
}

// export default App;
