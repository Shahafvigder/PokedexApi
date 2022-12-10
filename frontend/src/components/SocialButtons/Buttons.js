import React from "react";
import "./Buttons.css";

const Buttons = () => {
  return (
    <div className="mainButtonsDiv">
      <form action="https://instagram.com/shahafvigder?igshid=MDM4ZDc5MmU=">
        <input className="instaButton" type="submit" value="Instagram" />
      </form>
      <form action="https://www.facebook.com/profile.php?id=100006570791943&mibextid=LQQJ4d">
        <input className="facbookButton" type="submit" value="facbook" />
      </form>
      <form action="https://www.linkedin.com/in/shahaf-vigder-451781251">
        <input className="LinkdinButton" type="submit" value="Linkdin" />
      </form>
    </div>
  );
};

export default Buttons;
