import React, { ReactElement } from "react";
import "./styles.scss";

type Props = {
  children: ReactElement;
};
function Navigation({ children }: Props) {
  return (
    <div className="content-wrapper">
      <div className="nav-content">{children}</div>
    </div>
  );
}

export default Navigation;
