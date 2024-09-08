import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function LeftSide() {
  const { pathname } = useLocation();

  return (
    <div className="left-side">
      <div>
        {[{ name: "home", path: "/" }].map(({ name, path }) => (
          <NavLink
            className={({ isActive }) =>
              isActive || (path === "/" && pathname.includes("person"))
                ? "link-active"
                : ""
            }
            key={path}
            to={path}
          >
            {name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default LeftSide;
