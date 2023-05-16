import "App.css";

import LeftSidebar from "components/LeftSidebar/LeftSidebar";
import MainContent from "components/MainContent/MainContent";
import RightSidebar from "components/RightSidebar/RightSidebar";

function App() {
  return (
    <div className="App">
      <LeftSidebar />
      <MainContent />
      <RightSidebar chatDefectID="0" userID="0" />
    </div>
  );
}

export default App;
