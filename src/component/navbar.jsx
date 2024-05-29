import React from "react";
import { useState } from "react";
import "./navbar.css";
import user from "../images/user.png";
import time from "../images/time.png";
import setting from "../images/setting.png";
import home from "../images/home.png";

export default function BottomNavBar() {
  const [activeicon, setactiveicon] = useState("home");
  const changeactiveicon = (name) => {
    setactiveicon(name);
  };

  return (
    <div className="navbarcontainer">

      <div className="2ndactivediv">
        {/* <div className="dissapear"></div> */}
        <div className={activeicon=="home"?"active":""}>
          <img
            src={home}
            alt="home"
            className="icon"
            onClick={() => changeactiveicon("home")}
          />
        </div>
      </div>

      <div>
        {/* <div className="dissapear"></div> */}

        <div className={activeicon=="time"?"active":""}>
          <img
            src={time}
            alt="time"
            className="icon"
            onClick={() => changeactiveicon("time")}
          />
        </div>
      </div>

      <div>
        {/* <div className="dissapear"></div> */}
        <div className={activeicon=="user"?"active":""}>
          <img
            src={user}
            alt="user"
            className="icon"
            onClick={() => changeactiveicon("user")}
          />
        </div>
      </div>

      <div>
        {/* <div className="dissapear"></div> */}
        <div className={activeicon=="setting"?"active":""}>
          <img
            src={setting}
            alt={"setting"}
            className="icon"
            onClick={() => changeactiveicon("setting")}
          />
        </div>
      </div>

    </div>
  );
}
