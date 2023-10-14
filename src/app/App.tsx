import {useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";

import {Router} from "../page";
import "./styles/index.scss";

function App() {
  const {pathname} = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if(pathname === "/") {
      navigate("/posts");
    }
  });
  return (
    <Router />
  );
}

export default App;
