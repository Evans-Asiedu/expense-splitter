import NavBar from "./components/NavBar";
import CreateGroupPage from "./components/pages/CreateGroupPage";
import GroupDetailsPage from "./components/pages/GroupDetailsPage";
import GroupListPage from "./components/pages/GroupListPage";
import HomePage from "./components/pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="h-screen bg-background">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/groups" element={<GroupListPage />} />
            <Route path="/groups/:id" element={<GroupDetailsPage />} />
            {/* <Route path="/analytics" element={} /> */}
            <Route path="add-group" element={<CreateGroupPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
