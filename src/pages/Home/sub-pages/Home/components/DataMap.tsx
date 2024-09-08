import React from "react";
import { Typography } from "antd";
import { useTranslation } from "react-i18next";
import Table from "./Table";
import { TLogObject } from "types";
import ComputerInfo from "./ComputerInfo";
const { Title } = Typography;

type Props = {
  data: TLogObject[];
};

function DataMap({ data }: Props) {
  const { t } = useTranslation();

  return (
    <div className="d-flex justify-content-center">
      <div>
        {data.map((item) => {
          return (
            <div key={item.id}>
              <Title level={4}>
                {t("computerId")} <span className="ms-2">#{item.id}</span>
              </Title>
              <Table item={item.computer_information} />

              {item.credentials.map((cred) => {
                return (
                  <ComputerInfo cred={cred} key={cred.creds[0].username} />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DataMap;
