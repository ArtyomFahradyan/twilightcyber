import React, { ReactNode } from "react";
import { TAny } from "types";

type ShadowProps = {
  children: ReactNode;
};

class ShadowRoot extends React.Component<ShadowProps> {
  attachShadow(host: TAny) {
    if (host == null || host?.shadowRoot) {
      return;
    }
    host.attachShadow({ mode: "open" });
    host.shadowRoot.innerHTML = host.innerHTML;
    host.innerHTML = "";
  }

  render() {
    return <div ref={this.attachShadow}>{this.props.children}</div>;
  }
}

export default ShadowRoot;
