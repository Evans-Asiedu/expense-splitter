import NavBar from "./components/NavBar";
import GroupDetailsPage from "./components/pages/GroupDetailsPage";

import type { Group } from "./models/GroupModels";
import { getGroup } from "./services/GroupService";
// import GroupListPage from "./components/pages/GroupListPage";
// import HomePage from "./components/pages/HomePage";

function App() {
  const group: Group | undefined = getGroup("g2");

  if (!group) return <p>No Group</p>;

  return (
    <>
      <div className="h-screen bg-background">
        <NavBar />
        <GroupDetailsPage group={group} />
      </div>
    </>
  );
}

export default App;
