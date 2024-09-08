import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import "./styles.scss";

type Props = {
  relative?: boolean;
  size?: number;
};

function Spinner({ relative }: Props) {
  const Loading = (
    <div className="spinner-wrapper">
      <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
    </div>
  );

  if (relative) {
    return <div className="relative-wrapper">{Loading}</div>;
  }
  return Loading;
}

export default Spinner;
