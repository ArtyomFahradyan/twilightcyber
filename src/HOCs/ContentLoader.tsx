import React, { ReactNode } from "react";
import { Spinner } from "components";
import "./styles.scss";

type Props = {
  isLoading: boolean;
  children: ReactNode;
};

function ContentLoader({ isLoading, children }: Props) {
  return (
    <div>
      {isLoading ? (
        <div className="content-loader-wrapper">
          <Spinner relative />
        </div>
      ) : (
        children
      )}
    </div>
  );
}

export default ContentLoader;
