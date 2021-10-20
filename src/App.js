import "./App.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export default function App() {
  const [open, setOpen] = useState(false);
  const handle = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="header">
        title
        <div onClick={handle} className="slider">
          {open ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>

      <div className="main">
        {open ? (
          <div className="Sidebar" style={{ display: "block" }}></div>
        ) : (
          ""
        )}
        <div className="Sidebar"></div>
        <div className="Container">
          <div className="block">hello</div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
        </div>
      </div>
    </>
  );
}
