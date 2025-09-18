import NavBar from "./components/NavBar";
//import GroupDetailsPage from "./components/pages/GroupDetailsPage";
import HomePage from "./components/pages/HomePage";
import type { Group } from "./models/GroupModels";
import { getGroup } from "./services/GroupService";
// import GroupListPage from "./components/pages/GroupListPage";
// import HomePage from "./components/pages/HomePage";

function App() {
  const group: Group | undefined = getGroup("g2");

  if (!group) return <p>No Group</p>;

  return (
    <>
      <div className="bg-background">
        <NavBar />
        <HomePage />
      </div>
    </>
  );
}

export default App;
