import { Outlet } from "react-router-dom";
import "./App.css";
import Menu from "./component/Menu";
import Sidebar from "./component/Sidebar";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import CopyrightText from "./component/CopyrightText";
// ..
AOS.init();

function App() {
  return (
    <>
      <div className=" w-11/12 mx-auto xl:grid grid-cols-3">
        <Sidebar></Sidebar>
        <div className="col-span-2">
          <Menu></Menu>

          <Outlet></Outlet>
        </div>
      </div>
      <CopyrightText></CopyrightText>
    </>
  );
}

export default App;
