import React from "react";
import { Credential } from "types";
import { useTranslation } from "react-i18next";
import { Typography } from "antd";
const { Text } = Typography;

type Props = {
  cred: Credential;
};

function ComputerInfo({ cred: { url, creds } }: Props) {
  const { t } = useTranslation();

  return (
    <div className="d-grid mt-4 card p-2">
      <div className="p-1">
        <span className="title">
          <strong>{t("credentials")}</strong>
        </span>
      </div>
      <div className="d-flex gap-1 p-1">
        <span className="title">
          <strong>{t("url")}</strong>
        </span>
        <Text>{url}</Text>
      </div>
      <div className="d-flex gap-1 p-1">
        <span className="title">
          <strong>{t("password")}</strong>
        </span>
        <Text>{creds[0].password}</Text>
      </div>
      <div className="d-flex gap-1 p-1">
        <span className="title">
          <strong>{t("username")}</strong>
        </span>
        <Text>{creds[0].username}</Text>
      </div>
    </div>
  );
}

export default ComputerInfo;
