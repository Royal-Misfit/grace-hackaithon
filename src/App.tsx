import "App.css";

import LeftSidebar from "components/LeftSidebar/LeftSidebar";
import MainContent from "components/MainContent/MainContent";
import RightSidebar from "components/RightSidebar/RightSidebar";

function App() {
  return (
    <div className="App">
      <LeftSidebar />
      <MainContent />
      <RightSidebar />
    </div>
  );
}

export default App;
