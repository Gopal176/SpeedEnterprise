import "./App.css";
import Topbar from "./sections/top-bar/Topbar";
import Mainmenu from "./sections/main-menu/Mainmenu";
import Navigationbar from "./sections/navigation-bar/Navigationbar";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Mainmenu />
      <div className="main__content">
        <Navigationbar />
      </div>
    </div>
  );
}

export default App;
